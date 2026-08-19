import { navigate } from './usePath'

function Link({ href, className, children, ...props }) {
  const onClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    navigate(href)
  }

  return (
    <a className={className} href={href} onClick={onClick} {...props}>
      {children}
    </a>
  )
}

export default Link