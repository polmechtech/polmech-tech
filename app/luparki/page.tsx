export default function PolmechWoodSplitterLandingPage() {
  const whatsappNumber = "+48512077770";
  const whatsappLink = "https://wa.me/48512077770";
  const allegroStoreLink = "https://allegro.pl/uzytkownik/TRENDECO";
  const backgroundImage = "/wood-splitter-bg.jpg";

  const advantages = [
    {
      title: "Bez hydrauliki",
      text: "Mechaniczna konstrukcja przekładniowa bez siłowników, pomp, przewodów hydraulicznych i oleju roboczego.",
    },
    {
      title: "Szybka praca",
      text: "Cykliczny ruch klina pozwala szybko przygotowywać drewno opałowe, szczególnie przy pracy seryjnej.",
    },
    {
      title: "Do trudnego drewna",
      text: "Do pni, krzywych polan, rogatin, rozwidleń i nieregularnych kawałków drewna.",
    },
    {
      title: "Moc mechaniczna",
      text: "Napęd przekładniowy przenosi energię w prosty i odporny sposób, bez nadmiernie skomplikowanej obsługi.",
    },
  ];

  const engineeringPoints = [
    "techniczny upgrade bazowej konstrukcji",
    "adaptacja przez polskich inżynierów",
    "projekt rozwijany pod normy bezpieczeństwa UE",
    "produkcja i kompletacja w Polsce",
    "serwis oraz części dostępne lokalnie",
  ];

  const useCases = [
    "gospodarstwa domowe",
    "małe firmy usługowe",
    "przygotowanie drewna opałowego",
    "praca z drewnem nieregularnym",
  ];

  return (
    <main
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-gradient-to-b from-black/75 via-black/55 to-black/80">
        <section className="relative min-h-screen flex items-center px-6 py-10">
          <div className="w-full max-w-6xl mx-auto">
            <header className="flex items-center justify-between mb-16">
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-white">polmech</span>
                <span className="text-red-500">.tech</span>
              </div>

              <a
                href={whatsappLink}
                className="hidden sm:inline-flex rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/20 transition"
              >
                WhatsApp {whatsappNumber}
              </a>
            </header>

            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-red-500/40 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-100 mb-6">
                Polska produkcja • łuparki przekładniowe
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Łuparki przekładniowe do drewna opałowego
              </h1>

              <p className="mt-6 max-w-3xl text-lg sm:text-xl text-neutral-200 leading-relaxed">
                Mechaniczne łuparki bez hydrauliki stworzone do ciężkiej pracy
                z drewnem opałowym. Konstrukcja rozwijana w Polsce jako mocna,
                szybka i prosta alternatywa dla klasycznych łuparek
                hydraulicznych.
              </p>

              <p className="mt-5 max-w-3xl text-neutral-300 text-lg leading-relaxed">
                Przystosowane do pracy z drewnem nieregularnym: pniami,
                rogatinami, krzywymi i trudnymi polanami o średnicy do około
                40 cm i długości do około 50 cm.
              </p>

              <div className="mt-10">
                <a
                  href={allegroStoreLink}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold hover:bg-red-500 transition shadow-2xl shadow-red-950/40"
                >
                  Zobacz ofertę Allegro
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">
                Dlaczego łuparka przekładniowa
              </p>

              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
                Prostsza konstrukcja. Większa odporność.
              </h2>

              <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
                Mechaniczny napęd przekładniowy eliminuje wiele problemów
                typowych dla hydrauliki: wycieki, przewody, pompy oraz spadki
                wydajności podczas ciężkiej pracy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/45 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-transparent">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">
                Polski upgrade konstrukcji
              </p>

              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
                Nie przypadkowy import.
              </h2>

              <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
                Bazowe rozwiązanie zostało technicznie rozwinięte i dostosowane
                do realnej pracy z drewnem opałowym oraz wymagań rynku Unii
                Europejskiej.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/45 p-7 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-6">
                Co zostało dopracowane
              </h3>

              <div className="space-y-4">
                {engineeringPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-neutral-200">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-transparent">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10">
            <div className="rounded-3xl bg-red-600/90 p-8 lg:p-10 shadow-2xl shadow-red-950/30">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Drewno trudne do ustawienia?
              </h2>

              <p className="mt-5 text-red-50 text-lg leading-relaxed">
                Pień, rozwidlenie, krzywe polano, nierówny klocek — właśnie przy
                takim materiale widać sens mocnej łuparki mechanicznej z
                napędem przekładniowym.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/15 p-5">
                  <div className="text-4xl font-black">40 cm</div>
                  <div className="text-red-50 mt-1">średnica drewna</div>
                </div>

                <div className="rounded-2xl bg-white/15 p-5">
                  <div className="text-4xl font-black">50 cm</div>
                  <div className="text-red-50 mt-1">długość polana</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/45 p-8 lg:p-10 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-6">
                Typowe zastosowania
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-5 text-neutral-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-neutral-400 leading-relaxed">
                Dobór wersji zależy od rodzaju drewna, intensywności pracy oraz
                konfiguracji napędu.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-transparent">
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-black/45 p-8 lg:p-12 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">
                  Serwis i odpowiedzialność
                </p>

                <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
                  Polska gwarancja i serwis od producenta.
                </h2>

                <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
                  Maszyna jest produkowana i kompletowana w Polsce. Zapewniamy
                  wsparcie techniczne, części, serwis gwarancyjny oraz
                  pogwarancyjny.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-5 border border-white/10">
                  <div className="font-black text-xl">Kontakt bezpośredni</div>
                  <div className="text-neutral-300 mt-1">
                    WhatsApp / telefon: {whatsappNumber}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 border border-white/10">
                  <div className="font-black text-xl">Sprzedaż online</div>
                  <div className="text-neutral-300 mt-1">
                    Oferta dostępna przez Allegro oraz bezpośredni kontakt z
                    producentem.
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 border border-white/10">
                  <div className="font-black text-xl">
                    Doradztwo przed zakupem
                  </div>
                  <div className="text-neutral-300 mt-1">
                    Dobór wersji do średnicy drewna, długości polan i
                    intensywności pracy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-transparent px-6 py-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-neutral-400 text-sm">
            <div>
              <span className="font-black text-white">polmech.tech</span> —
              łuparki przekładniowe do drewna opałowego
            </div>

            <div>Produkcja Polska • serwis • wsparcie techniczne</div>
          </div>
        </footer>
      </div>

      <a
        href={whatsappLink}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-950/50 hover:bg-green-400 transition"
        aria-label="Kontakt przez WhatsApp"
      >
        <span className="text-3xl font-black">☎</span>
      </a>
    </main>
  );
}