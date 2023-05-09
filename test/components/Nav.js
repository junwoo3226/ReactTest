import React from 'react'
import Link from 'next/link'
import NavCss from '../styles/nav.module.css'

const Nav = () => {
  return (
      <nav className={NavCss.nav}>
          <ul>
              <li>
                  <Link href="/">
                      <a>홈</a>
                  </Link>
              </li>
              <li>
                  <Link href="/dog">
                      <a>강아지</a>
                  </Link>
              </li>
              <li>
                  <Link href="/bear">
                      <a>곰</a>
                  </Link>
              </li>
              <li>
                  <Link href="/Eagle">
                      <a>독수리</a>
                  </Link>
              </li>
              <li>
                  <Link href="/Jaguar">
                      <a>표범</a>
                  </Link>
              </li>
          </ul>
      </nav>
  );
}



export default Nav