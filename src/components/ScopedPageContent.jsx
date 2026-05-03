import { useEffect, useMemo, useRef } from 'react'

const PAGE_SCOPE = '.scoped-page-content'

function scopeSelector(selector) {
  const trimmed = selector.trim()

  if (!trimmed) {
    return trimmed
  }

  if (trimmed.startsWith(PAGE_SCOPE)) {
    return trimmed
  }

  if (trimmed === ':root' || trimmed === 'html' || trimmed === 'body') {
    return PAGE_SCOPE
  }

  const replaced = trimmed.replace(/(^|\s|>|\+|~)(:root|html|body)(?=\b)/g, `$1${PAGE_SCOPE}`)

  if (replaced.includes(PAGE_SCOPE)) {
    return replaced
  }

  return `${PAGE_SCOPE} ${replaced}`
}

function scopeCss(css) {
  let index = 0
  let output = ''

  while (index < css.length) {
    const nextOpen = css.indexOf('{', index)

    if (nextOpen === -1) {
      output += css.slice(index)
      break
    }

    const selectorText = css.slice(index, nextOpen)
    let depth = 1
    let cursor = nextOpen + 1

    while (cursor < css.length && depth > 0) {
      const char = css[cursor]
      if (char === '{') depth += 1
      if (char === '}') depth -= 1
      cursor += 1
    }

    const blockText = css.slice(nextOpen + 1, cursor - 1)
    const trimmedSelector = selectorText.trim()

    if (!trimmedSelector) {
      output += `${selectorText}{${blockText}}`
      index = cursor
      continue
    }

    if (trimmedSelector.startsWith('@')) {
      if (trimmedSelector.startsWith('@media') || trimmedSelector.startsWith('@supports')) {
        output += `${selectorText}{${scopeCss(blockText)}}`
      } else {
        output += `${selectorText}{${blockText}}`
      }
      index = cursor
      continue
    }

    const scopedSelector = selectorText
      .split(',')
      .map(scopeSelector)
      .join(', ')

    output += `${scopedSelector}{${blockText}}`
    index = cursor
  }

  return output
}

export default function ScopedPageContent({ pageCss, pageHtml, pageScripts = [] }) {
  const hostRef = useRef(null)
  const scopedCss = useMemo(() => scopeCss(pageCss), [pageCss])

  useEffect(() => {
    if (!hostRef.current) {
      return undefined
    }

    const insertedScripts = []

    for (const script of pageScripts) {
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
  }, [pageScripts])

  return (
    <>
      <style>{scopedCss}</style>
      <div className="scoped-page-content" ref={hostRef} dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  )
}