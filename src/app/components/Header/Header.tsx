"use client"

import "./Header.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import Container from "../ui/Container/Container"
import Button from "../ui/Button/Button"
import { createPortal } from "react-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState("UA")

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="header">
    {menuOpen && typeof window !== "undefined" &&
      createPortal(
        <div className="menu-overlay">
          <div className="menu-inner">

            <button
              className="menu-close"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className="menu-content">
              <Link href="#" onClick={() => setMenuOpen(false)}>Про Фонд</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Проекти</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Партнерам</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Банк ідей</Link>
            </div>

          </div>
        </div>,
        document.body
      )
}

      <Container>
        <div className="header-inner">

          <div className="header-left">
            <img
              src="/logo.png"
              alt="logo"
              className="header-logo"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <nav className="header-nav">
            <Link href="#">Про Фонд</Link>
            <Link href="#">Проекти</Link>
            <Link href="#">Партнерам</Link>
            <Link href="#">Банк ідей</Link>
          </nav>

          <div className="header-right">

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