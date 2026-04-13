"use client"

import "./Header.css"
import Link from "next/link"
import { useState } from "react"
import Container from "../ui/Container/Container"
import Button from "../ui/Button/Button"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState("UA")

  return (
    <header className="header">
      <Container>
        <div className="header-inner">
            
          <div className="header-left">
            <img
              src="/logo.png"
              alt="logo"
              className="header-logo"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
            <div className="menu-overlay">

                {/* CLOSE BUTTON */}
                <button
                className="menu-close"
                onClick={() => setMenuOpen(false)}
                >
                ✕
                </button>

                {/* MENU */}
                <div className="menu-content">
                <Link href="#" onClick={() => setMenuOpen(false)}>Про Фонд</Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>Проекти</Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>Партнерам</Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>Банк ідей</Link>
                </div>

            </div>
            )}
          </div>

          {/* CENTER NAV (desktop only) */}
          <nav className="header-nav">
            <Link href="#">Про Фонд</Link>
            <Link href="#">Проекти</Link>
            <Link href="#">Партнерам</Link>
            <Link href="#">Банк ідей</Link>
          </nav>

          {/* RIGHT */}
          <div className="header-right">

            {/* LANG */}
            <div className="lang">
              <button
                className="lang-btn"
                onClick={() => setLangOpen(!langOpen)}
              >
                {lang} ▾
              </button>

              {langOpen && (
                <div className="lang-dropdown">
                  <div onClick={() => { setLang("UA"); setLangOpen(false) }}>
                    UA
                  </div>
                  <div onClick={() => { setLang("EN"); setLangOpen(false) }}>
                    EN
                  </div>
                </div>
              )}
            </div>

            <Button>Підтримати</Button>

          </div>

        </div>
      </Container>
    </header>
  )
}