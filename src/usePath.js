import { useEffect, useState } from 'react'

export function usePath() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return pathname
}

export function navigate(href) {
  const url = new URL(href, window.location.origin)
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))

  if (url.hash) {
    requestAnimationFrame(() => {
      document.querySelector(url.hash)?.scrollIntoView()
    })
    return
  }

  window.scrollTo(0, 0)
}