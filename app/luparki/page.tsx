import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Łuparka przekładniowa do drewna 400V 3kW | 2 kliny | 12T",
  description:
    "Mechaniczna łuparka przekładniowa PolMech 400V 3kW z 2 klinami. Do drewna sękatego, rozwidleń i tui, do Ø40 cm i 50 cm długości. Serwis i części w Polsce.",
  alternates: { canonical: "/luparki" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://polmech.tech/luparki",
    title: "Łuparka przekładniowa do drewna 400V 3kW — PolMech",
    description:
      "2 kliny, napęd przekładniowy bez hydrauliki, do trudnego i sękatego drewna. Polska gwarancja, serwis i części.",
  },
};

const allegroUrl = "https://allegro.pl/oferta/18788891328";

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Łuparka przekładniowa do drewna 400V 3kW",
    url: "https://polmech.tech/luparki",
    description:
      "Mechaniczna łuparka przekładniowa PolMech 400V 3kW z dwoma klinami do drewna opałowego, sękatego i rozwidleń.",
    about: {
      "@type": "Product",
      name: "Łuparka do drewna PolMech 3KW/400/S",
      brand: { "@type": "Brand", name: "PolMech.tech" },
      category: "Łuparki do drewna",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Zasilanie", value: "400 V" },
        { "@type": "PropertyValue", name: "Moc silnika", value: "3 kW" },
        { "@type": "PropertyValue", name: "Liczba klinów", value: "2" },
        { "@type": "PropertyValue", name: "Maksymalna średnica drewna", value: "40 cm" },
        { "@type": "PropertyValue", name: "Maksymalna długość polana", value: "50 cm" },
        { "@type": "PropertyValue", name: "Wydajność", value: "5–6 m³/h" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.32),transparent_40%)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm font-bold text-red-400">← POLMECH.TECH</Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Łuparka mechaniczna • 400 V • 3 kW • 2 kliny
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
            Łuparka przekładniowa do drewna — do sęków, rozwidleń i trudnych polan
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            PolMech 3KW/400/S to łuparka do drewna opałowego z mechanicznym napędem
            przekładniowym. Bez pompy i siłownika hydraulicznego. Dwa przeciwległe
            kliny pracują cyklicznie, a konstrukcja jest przeznaczona także do
            drewna sękatego, tui i rozwidleń.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["400 V", "3 kW", "2 kliny", "do Ø40 cm", "do 50 cm", "5–6 m³/h", "serwis w Polsce"].map((x) => (
              <span key={x} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 font-semibold">{x}</span>
            ))}
          </div>
          <a href={allegroUrl} rel="nofollow sponsored" className="mt-10 inline-flex rounded-2xl bg-red-600 px-7 py-4 font-bold transition hover:bg-red-500">
            Sprawdź aktualną ofertę na Allegro
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black sm:text-5xl">Stworzona do trudnego drewna</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-neutral-300">
            Proste polana rozłupie wiele maszyn. Różnica pojawia się przy sękach,
            rozwidleniach, krzywych kawałkach i tui. Właśnie do takiej pracy
            zaprojektowano układ przekładniowy PolMech. Maksymalny zalecany wymiar
            drewna to około 40 cm średnicy i 50 cm długości.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Dwa kliny", "Dwa przeciwległe kliny wykonują około 19 kontaktów z drewnem na minutę."],
              ["Napęd przekładniowy", "Mechaniczny układ bez klasycznej pompy, siłownika i przewodów hydraulicznych."],
              ["400 V / 3 kW", "Silnik PROMOTOR 3 kW 400 V dobrany do pracy z przekładnią i obciążeniem łuparki."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Przekładniowa czy hydrauliczna?</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-300">
              Łuparka hydrauliczna wykorzystuje pompę i siłownik. PolMech wykorzystuje
              wolnoobrotową przekładnię i cykliczny ruch klinów. To inna zasada pracy:
              priorytetem jest szybkie, powtarzalne łupanie drewna opałowego bez
              klasycznego układu hydraulicznego.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black p-7">
            <h3 className="text-2xl font-black">Najważniejsze parametry</h3>
            <dl className="mt-6 space-y-4 text-neutral-200">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Zasilanie</dt><dd className="font-bold">400 V</dd></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Moc</dt><dd className="font-bold">3 kW</dd></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Kliny</dt><dd className="font-bold">2</dd></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Drewno</dt><dd className="font-bold">Ø do 40 cm / L do 50 cm</dd></div>
              <div className="flex justify-between gap-4"><dt>Wydajność</dt><dd className="font-bold">5–6 m³/h</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black sm:text-4xl">PolMech.tech — serwis i części w Polsce</h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-300">
            Maszyna jest dostarczana zmontowana. W zestawie znajdują się specjalne
            kleszcze do podawania drewna. Części eksploatacyjne i serwis są dostępne
            w Polsce.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={allegroUrl} rel="nofollow sponsored" className="rounded-2xl bg-red-600 px-7 py-4 font-bold hover:bg-red-500">
              Kup na Allegro
            </a>
            <Link href="/" className="rounded-2xl border border-white/15 px-7 py-4 font-bold hover:bg-white/10">
              Zobacz PolMech.tech
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
