/**
 * ==========================================
 * COMPONENTE: FOOTER (Optimizado para Móvil)
 * ==========================================
 */

import { Mail, Phone, Instagram, Facebook, Twitter, Youtube, Mic, MapPin, Sparkles, Calendar, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-[#FFF8F0] to-[#FFEEDD] border-t-2 border-[var(--cromatica-primary)]/20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-[100px] opacity-10 bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[120px] opacity-10 bg-gradient-to-br from-[#AB47BC] to-[#42A5F5]"></div>
      </div>

      {/* Paddings reducidos en móvil: py-8 en lugar de py-12 */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-16 lg:py-20">
        
        {/* Gaps reducidos en móvil: gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-16">
          
          {/* Columna 1: Logo y descripción */}
          <div className="text-center md:text-left lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center shadow-lg">
                <img 
                  src="/images/favicon.png" 
                  alt="Logo Cromática" 
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-black text-gradient leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CROMÁTICA
                </h3>
                <span className="text-[9px] md:text-[10px] font-bold text-[#FF8A00] tracking-widest">
                  2.0 • 2026
                </span>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-[var(--cromatica-text-secondary)] mb-4 leading-relaxed px-4 md:px-0">
              Festival independiente de arte, cultura, música y emprendimiento.
            </p>
            
            <div className="inline-flex flex-col gap-1 md:gap-2 px-4 py-3 bg-white rounded-xl shadow-sm border border-[#FF8A00]/20 mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#FF8A00]">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-bold text-xs md:text-sm">23 de Mayo, 2026</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--cromatica-text-secondary)]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] md:text-xs font-medium">El Grullo, Jalisco</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-black text-gradient mb-3 md:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-4 md:h-5 bg-gradient-to-b from-[#FF8A00] to-[#FF6B9D] rounded-full"></span>
              Enlaces Rápidos
            </h4>
            {/* Espaciado más apretado en móvil (space-y-1.5) */}
            <ul className="space-y-1.5 md:space-y-3">
              {[
                { label: 'Sobre el Evento', href: '#sobre' },
                { label: 'Convocatorias', href: '#convocatoria' },
                { label: 'Conciertos', href: '#conciertos' },
                { label: 'Artistas', href: '#artistas' },
                { label: 'Emprendedores', href: '#emprendedores' },
                { label: 'Registrarse', href: '#registro' },
                { label: 'Ubicación', href: '#ubicacion' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center gap-2 text-xs md:text-sm text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                  >
                    <span className="text-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-black text-gradient mb-3 md:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-4 md:h-5 bg-gradient-to-b from-[#FF6B9D] to-[#AB47BC] rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-2 md:space-y-3 inline-block text-left">
              <li>
                <a href="mailto:expocromatica@outlook.com" className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="truncate">expocromatica@outlook.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+525667718342" className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br from-[#AB47BC] to-[#42A5F5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span>+52 56 6771 8342</span>
                </a>
              </li>
              <li>
                <a href="mailto:patrocinios@cromaticafestival.mx" className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br from-[#26A69A] to-[#66BB6A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span>Patrocinios</span>
                </a>
              </li>
              <li>
                <a href="mailto:prensa@cromaticafestival.mx" className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#F48FB1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Mic className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span>Prensa</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales y newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-black text-gradient mb-3 md:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-4 md:h-5 bg-gradient-to-b from-[#42A5F5] to-[#26A69A] rounded-full"></span>
              Síguenos
            </h4>
            
            {/* Redes: 4 en línea en móvil (grid-cols-4), 2 en escritorio (md:grid-cols-2) */}
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 mb-6 max-w-[240px] mx-auto md:max-w-none md:mx-0">
              <a href="https://www.instagram.com/cromatica_expo/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-1 p-2 md:p-3 bg-white rounded-xl shadow-sm md:shadow-md hover:scale-105 transition-all border border-transparent hover:border-pink-500">
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
                <span className="hidden md:block text-[10px] font-bold text-[var(--cromatica-text-secondary)]">Instagram</span>
              </a>
              <a href="https://facebook.com/cromaticafestival" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-1 p-2 md:p-3 bg-white rounded-xl shadow-sm md:shadow-md hover:scale-105 transition-all border border-transparent hover:border-blue-600">
                <Facebook className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <span className="hidden md:block text-[10px] font-bold text-[var(--cromatica-text-secondary)]">Facebook</span>
              </a>
              <a href="https://twitter.com/cromaticafest" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-1 p-2 md:p-3 bg-white rounded-xl shadow-sm md:shadow-md hover:scale-105 transition-all border border-transparent hover:border-sky-500">
                <Twitter className="w-5 h-5 md:w-6 md:h-6 text-sky-500" />
                <span className="hidden md:block text-[10px] font-bold text-[var(--cromatica-text-secondary)]">Twitter</span>
              </a>
              <a href="https://tiktok.com/@cromaticafestival" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-1 p-2 md:p-3 bg-white rounded-xl shadow-sm md:shadow-md hover:scale-105 transition-all border border-transparent hover:border-purple-600">
                <Mic className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                <span className="hidden md:block text-[10px] font-bold text-[var(--cromatica-text-secondary)]">TikTok</span>
              </a>
            </div>

            {/* Newsletter más compacto en móvil */}
            <div className="bg-white p-3 md:p-5 rounded-xl shadow-sm md:shadow-lg border border-[#FF8A00]/20">
              <p className="text-[11px] md:text-sm font-bold text-[var(--cromatica-text-secondary)] mb-2 flex items-center justify-center md:justify-start gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                Newsletter
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 text-xs md:text-sm bg-[#FFF8F0] border border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-xs md:text-sm font-bold text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #FF8A00 0%, #FF6B9D 100%)' }}
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="relative mb-6 md:mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-[var(--cromatica-primary)]/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 py-1.5 bg-white rounded-full shadow-sm border border-[#FF8A00]/20">
              <Sparkles className="w-4 h-4 text-[#FF8A00]" />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[10px] md:text-xs text-[var(--cromatica-text-muted)]">
            <p>© 2026 CROMÁTICA Festival</p>
            <span className="hidden sm:inline text-[var(--cromatica-primary)]">•</span>
            <p>Todos los derechos reservados</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 text-[10px] md:text-xs">
            <a href="#" className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors">Privacidad</a>
            <a href="#" className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors">Cookies</a>
          </div>
        </div>

        {/* Créditos finales */}
        <div className="mt-4 pt-4 border-t border-[var(--cromatica-primary)]/10 text-center">
          <p className="text-[10px] md:text-xs text-[var(--cromatica-text-muted)] flex items-center justify-center gap-1 flex-wrap">
            <span>Hecho con</span>
            <Heart className="w-3 h-3 text-[#FF6B9D] fill-current animate-pulse" />
            <span>en El Grullo, Jalisco</span>
            <span className="hidden sm:inline text-[var(--cromatica-primary)] mx-1">•</span>
            <span className="w-full sm:w-auto mt-1 sm:mt-0">Diseño y Desarrollo por PepeBaskes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}