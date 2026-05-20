"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  const services = [
    {
      title: "Meta Ads",
      desc: "Tworzymy kampanie na Facebooku i Instagramie nastawione na konkretne zapytania od klientów, a nie tylko kliknięcia.",
    },
    {
      title: "Google Ads",
      desc: "Docieramy do osób, które aktywnie szukają Twoich usług i są bliżej decyzji zakupowej.",
    },
    {
      title: "Landing Pages",
      desc: "Budujemy strony sprzedażowe, które jasno pokazują ofertę i zamieniają ruch w wartościowe leady.",
    },
    {
      title: "Lejek sprzedażowy",
      desc: "Układamy proces od kliknięcia reklamy do kontaktu z klientem, żeby nic nie ginęło po drodze.",
    },
    {
      title: "Raportowanie wyników",
      desc: "Pokazujemy prosto: ile było leadów, jaki był koszt i które kampanie najlepiej działają.",
    },
    {
      title: "Optymalizacja kampanii",
      desc: "Regularnie testujemy reklamy, grupy odbiorców i komunikaty, żeby obniżać koszt pozyskania klienta.",
    },
  ];

  const steps = [
    "Analiza obecnej sytuacji firmy",
    "Strategia pozyskiwania leadów",
    "Przygotowanie reklam i landing page",
    "Start kampanii i testy",
    "Optymalizacja i skalowanie wyników",
  ];

  const industries = [
    "Firmy budowlane",
    "Kliniki i gabinety medyczne",
    "Usługi lokalne",
    "Firmy remontowe",
    "Specjaliści premium",
    "Biznesy B2B",
  ];

  const faq = [
    {
      q: "Czy gwarantujecie konkretne wyniki?",
      a: "Nie obiecujemy nierealnych liczb bez analizy. Najpierw sprawdzamy ofertę, rynek i budżet, a potem tworzymy strategię opartą na danych.",
    },
    {
      q: "Dla kogo jest ta usługa?",
      a: "Dla firm, które chcą regularnie pozyskiwać zapytania od klientów i przestać polegać tylko na poleceniach lub przypadkowym ruchu.",
    },
    {
      q: "Czy potrzebuję już mieć stronę internetową?",
      a: "Nie. Możemy przygotować landing page od podstaw albo poprawić obecny, jeśli już go masz.",
    },
    {
      q: "Ile trwa uruchomienie kampanii?",
      a: "Zazwyczaj kampanię można przygotować i uruchomić po ustaleniu oferty, grupy docelowej, budżetu i materiałów reklamowych.",
    },
  ]; 

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/logo2.png"
              alt="Strefa Leadów Logo"
              className="w-full max-w-[1100px] h-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
                Zamieniamy reklamy w
                <span className="text-blue-600 block">realne zapytania.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Wiemy, jak wygląda problem firm bez stałego dopływu klientów — nieregularne zapytania, przepalany budżet i brak przewidywalności. Tworzymy systemy lead generation, które pomagają zdobywać wartościowych klientów regularnie i skalować biznes bez chaosu.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
    

  <motion.a
    href="https://calendly.com/strefaleadow/30min"
      target="_blank"
  rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-blue-600 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition"
  >
    Umów darmową konsultację
  </motion.a>
             <motion.a
    href="#kontakt"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition"
  >
    Napisz do nas
  </motion.a>

              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-14">
                <div>
                  <h3 className="text-4xl font-black">+250%</h3>
                  <p className="text-gray-500 mt-2">potencjalny wzrost zapytań</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black">24/7</h3>
                  <p className="text-gray-500 mt-2">system pozyskiwania leadów</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black">ROI</h3>
                  <p className="text-gray-500 mt-2">kampanie nastawione na wynik</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-[32px] shadow-2xl p-10 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">Przykładowy efekt współpracy</h3>
                    <p className="text-gray-500">Tak może wyglądać wzrost po wdrożeniu systemu lead generation</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    ↑
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold">Leady miesięcznie</span>
                      <span className="text-blue-600 font-bold">142</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[78%] h-full bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900 text-white rounded-2xl p-6">
                      <p className="text-sm text-gray-300 mb-2">Koszt leada</p>
                      <h4 className="text-3xl font-black">-38%</h4>
                    </div>
                    <div className="bg-blue-600 text-white rounded-2xl p-6">
                      <p className="text-sm text-blue-100 mb-2">Konwersja</p>
                      <h4 className="text-3xl font-black">+61%</h4>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-slate-900 rounded-3xl p-8 text-white">
                    <p className="text-blue-100 mb-3">System wzrostu</p>
                    <h4 className="text-3xl font-black leading-tight">
                      Skaluj firmę dzięki stałemu dopływowi zapytań.
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-slate-50 rounded-[32px] p-10 border border-gray-100">
            <p className="text-red-500 font-bold uppercase tracking-widest mb-4">Problem</p>
            <h2 className="text-4xl font-black mb-6">Firmy nie potrzebują więcej kliknięć. Potrzebują klientów.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wiele firm inwestuje w reklamy, ale nie widzi stabilnych efektów. Brakuje jasnej strategii, dobrego komunikatu, skutecznej strony i procesu obsługi leadów. Efekt? Budżet znika, a zapytań nadal jest za mało.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-slate-900 rounded-[32px] p-10 text-white shadow-2xl">
            <p className="text-blue-200 font-bold uppercase tracking-widest mb-4">Rozwiązanie</p>
            <h2 className="text-4xl font-black mb-6">Budujemy system, który pracuje na wynik.</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Łączymy reklamy, landing page, ofertę i analizę danych w jeden spójny proces. Dzięki temu firma może pozyskiwać leady regularnie, mierzyć efekty i skalować działania tam, gdzie naprawdę działa sprzedaż.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="oferta" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">Nasze usługi</p>
            <h2 className="text-5xl font-black mb-6">Kompletny system pozyskiwania klientów</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nie robimy reklam „dla zasięgu”. Tworzymy działania, które mają prowadzić do rozmów, zapytań i sprzedaży.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl transition border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-black mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 {/* CTA */}
      <section className="py-24" >
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-slate-900 to-blue-700 rounded-[40px] p-14 text-center text-white shadow-2xl">
            <p className="uppercase tracking-[0.3em] text-blue-200 font-semibold mb-4">Gotowy na wzrost?</p>
            <h2 className="text-5xl font-black mb-6 leading-tight">Sprawdźmy, jak możemy zwiększyć liczbę leadów w Twojej firmie.</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Umów bezpłatną konsultację. Przeanalizujemy Twoją sytuację, ofertę i możliwości pozyskiwania klientów.
            </p>
           
 <div className="flex flex-wrap justify-center gap-4">

  <motion.a
    href="https://calendly.com/strefaleadow/30min"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-white text-slate-900 hover:bg-gray-100 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-xl"
  >
    Umów darmową konsultację
  </motion.a>

  <motion.a
    href="#kontakt"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-white text-slate-900 hover:bg-gray-100 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-xl"
  >
    Napisz do nas
  </motion.a>

</div>

          </div>
        </div>
      </section>




      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">Dla kogo?</p>
              <h2 className="text-5xl font-black mb-6">Pracujemy z firmami, które chcą rosnąć przewidywalnie.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Najlepiej sprawdzamy się tam, gdzie jeden klient ma wysoką wartość, a regularny dopływ zapytań realnie wpływa na rozwój firmy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-50 border border-gray-100 rounded-2xl p-6 font-bold text-lg">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="proces" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-300 font-bold uppercase tracking-widest mb-4">Jak działamy?</p>
            <h2 className="text-5xl font-black mb-6">Prosty proces nastawiony na wynik</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Każdy etap ma konkretny cel: lepsze zrozumienie klienta, skuteczniejszą reklamę i więcej jakościowych zapytań.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/10 border border-white/10 rounded-[28px] p-6"
              >
                <div className="text-blue-300 text-4xl font-black mb-6">0{index + 1}</div>
                <h3 className="text-xl font-bold leading-tight">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-5xl font-black mb-6">Najczęstsze pytania</h2>
          </div>

          <div className="space-y-5">
            {faq.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-gray-100 rounded-[28px] p-8">
                <h3 className="text-2xl font-bold mb-3">{item.q}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100">
            <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">Kontakt</p>
            <h2 className="text-4xl font-black mb-6">Chcesz więcej leadów?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Wypełnij formularz, a przygotujemy dla Ciebie pierwszą analizę możliwości pozyskiwania klientów.
            </p>

 <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-5"
>
   <input
    type="hidden"
    name="from_name"
    value="Strefa Leadów"
  />
  <input
    type="hidden"
    name="access_key"
    value="18f5f87d-5482-4202-bb65-54bfe1d92ced"
  />

  <input
    type="hidden"
    name="subject"
    value="Nowy lead - Strefa Leadów"
  />

  <input
    type="hidden"
    name="redirect"
    value="https://strefa-leadow.netlify.app/success"
  />

  <input
    type="text"
    name="name"
    placeholder="Imię i nazwisko"
    required
    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
  />

  <input
    type="email"
    name="email"
    placeholder="Adres e-mail"
    required
    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
  />

  <input
    type="text"
    name="company"
    placeholder="Branża / firma"
    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
  />

  <textarea
    name="message"
    placeholder="Napisz krótko, czego potrzebujesz"
    required
    className="w-full border border-gray-300 rounded-2xl px-5 py-4 min-h-32 outline-none focus:border-blue-600"
  ></textarea>

  <motion.button
    type="submit"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full bg-gradient-to-r from-blue-600 to-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg"
  >
    Wyślij zapytanie
  </motion.button>
</form>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">STREFA <span className="text-blue-600">LEADÓW</span></h3>
            <p className="text-gray-500 mt-2">Lead generation dla firm, które chcą pozyskiwać klientów przewidywalnie.</p>
          </div>

  <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium">
  <a href="#oferta" className="hover:text-blue-600 transition">
    Oferta
  </a>

  <a href="#proces" className="hover:text-blue-600 transition">
    Proces
  </a>

  <a href="#kontakt" className="hover:text-blue-600 transition">
    Kontakt
  </a>

  <a
    href="/polityka-prywatnosci"
    className="hover:text-blue-600 transition"
  >
    Polityka prywatności
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61589909435806"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-600 transition"
  >
    <Facebook size={20} />
    Facebook
  </a>

  <a
    href="https://www.instagram.com/strefaleadow/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-600 transition"
  >
    <Instagram size={20} />
    Instagram
  </a>
</div>
        </div>
      </footer>
    </div>
  );
}
