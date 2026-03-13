/**
 * ==========================================
 * SECCIÓN: HERO (PORTADA PRINCIPAL)
 * ==========================================
 * 
 * Esta es la primera sección que ven los usuarios.
 * Incluye:
 * - Logo CROMÁTICA con diseño tropical
 * - Fecha del evento
 * - Frase impactante
 * - Botones de acción
 * - Fondo cálido con elementos tropicales
 * 
 * 🔧 CÓMO PERSONALIZAR:
 * 
 * 1. Cambiar la fecha:
 *    - Busca la variable 'fechaEvento'
 * 
 * 2. Cambiar la frase:
 *    - Busca la variable 'fraseImpactante'
 * 
 * 3. Cambiar los botones:
 *    - Modifica los <a> con clase btn-cromatica
 * 
 * 4. Cambiar el fondo:
 *    - Modifica los divs decorativos
 */

import { Sparkles, Calendar, Users, Music, Palette } from 'lucide-react';


export function HeroSection() {
  // 👉 PERSONALIZA ESTOS TEXTOS AQUÍ
  const fechaEvento = "23 de Mayo, 2026";
  const horaEvento = "11:00 AM - 1:00 AM";
  const fraseImpactante = "Arte, Cultura, Música y Emprendimiento al aire libre";
  const descripcionCorta = "Segunda edición del festival independiente más vibrante de la región";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ==========================================
          FONDO TROPICAL CON ELEMENTOS SUAVES
          ========================================== 
          
          Elementos decorativos que crean un ambiente tropical y diurno
      */}
      
      {/* Gradiente base cálido */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FFFFFF] to-[#F0F9FF]"></div>
      
      {/* Círculo decorativo 1 - Naranja */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-float"
        style={{ 
          background: 'radial-gradient(circle, #FF8A00 0%, transparent 70%)',
          animationDelay: '0s' 
        }}
      ></div>
      
      {/* Círculo decorativo 2 - Rosa */}
      <div
        className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-[100px] opacity-20 animate-float"
        style={{ 
          background: 'radial-gradient(circle, #FF6B9D 0%, transparent 70%)',
          animationDelay: '1s' 
        }}
      ></div>
      
      {/* Círculo decorativo 3 - Azul */}
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 animate-float"
        style={{ 
          background: 'radial-gradient(circle, #42A5F5 0%, transparent 70%)',
          animationDelay: '2s' 
        }}
      ></div>

      {/* Círculo decorativo 4 - Verde */}
      <div
        className="absolute bottom-1/3 left-1/4 w-[380px] h-[380px] rounded-full blur-[110px] opacity-15 animate-float"
        style={{ 
          background: 'radial-gradient(circle, #66BB6A 0%, transparent 70%)',
          animationDelay: '1.5s' 
        }}
      ></div>

      {/* ==========================================
          CONTENIDO PRINCIPAL
          ========================================== */}
      <div className="container-cromatica relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 px-4">
          
          {/* Badge "Segunda Edición" */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg border-2 border-[#FF8A00]/20">
              <Sparkles className="w-4 h-4 text-[#FF8A00]" />
              <span className="font-bold text-sm text-[#FF8A00] uppercase tracking-wide">
                Segunda Edición 2026
              </span>
            </span>
          </div>

        {/* Logo CROMÁTICA con texto */}
        <div className="animate-fade-in-up w-full overflow-hidden" style={{ animationDelay: '0.4s' }}>
  <h1
    className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black text-gradient text-center"
    style={{ 
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '-0.02em',
      lineHeight: '1.1'
    }}
  >
    CROMÁTICA
  </h1>
            </div>

          {/* Subtítulo "2.0" */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span
              className="text-6xl md:text-7xl font-black text-gradient"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              2.0
            </span>
          </div>

          {/* Fecha y hora del evento */}
          <div className="animate-fade-in-up space-y-2" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-[#FF8A00]" />
              <p className="text-2xl md:text-3xl font-bold text-[#FF8A00]">
                {fechaEvento}
              </p>
            </div>
            <p className="text-lg md:text-xl text-[var(--cromatica-text-secondary)]">
              {horaEvento}
            </p>
          </div>

          {/* Separador decorativo */}
          <div
            className="w-32 h-1.5 mx-auto rounded-full animate-fade-in-up"
            style={{
              background: 'var(--cromatica-gradient-1)',
              animationDelay: '0.7s',
            }}
          ></div>

          {/* Frase impactante */}
          <p
            className="text-xl md:text-2xl text-[var(--cromatica-text-primary)] font-medium max-w-2xl mx-auto animate-fade-in-up"
            style={{
              fontFamily: "'Poppins', sans-serif",
              animationDelay: '0.8s',
            }}
          >
            {fraseImpactante}
          </p>

          {/* Descripción corta */}
          <p
            className="text-base md:text-lg text-[var(--cromatica-text-secondary)] max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            {descripcionCorta}
          </p>

          {/* ==========================================
              BOTONES DE ACCIÓN
              ========================================== */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            {/* Botón principal: Registrarse */}
            <a
              href="#registro"
              className="btn-cromatica w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Registrarse Ahora
            </a>

            {/* Botón secundario: Ver convocatoria */}
            <a
              href="#convocatoria"
              className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Music className="w-5 h-5" />
              Ver Convocatoria
            </a>
          </div>

          {/* Información adicional con iconos */}
          <div
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            {/* Dato 1: Artistas */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-gradient">+</p>
              <p className="text-sm font-medium text-[var(--cromatica-text-secondary)]">
                Artistas Participantes
              </p>
            </div>

            {/* Dato 2: Escenarios */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#AB47BC] to-[#42A5F5] flex items-center justify-center shadow-lg">
                <Music className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-gradient">12h</p>
              <p className="text-sm font-medium text-[var(--cromatica-text-secondary)]">
                De Música
              </p>
            </div>

            {/* Dato 3: Horas de festival */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#26A69A] to-[#66BB6A] flex items-center justify-center shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-gradient">15h</p>
              <p className="text-sm font-medium text-[var(--cromatica-text-secondary)]">
                De Festival
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          INDICADOR DE SCROLL
          ========================================== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="block">
          <div className="w-8 h-12 rounded-full border-2 border-[#FF8A00] flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#FF8A00] rounded-full animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * GUÍA DE PERSONALIZACIÓN RÁPIDA
 * ==========================================
 * 
 * 1. CAMBIAR FECHA:
 *    const fechaEvento = "TU NUEVA FECHA";
 * 
 * 2. CAMBIAR FRASE:
 *    const fraseImpactante = "TU NUEVA FRASE";
 * 
 * 3. CAMBIAR ESTADÍSTICAS:
 *    Modifica los números en el grid de 3 columnas
 * 
 * 4. AGREGAR MÁS BOTONES:
 *    Copia un <a> existente y personalízalo
 * 
 * 5. CAMBIAR COLORES DEL FONDO:
 *    Modifica las variables CSS en los divs con blur
 * 
 * 6. QUITAR ANIMACIONES:
 *    Elimina las clases animate-* y animationDelay
 * 
 * 7. CAMBIAR FUENTE DEL LOGO:
 *    Modifica fontFamily: "'TU FUENTE', cursive"
 * 
 * ==========================================
 * RESPONSIVE BREAKPOINTS
 * ==========================================
 * 
 * - sm: 640px (móvil grande)
 * - md: 768px (tablet)
 * - lg: 1024px (laptop)
 * - xl: 1280px (desktop)
 * 
 * Las clases como 'text-6xl sm:text-7xl md:text-8xl'
 * significan:
 * - text-6xl: tamaño base (móvil)
 * - sm:text-7xl: tamaño en pantallas ≥640px
 * - md:text-8xl: tamaño en pantallas ≥768px
 */