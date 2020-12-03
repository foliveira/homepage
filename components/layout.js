
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="font-sans min-h-screen bg-gray-50 text-black dark:bg-black dark:text-gray-50">
        <main>{children}</main>
      </div>
    </>
  )
}
