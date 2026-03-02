/**
 * ==========================================
 * COMPONENTE: FOOTER
 * ==========================================
 * 
 * Footer completo con:
 * - Links de navegación
 * - Información de contacto
 * - Redes sociales
 * - Copyright
 * 
 * 🔧 PERSONALIZAR:
 * - Cambia los links y textos
 * - Agrega más secciones si necesitas
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 lg:py-20">
        
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Columna 1: Logo y descripción */}
          <div className="text-center md:text-left lg:col-span-1">
            {/* Logo mejorado */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  className="text-2xl lg:text-3xl font-black text-gradient leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CROMÁTICA
                </h3>
                <span className="text-[10px] font-bold text-[#FF8A00] tracking-widest">
                  2.0 • 2026
                </span>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[var(--cromatica-text-secondary)] mb-4 leading-relaxed">
              Festival independiente de arte, cultura, música y emprendimiento.
            </p>
            
            <div className="inline-flex flex-col gap-2 px-5 py-4 bg-white rounded-xl shadow-lg border-2 border-[#FF8A00]/20">
              <div className="flex items-center gap-2 text-[#FF8A00]">
                <Calendar className="w-4 h-4" />
                <span className="font-bold text-sm">22 de Mayo, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--cromatica-text-secondary)]">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-medium">El Grullo, Jalisco</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-lg lg:text-xl font-black text-gradient mb-4 lg:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#FF8A00] to-[#FF6B9D] rounded-full"></span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
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
                    className="group inline-flex items-center gap-2 text-sm lg:text-base text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                  >
                    <span className="text-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-lg lg:text-xl font-black text-gradient mb-4 lg:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#FF6B9D] to-[#AB47BC] rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@cromaticafestival.mx"
                  className="group flex items-center justify-center md:justify-start gap-3 text-sm lg:text-base text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="break-all">expocromatica@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+525512345678"
                  className="group flex items-center justify-center md:justify-start gap-3 text-sm lg:text-base text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#AB47BC] to-[#42A5F5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>+52 56 6771 8342</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:patrocinios@cromaticafestival.mx"
                  className="group flex items-center justify-center md:justify-start gap-3 text-sm lg:text-base text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#26A69A] to-[#66BB6A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span>Patrocinios</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:prensa@cromaticafestival.mx"
                  className="group flex items-center justify-center md:justify-start gap-3 text-sm lg:text-base text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-all duration-300 font-medium"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#F48FB1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <span>Prensa</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales y newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-lg lg:text-xl font-black text-gradient mb-4 lg:mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#42A5F5] to-[#26A69A] rounded-full"></span>
              Síguenos
            </h4>
            
            {/* Botones de redes sociales mejorados */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="https://www.instagram.com/cromatica_expo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-pink-500"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
                <span className="text-xs font-bold text-[var(--cromatica-text-secondary)]">Instagram</span>
              </a>
              <a
                href="https://facebook.com/cromaticafestival"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-600"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-bold text-[var(--cromatica-text-secondary)]">Facebook</span>
              </a>
              <a
                href="https://twitter.com/cromaticafest"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-sky-500"
              >
                <Twitter className="w-6 h-6 text-sky-500" />
                <span className="text-xs font-bold text-[var(--cromatica-text-secondary)]">Twitter</span>
              </a>
              <a
                href="https://tiktok.com/@cromaticafestival"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-600"
              >
                <Mic className="w-6 h-6 text-purple-600" />
                <span className="text-xs font-bold text-[var(--cromatica-text-secondary)]">TikTok</span>
              </a>
            </div>

            {/* Newsletter mejorado */}
            <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-[#FF8A00]/20">
              <p className="text-xs lg:text-sm font-bold text-[var(--cromatica-text-secondary)] mb-3 flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-[#FF8A00]" />
                Newsletter
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias por suscribirte!');
              }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 text-sm bg-[#FFF8F0] border-2 border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-sm font-bold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FF8A00 0%, #FF6B9D 100%)',
                  }}
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="relative mb-8 lg:mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-transparent via-[var(--cromatica-primary)]/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 py-2 bg-white rounded-full shadow-md border-2 border-[#FF8A00]/20">
              <Sparkles className="w-5 h-5 text-[#FF8A00]" />
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright y links legales */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs lg:text-sm text-[var(--cromatica-text-muted)]">
            <p className="flex items-center gap-2">
              © 2026 CROMÁTICA Festival
            </p>
            <span className="hidden sm:inline text-[var(--cromatica-primary)]">•</span>
            <p className="flex items-center gap-1">
              Todos los derechos reservados
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm">
            <a 
              href="#" 
              className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors font-medium hover:underline"
            >
              Términos y Condiciones
            </a>
            <a 
              href="#" 
              className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors font-medium hover:underline"
            >
              Privacidad
            </a>
            <a 
              href="#" 
              className="text-[var(--cromatica-text-muted)] hover:text-[var(--cromatica-primary)] transition-colors font-medium hover:underline"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Créditos finales */}
        <div className="mt-8 pt-6 border-t border-[var(--cromatica-primary)]/10 text-center">
          <p className="text-xs lg:text-sm text-[var(--cromatica-text-muted)] flex items-center justify-center gap-2 flex-wrap">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-[#FF6B9D] fill-current animate-pulse" />
            <span>en El Grullo, Jalisco</span>
            <span className="hidden sm:inline text-[var(--cromatica-primary)]">•</span>
            <span className="hidden sm:inline">Diseño y Desarrollo por PepeBaskes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * ==========================================
 * GUÍA DE PERSONALIZACIÓN
 * ==========================================
 * 
 * 1. CAMBIAR LINKS:
 *    - Modifica los href en cada columna
 * 
 * 2. AGREGAR MÁS SECCIONES:
 *    - Copia una de las columnas (div)
 *    - Pégala y personaliza el contenido
 *    - Ajusta el grid-cols si es necesario
 * 
 * 3. CAMBIAR REDES SOCIALES:
 *    - Modifica los links en "Síguenos"
 *    - Puedes usar iconos de lucide-react en lugar de emojis
 * 
 * 4. NEWSLETTER:
 *    - Integra con Mailchimp, SendGrid, etc.
 *    - Modifica el onSubmit del formulario
 * 
 * 5. RESPONSIVE:
 *    - Grid de 4 columnas en desktop
 *    - 2 columnas en tablet
 *    - 1 columna en móvil
 */