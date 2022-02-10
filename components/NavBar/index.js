import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Portafolio</a>
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">GitHub</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
