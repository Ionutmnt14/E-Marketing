import React, { useState } from "react";
import {
  BatteryCharging,
  Wifi,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  ZapOff,
  Magnet,
  Usb,
  TestTubeDiagonal,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-dark-bg-main text-text-primary">
      {/* --- NAVBAR (Glassmorphism) --- */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 bg-neon-blue rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <BatteryCharging className="h-8 w-8 text-neon-blue relative" />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-neon-light">
                PowerBank
              </span>
            </div>

            {/* Meniu Desktop */}
            <div className="hidden md:flex space-x-8">
              {["Despre Noi", "Wireless", "Tehnologie"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-text-secondary hover:text-neon-blue transition duration-300 text-sm uppercase tracking-wider font-medium relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <button className="bg-neon-blue/10 text-neon-blue border border-neon-blue/30 px-6 py-2 rounded-full hover:bg-neon-blue hover:text-white transition duration-300 cursor-pointer font-medium flex items-center gap-2">
                Contact <ChevronRight size={16} />
              </button>
            </div>

            {/* Buton Mobil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-primary p-2 cursor-pointer hover:text-neon-blue transition"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Meniu Mobil Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-dark-bg-main/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col text-center">
            {["Produse", "Wireless", "Tehnologie", "Despre noi"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-text-primary hover:text-neon-blue py-2 text-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative py-32 lg:py-40 px-4 text-center overflow-hidden">
        {/* Imagine Fundal cu Overlay */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-dark-bg-main/80 mix-blend-multiply"></div>{" "}
          {/* Overlay întunecat */}
          <div className="absolute inset-0 bg-linear-to-t from-dark-bg-main via-transparent to-transparent"></div>{" "}
          {/* Gradient de jos în sus pentru blending */}
        </div>

        {/* Efecte de lumină abstracte (Blur blobs) */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-neon-light mb-6 backdrop-blur-sm">
            <Zap size={16} className="text-neon-blue" /> Noua generație de
            powerbank-uri este aici.
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            Putere{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-white">
              Fără Limite
            </span>
            . <br />
            Oriunde Te Afli.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Soluții moderne de alimentare pentru smartphone-uri, tablete și
            dispozitive smart – oriunde te-ai afla.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <button className="group bg-neon-blue text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 relative overflow-hidden">
              <span className="relative z-10">Explorează Produsele</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-white/30 backdrop-blur-md">
              Vezi Tehnologia
            </button>
          </div> */}
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-dark-bg-sec relative z-10" id="tehnologie">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neon-blue">Tehnologie</span> Avansată
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Energie inteligentă, oriunde ai nevoie. Încărcare rapidă fără
              compromisuri.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover-glow group">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                <Wifi className="text-neon-blue w-8 h-8 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Încărcare Wireless Ultra-Rapidă
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Tehnologie Qi optimizată pentru putere maximă și stabilitate.
                Încarcă dispozitivele compatibile fără cabluri, rapid și
                eficient, chiar și în mișcare.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover-glow group">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                <TestTubeDiagonal className="text-neon-blue w-8 h-8 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Celule LiFePO4 de Înaltă Performanță
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Baterii de ultimă generație cu peste 3000 de cicluri de
                încărcare, siguranță sporită și eficiență termică superioară
                pentru o durată de viață extinsă.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover-glow group">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                <ShieldCheck className="text-neon-blue w-8 h-8 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Design Rezistent & Premium
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Carcasă durabilă, rezistentă la șocuri și uzură zilnică,
                construită din materiale de calitate superioară pentru utilizare
                intensivă, acasă sau în deplasare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE 1: Ecosystem --- */}
      <section
        className="py-24 bg-dark-bg-main relative overflow-hidden"
        id="produse"
      >
        {/* Linie decorativă de fundal */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neon-blue/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 md:flex items-center gap-16">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10 relative">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Ecosistemul <br />{" "}
              <span className="text-neon-blue">PowerBank</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Am creat un ecosistem inteligent de alimentare mobilă, unde power
              bank-ul wireless comunică eficient cu dispozitivele tale pentru a
              oferi încărcare rapidă, sigură și optimizată în timp real, oriunde
              te afli.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Încărcare Wireless & Cablată Ultra-Rapidă",
                "Monitorizare Inteligentă a Energiei",
                "Putere Mare într-un Format Portabil",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center shrink-0">
                    <ChevronRight size={14} className="text-neon-blue" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-neon-blue font-bold hover:text-white transition flex items-center gap-2 group cursor-pointer">
              Vezi specificațiile complete{" "}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Product Image Showcase (Right Side) */}
          <div className="md:w-1/2 relative z-10">
            {/* Blob de fundal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon-blue/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Imagine principală */}
            <div className="relative z-20 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-neon-blue/5 hover-glow cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-dark-bg-main/80 via-transparent to-transparent z-10"></div>
              <img
                src="/images/Hero1.png"
                alt="Power Station"
                className="w-full h-auto transform hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
            {/* Imagine secundară (offset) */}
            <div className="absolute -bottom-12 -right-6 w-2/3 z-30 rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl hover-glow cursor-pointer hidden md:block">
              <div className="absolute inset-0 bg-linear-to-t from-dark-bg-main/80 via-transparent to-transparent z-10"></div>
              <img
                src="/images/Charger.png"
                alt="5G Router"
                className="w-full h-auto transform hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- NOUA SECȚIUNE: WIRELESS ULTRA-RAPID --- */}
      <section
        className="py-24 bg-dark-bg-sec relative overflow-hidden"
        id="wireless"
      >
        <div className="max-w-7xl mx-auto px-4 md:flex items-center gap-16 flex-row-reverse">
          {/* Text Content (Right Side this time) */}
          <div className="md:w-1/2 mb-12 md:mb-0 z-10 relative">
            <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full px-4 py-1.5 text-sm text-neon-blue mb-6">
              <ZapOff size={16} /> Nou: Magnetic & Wireless
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Viteză Supremă. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-white">
                Fără Cabluri.
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              PowerBank redefinește încărcarea portabilă. Se atașează magnetic
              instantaneu și oferă încărcare wireless ultra-rapidă, într-un
              design ultra-subțire din aluminiu premium, creat pentru mobilitate
              maximă.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Atașare magnetică Snap & Go",
                "Încărcare Wireless Ultra-Rapidă 25W",
                "Port USB-C PD 45W bidirecțional",
                "Design Ultra-Subțire, Ready for Travel",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="w-8 h-8 rounded-lg bg-dark-card border border-white/5 flex items-center justify-center shrink-0 text-neon-blue">
                    {index === 0 ? (
                      <Magnet size={18} />
                    ) : index === 1 ? (
                      <Wifi size={18} />
                    ) : index === 2 ? ( // <--- Aici a fost corectura
                      <Usb size={18} />
                    ) : (
                      <BatteryCharging size={18} />
                    )}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Images (Left Side this time) */}
          <div className="md:w-1/2 relative z-10">
            {/* Blob de fundal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Imagine principală (close-up magnetic) */}
            <div className="relative z-20 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-neon-blue/5 hover-glow cursor-pointer">
              <img
                src="/images/Snap.png"
                alt="Wireless Power Bank magnetic attach"
                className="w-full h-auto transform hover:scale-105 transition duration-700 ease-in-out"
              />
              {/* Un gradient subtil în partea de jos pentru text */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-dark-bg-sec/90 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-dark-bg-main pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BatteryCharging className="h-6 w-6 text-neon-blue" />
              <span className="font-bold text-xl text-white">PowerBank</span>
            </div>
            <p className="text-text-secondary">
              Descoperă tehnologia noastră de încărcare rapidă wireless pentru
              alimentarea dispozitivelor tale în orice moment, fără cabluri și
              fără așteptare.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Caracteristici</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Încărcare Ultra-Rapidă
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Compatibilitate Universală
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Baterie de Mare Capacitate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Beneficii</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Încărcare Fără Fir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Portabil și Eficient
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Ideal pentru Călătorii
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-text-secondary mb-4 text-sm">
              Abonează-te pentru noutăți și oferte exclusive.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-text-primary focus:outline-none focus:border-neon-blue transition w-full"
              />
              <button className="bg-neon-blue hover:bg-neon-light text-white px-4 rounded-r-lg transition cursor-pointer">
                Ok
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
          <p>
            &copy; {new Date().getFullYear()} PowerBank. Toate drepturile
            rezervate.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition">
              Termeni & Condiții
            </a>
            <a href="#" className="hover:text-neon-blue transition">
              Politica de Confidențialitate
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
