"use client"

import Button from "../../ui/Button/Button"
import Container from "../../ui/Container/Container"
import "./Hero.css"


export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-inner">

          <div className="hero-content">

            <h1 className="hero-title">
              Благо<span className="hero-diy">дій</span>ний фонд{" "}
              <br />
              <span className="hero-row">
                “КОЛО”
                <span className="hero-image">
                  <img src="/soldiers.png" alt="" className="hero-img-main" />
                  <img src="/logo-white.png" alt="" className="hero-img-logo" />
                </span>
              </span>
            </h1>

            <Button className="hero-btn" variant="yellow">
              Підтримати
            </Button>

          </div>

          <div className="hero-badge">
            <div className="hero-badge-icons">
              ✊ <span className="fi fi-ua"></span>
            </div>

            <div className="hero-badge-text">
              329 день<br />війни
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}