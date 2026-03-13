import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: '¿Cromática?', href: '#sobre' },
    { label: 'Convocatoria', href: '#convocatoria' },
    { label: 'Conciertos', href: '#conciertos' },
    { label: 'Artistas', href: '#artistas' },
    { label: 'Diseñadores', href: '#disenadores' },
    { label: 'Emprendedores', href: '#emprendedores' },
    { label: 'Autos', href: '#autos' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Registro', href: '#registro' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 shadow-lg backdrop-blur-lg border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Quitamos altura fija y usamos padding vertical */}
          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
           <a
              href="#hero"
              className="flex items-center gap-3 shrink-0"
            >
              {/* Aquí pusimos la Mascota reemplazando el cuadro y las Sparkles */}
              <img 
                src="/images/favicon.png" 
                alt="Mascota Cromática" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md hover:scale-110 transition-transform duration-300 scale-[1.5] origin-center" 
              />

              <div className="flex flex-col leading-tight">
                <span
                  className="text-2xl font-black text-gradient"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CROMÁTICA
                </span>
                <span className="text-xs font-bold text-[#FF8A00] tracking-widest">
                  2.0 • 2026
                </span>
              </div>
            </a>

            {/* LINKS DESKTOP */}
            <div className="hidden xl:flex items-center gap-6 ml-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-gray-600 hover:text-[#FF8A00] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* BOTÓN DESKTOP */}
            <div className="hidden xl:flex items-center ml-6">
              <a
                href="#registro"
                className="px-7 py-3 text-sm font-bold text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, #FF8A00 0%, #FF6B9D 50%, #AB47BC 100%)',
                }}
              >
                Registrarse
              </a>
            </div>

            {/* HAMBURGUESA */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-gray-700 hover:text-[#FF8A00] transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 bottom-0 w-[320px] bg-white shadow-2xl transform transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block text-base font-bold text-gray-700 hover:text-white hover:bg-gradient-to-r from-[#FF8A00] to-[#FF6B9D] px-4 py-3 rounded-lg transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#registro"
              onClick={handleNavClick}
              className="block mt-6 px-6 py-4 text-center font-black text-white rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, #FF8A00 0%, #FF6B9D 50%, #AB47BC 100%)',
              }}
            >
              Registrarse Ahora
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}