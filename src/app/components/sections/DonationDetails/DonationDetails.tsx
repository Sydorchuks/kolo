"use client"

import { useState } from "react"
import "./DonationDetails.css"

type Row = {
  label: string
  value: string
}

const data: Row[] = [
  { label: "Отримувач:", value: "Благодійна організація «Благодійний фонд «КОЛО»" },
  { label: "Код отримувача:", value: "38813073" },
  { label: "Назва банку:", value: "АТ КБ \"ПРИВАТБАНК\"" },
  { label: "Bank SWIFT Code:", value: "PBANUA2X" },
  { label: "UAH:", value: "UA243052990000026007026706447" },
  { label: "EUR:", value: "UA663052990000026000046706747" },
  { label: "USD:", value: "UA863052990000026008036712787" }
]

export default function DonationDetails() {
  const [toast, setToast] = useState(false)

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setToast(true)
      setTimeout(() => setToast(false), 1500)
    } catch {
      console.error("copy error")
    }
  }

  return (
    <section className="donation-details">
      <div className="donation-container">

        <h2>
          Зробити благодійний внесок можна карткою або за реквізитами
        </h2>

        <div className="donation-actions">
          <button className="btn-primary">Підтримати</button>
          <button className="btn-outline">Деталі рахунків</button>
        </div>

        <div className="donation-box">

          {data.map((item) => (
            <div className="donation-row" key={item.label}>

              <p className="donation-label">{item.label}</p>

              <div className="donation-value">

                <button
                  className="copy-btn"
                  onClick={() => handleCopy(item.value)}
                >
                  <span className="copy-icon" />
                </button>

                <span>{item.value}</span>

              </div>

            </div>
          ))}

        </div>

        <div className={`toast ${toast ? "show" : ""}`}>
          Скопійовано
        </div>

      </div>
    </section>
  )
}