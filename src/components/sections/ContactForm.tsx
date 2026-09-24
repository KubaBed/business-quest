"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "zuzanna.wozniak@businessquest.pl";

// Klucz Web3Forms (publiczny z założenia) - zgłoszenia trafiają na skrzynkę,
// dla której klucz został wygenerowany. Bez klucza formularz otwiera program
// pocztowy (mailto), żeby strona nie traciła zapytań.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const topics = [
  "Rekrutacja",
  "Sparing partner / trudna decyzja",
  "Procesy HR i struktura zespołu",
  "Coś innego",
];

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Zapytanie ze strony - ${topic}`;

    if (!WEB3FORMS_KEY) {
      const body = [
        `Imię i nazwisko: ${name}`,
        company ? `Firma: ${company}` : null,
        `E-mail: ${email}`,
        `Temat: ${topic}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "Strona businessquest.pl",
          "Imię i nazwisko": name,
          Firma: company || "-",
          email,
          Temat: topic,
          "Wiadomość": message,
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.success) throw new Error(json?.message || res.statusText);
      form.reset();
      setTopic(topics[0]);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const hint: Record<Status, React.ReactNode> = {
    idle: WEB3FORMS_KEY
      ? "Odpowiadamy zwykle w ciągu jednego dnia roboczego."
      : "Formularz otworzy Twój program pocztowy z gotową wiadomością.",
    sending: "Wysyłamy…",
    sent: "Dziękujemy, wiadomość dotarła. Odezwiemy się wkrótce.",
    error: (
      <>
        Nie udało się wysłać. Napisz bezpośrednio na{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-magenta-deep">
          {CONTACT_EMAIL}
        </a>
        .
      </>
    ),
    mailto: "Otworzyliśmy Twój program pocztowy, wystarczy kliknąć „wyślij”.",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-brand-border bg-brand-card p-7 lg:p-9 shadow-sm"
    >
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Imię i nazwisko" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jan Kowalski"
            className={inputClass}
          />
        </Field>
        <Field label="Firma" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nazwa firmy"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="E-mail" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jan@firma.pl"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <span className="block text-sm font-semibold text-brand-text mb-2.5">
          W czym możemy pomóc?
        </span>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((t) => {
            const active = t === topic;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                  active
                    ? "bg-magenta text-white border-magenta"
                    : "bg-white text-brand-muted border-brand-border hover:border-magenta hover:text-magenta-deep"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <Field label="Wiadomość" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Napisz w kilku zdaniach, co teraz najbardziej zajmuje Ci głowę w temacie zespołu."
            className={`${inputClass} resize-y min-h-[120px]`}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group disabled:opacity-60 disabled:pointer-events-none inline-flex items-center justify-center gap-3 bg-magenta text-white rounded-full pl-7 pr-2 py-2 font-semibold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lg hover:shadow-magenta/25 active:scale-[0.98]"
        >
          Wyślij wiadomość
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </button>
        <p
          className="text-brand-muted text-[13px] leading-snug"
          aria-live="polite"
        >
          {hint[status]}
        </p>
      </div>

      <p className="mt-6 text-brand-muted text-xs leading-relaxed">
        Administratorem danych z formularza jest Business Quest sp. z o.o. Używamy ich
        tylko do odpowiedzi na zapytanie. Szczegóły w{" "}
        <Link href="/polityka-prywatnosci" className="underline hover:text-magenta-deep">
          polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-[15px] text-brand-text placeholder:text-brand-muted/70 outline-none transition-colors focus:border-magenta focus:ring-2 focus:ring-magenta/15";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-sm font-semibold text-brand-text mb-2.5">
        {label}
        {optional && (
          <span className="text-brand-muted font-normal"> — opcjonalnie</span>
        )}
      </span>
      {children}
    </label>
  );
}
