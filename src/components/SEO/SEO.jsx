import { useEffect } from 'react'

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (v !== undefined && v !== null) el.setAttribute(k, v)
  })
}

function upsertLinkRel(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const SEO = ({
  title,
  description,
  image,
  type = 'website',
  canonical,
}) => {
  useEffect(() => {
    const url = (typeof window !== 'undefined') ? window.location.origin + window.location.pathname : ''
    if (title) document.title = title

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description })
    }

    // Open Graph
    if (title) upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    if (description) upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical || url })
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' })
    if (title) upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    if (description) upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    if (image) upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    // Canonical
    upsertLinkRel('canonical', canonical || url)
  }, [title, description, image, type, canonical])

  return null
}

export default SEO
