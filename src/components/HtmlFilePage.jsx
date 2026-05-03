import { useEffect, useMemo, useRef, useState } from 'react'

function parseHtmlDocument(source) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(source, 'text/html')

  const title = doc.title
  const styles = Array.from(doc.querySelectorAll('style'))
    .map(node => node.textContent || '')
    .join('\n')

  const links = Array.from(doc.querySelectorAll('link[href]')).map(node => ({
    href: node.getAttribute('href') || '',
    rel: node.getAttribute('rel') || '',
    crossOrigin: node.getAttribute('crossorigin') || '',
  }))

  const scripts = Array.from(doc.querySelectorAll('script')).map(node => ({
    type: node.getAttribute('type') || '',
    src: node.getAttribute('src') || '',
    content: node.getAttribute('src') ? '' : node.textContent || '',
  }))

  doc.querySelectorAll('style, script').forEach(node => node.remove())
  doc.body.querySelectorAll('header, footer, .nav-wrap, .footer').forEach(node => node.remove())

  return {
    title,
    styles,
    links,
    scripts,
    bodyHtml: doc.body.innerHTML,
  }
}

export default function HtmlFilePage({ filePath, fallbackTitle = '' }) {
  const hostRef = useRef(null)
  const [source, setSource] = useState('')

  useEffect(() => {
    let cancelled = false

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${filePath}`)
        }

        return response.text()
      })
      .then(text => {
        if (!cancelled) {
          setSource(text)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSource('')
        }
      })

    return () => {
      cancelled = true
    }
  }, [filePath])

  const parsed = useMemo(() => {
    if (!source) {
      return null
    }

    return parseHtmlDocument(source)
  }, [source])

  useEffect(() => {
    if (!parsed) {
      return undefined
    }

    const previousTitle = document.title
    const insertedLinks = []

    if (parsed.title || fallbackTitle) {
      document.title = parsed.title || fallbackTitle
    }

    for (const link of parsed.links) {
      if (!link.href) {
        continue
      }

      const existing = document.head.querySelector(`link[href="${link.href}"]`)
      if (existing) {
        continue
      }

      const el = document.createElement('link')
      if (link.rel) el.rel = link.rel
      el.href = link.href
      if (link.crossOrigin) el.crossOrigin = link.crossOrigin
      document.head.appendChild(el)
      insertedLinks.push(el)
    }

    return () => {
      document.title = previousTitle
      insertedLinks.forEach(link => link.remove())
    }
  }, [fallbackTitle, parsed])

  useEffect(() => {
    if (!parsed || !hostRef.current) {
      return undefined
    }

    const insertedScripts = []

    for (const script of parsed.scripts) {
      const el = document.createElement('script')
      if (script.type) el.type = script.type
      if (script.src) {
        el.src = script.src
      } else if (script.content) {
        el.text = script.content
      }
      hostRef.current.appendChild(el)
      insertedScripts.push(el)
    }

    return () => {
      insertedScripts.forEach(script => script.remove())
    }
  }, [parsed])

  if (!parsed) {
    return null
  }

  return (
    <>
      <style>{parsed.styles}</style>
      <div ref={hostRef} dangerouslySetInnerHTML={{ __html: parsed.bodyHtml }} />
    </>
  )
}