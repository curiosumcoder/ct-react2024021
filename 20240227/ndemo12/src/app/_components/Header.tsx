import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand bg-light fs-5">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <i className="bi bi-house-door"></i>
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/product">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header