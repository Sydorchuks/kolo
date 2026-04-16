"use client"

import "./Humanitarian.css"

export default function Humanitarian() {
  return (
    <section className="humanitarian">
      <div className="humanitarian-container">

        <h2>
          Прийом гуманітарної допомоги у Польщі <span className="fi fi-pl"></span>
        </h2>

        <p className="humanitarian-text">
          Ви можете самі замовити необхідні речі за кордоном і відправити їх на один із наших складів у Польщі.
        </p>

        <p className="humanitarian-link">
          Перелік того, що потрібно, <span>за посиланням.</span>
        </p>

        <div className="humanitarian-cards">

          <div className="humanitarian-card left">
            <h3>Адреса для відправки посилок з країн ЄС:</h3>

            <div className="card-content">
              <p>Etravel</p>
              <p>Ul. Miodowa 24 lokal 15</p>
              <p>35-303 Rzeszów, Polska</p>
              <p>+48 600 943 580</p>
              <p>Teresa Zajac</p>
            </div>

            <img
              src="/wheel-white.png"
              alt=""
              className="card-decor"
            />
          </div>

          <div className="humanitarian-card">
            <h3>Адреса для відправки посилок з будь-яких інших країн (крім ЄС):</h3>

            <div className="card-content">
              <p>Fundacja: Miller & Smith – Friends of Ukraine</p>
              <p>attn: Mr. Andrii Melnyk</p>
              <p>NIP: 6343008292</p>
              <p>REGON: 521583946</p>
              <p>Sejmu Czteroletniego 2 / 8, Warszawa, Poland, 02-972</p>
              <p>+48886145886</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}