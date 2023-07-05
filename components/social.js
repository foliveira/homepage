export default function Social({ url, children, rel="noopener"}) {
  return (
    <a href={url} target="_blank" rel={rel} className="mx-3 font-bold py-3 px-4 mb-6 lg:mb-0">
      { children }
    </a>
  )
}
