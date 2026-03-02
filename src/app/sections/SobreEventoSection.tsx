/**
 * ==========================================
 * SECCIÓN: SOBRE EL EVENTO
 * ==========================================
 * 
 * Descripción del festival CROMÁTICA 2.0:
 * - Historia
 * - Misión
 * - Valores
 * - Primera edición (2023)
 * 
 * 🔧 CÓMO PERSONALIZAR:
 * - Edita las variables de texto al inicio
 * - Modifica los párrafos según tu contenido
 * - Agrega más secciones copiando los bloques
 */

import { Palette, Rocket, Calendar, Users, Handshake, Lightbulb, Star, Sparkles } from 'lucide-react';

export function SobreEventoSection() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FFF8F0]"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-10"
        style={{ background: 'radial-gradient(circle, #AB47BC 0%, transparent 70%)' }}
      ></div>

      <div className="container-cromatica relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sobre CROMÁTICA 2.0
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Un festival que celebra la diversidad artística y cultural de México
          </p>
        </div>

        {/* Grid con información */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Columna izquierda: Texto descriptivo */}
          <div className="space-y-6">
            <div className="card-glow p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--cromatica-primary)] mb-3">
                    ¿Qué es CROMÁTICA?
                  </h3>
                  <p className="text-[var(--cromatica-text-secondary)] leading-relaxed">
                    CROMÁTICA es un festival independiente que reúne lo mejor del arte, 
                    la cultura, la música y el emprendimiento mexicano en un solo espacio. 
                    Es una celebración de la creatividad, la diversidad y el talento local 
                    que busca conectar a artistas, empresarios y público en general.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#AB47BC] to-[#42A5F5] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--cromatica-secondary)] mb-3">
                    Nuestra Misión
                  </h3>
                  <p className="text-[var(--cromatica-text-secondary)] leading-relaxed">
                    Crear un espacio inclusivo donde artistas emergentes y establecidos 
                    puedan mostrar su trabajo, conectar con su audiencia y generar 
                    oportunidades de colaboración. Queremos impulsar la escena cultural 
                    independiente y fomentar el emprendimiento creativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#26A69A] to-[#66BB6A] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--cromatica-tertiary)] mb-3">
                    Primera Edición (2023)
                  </h3>
                  <p className="text-[var(--cromatica-text-secondary)] leading-relaxed">
                    En nuestra primera edición en 2023 enfrentamos algunos retos
                     en la coordinación musical, experiencia que nos permitió aprender 
                     y fortalecer cada área del evento.
                     Hoy regresamos con una segunda edición mucho más profesional, 
                     con mejor organización, mayor compromiso y un equipo de sonido renovado, 
                     garantizando la calidad y experiencia que ustedes merecen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Valores y datos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Espacio para Todos</h4>
              <p className="text-sm text-[var(--cromatica-text-secondary)]">
                Un festival inclusivo y accesible que celebra la diversidad
              </p>
            </div>

            <div className="card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#AB47BC] to-[#42A5F5] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Networking</h4>
              <p className="text-sm text-[var(--cromatica-text-secondary)]">
                Conecta con artistas, empresarios y creativos de toda la región
              </p>
            </div>

            <div className="card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#26A69A] to-[#66BB6A] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Innovación</h4>
              <p className="text-sm text-[var(--cromatica-text-secondary)]">
                Experimenta nuevas formas de arte y expresión cultural
              </p>
            </div>

            <div className="card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FDD835] to-[#FF8A00] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Talento Local</h4>
              <p className="text-sm text-[var(--cromatica-text-secondary)]">
                Impulsamos a artistas y emprendedores mexicanos
              </p>
            </div>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-16">
          <a
            href="#registro"
            className="btn-cromatica inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Únete a CROMÁTICA 2.0
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * GUÍA DE PERSONALIZACIÓN
 * ==========================================
 * 
 * 1. CAMBIAR TEXTOS:
 *    - Edita directamente los párrafos <p>
 *    - Modifica los títulos <h3> y <h4>
 * 
 * 2. AGREGAR MÁS TARJETAS:
 *    - Copia un bloque <div className="card-glow">
 *    - Pégalo donde quieras
 *    - Personaliza el contenido
 * 
 * 3. CAMBIAR ICONOS:
 *    - Los emojis están en <div className="text-5xl">
 *    - Cámbialos por otros emojis o usa lucide-react
 * 
 * 4. REORGANIZAR EL LAYOUT:
 *    - El grid usa lg:grid-cols-2 (2 columnas en desktop)
 *    - Cambia a lg:grid-cols-1 para una columna
 *    - Cambia a lg:grid-cols-3 para tres columnas
 * 
 * 5. AGREGAR IMÁGENES:
 *    - Importa ImageWithFallback
 *    - Úsalo así: <ImageWithFallback src="url" alt="descripción" />
 */