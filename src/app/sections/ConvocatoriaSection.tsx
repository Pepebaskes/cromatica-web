/**
 * ==========================================
 * SECCIÓN: CONVOCATORIA / CRONOLOGÍA
 * ==========================================
 * * Timeline visual con todas las convocatorias:
 * - Artistas visuales
 * - Bandas/músicos
 * - Diseñadores de moda
 * - Empresarios/stands
 * - Show de autos clásicos
 * - Danza folclórica y contemporánea
 * * 🔧 CÓMO PERSONALIZAR:
 * - Edita el array 'convocatorias' para modificar items
 * - Agrega nuevos items al array
 * - Cambia fechas y descripciones
 */

// 👇 Se eliminaron las importaciones de iconos que ya no se usan, dejando solo las de la interfaz
import { Calendar, X, DollarSign, Info, Check } from 'lucide-react';

export function ConvocatoriaSection() {
  // 👉 EDITA ESTE ARRAY PARA MODIFICAR LAS CONVOCATORIAS
  const convocatorias = [
    {
      id: 1,
      categoria: "Artistas Visuales",
      fechaApertura: "12 de Marzo",
      fechaCierre: "15 de Mayo",
      descripcion: "Pintores, ilustradores, escultores, fotógrafos y más. Exhibe tu obra en nuestro espacio especifico para artistas, en tu stand serás libre de exponerte como quieras.",
      costo: "$50 MXN",
      icono: "🎨",
      color: "var(--cromatica-primary)",
    },
    {
      id: 2,
      categoria: "Bandas y Músicos",
      fechaApertura: "12 de marzo",
      fechaCierre: "15 de mayo",
      descripcion: "Bandas emergentes y artistas independientes de todos los géneros. Presenta tu música en nuestro escenario principal, lleva a tu público. ",
      costo: "$50 MXN",
      icono: "🎸",
      color: "var(--cromatica-secondary)",
    },
    {
      id: 3,
      categoria: "Diseñadores de Moda",
      fechaApertura: "12 de marzo",
      fechaCierre: "15 de mayo",
      descripcion: "Diseñadores independientes, marcas de ropa, accesorios y moda sustentable. Tendrán un espacio para poder participar en la pasarela de moda.",
      costo: "$50 MXN",
      icono: "✨",
      color: "var(--cromatica-tertiary)",
    },
    {
      id: 4,
      categoria: "Empresarios y Stands",
      fechaApertura: "12 de marzo",
      fechaCierre: "15 de mayo",
      descripcion: "Emprendedores, negocios locales, food trucks, artesanías y productos creativos. Ve y vende, dale reconocimiento a tu marca.",
      costo: "$100 MXN",
      icono: "🎪",
      color: "var(--cromatica-accent)",
    },
    {
      id: 5,
      categoria: "Show de Autos Clásicos",
      fechaApertura: "12 de marzo",
      fechaCierre: "15 de Mayo",
      descripcion: "Exhibición de autos clásicos, modificados y vintage. Muestra tu pasión automotriz. El tuning también es cultura",
      costo: "$50 MXN",
      icono: "🚗",
      color: "var(--cromatica-purple)",
    },
    {
      id: 6,
      categoria: "Danza",
      fechaApertura: "12 de marzo",
      fechaCierre: "15 de Mayo",
      descripcion: "Grupos de danza tradicional mexicana, urbana, contemporanea. Ven y expresáte con el cuerpo. ",
      costo: "$50 MXN",
      icono: "💃",
      color: "var(--cromatica-green)",
    },
  ];

  return (
    <section
      id="convocatoria"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] to-[#F8F9FA]"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[150px] opacity-10"
        style={{ background: 'radial-gradient(circle, #FF6B9D 0%, transparent 70%)' }}
      ></div>

      <div className="container-cromatica relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg border-2 border-[#FF8A00]/20 mb-4">
            <Info className="w-4 h-4 text-[#FF8A00]" />
            <span className="font-bold text-sm text-[#FF8A00] uppercase tracking-wide">
              ¡Participa!
            </span>
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Convocatorias Abiertas
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Al participar, recibirás un stand individual dentro de la expo, donde podrás exponer tu trabajo, 
            vender tu arte, promocionar tu marca y conectar con otros artistas y asistentes. Este espacio está 
            pensado para que cada creador tenga un lugar digno donde mostrar su propuesta artística y crecer dentro
            de la comunidad creativa.
          </p>
        </div>

        {/* Timeline de convocatorias */}
        <div className="max-w-5xl mx-auto space-y-6">
          {convocatorias.map((conv, index) => {
            return (
              <div
                key={conv.id}
                className="card-glow p-6 md:p-8 animate-fade-in-up animate-float"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '4s'
                }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Icono con fondo de color */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${conv.color} 0%, ${conv.color}CC 100%)`,
                      }}
                    >
                      <span className="text-3xl">{conv.icono}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-grow">
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ color: conv.color }}
                    >
                      {conv.categoria}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-[var(--cromatica-text-secondary)]">
                        <Calendar className="w-3.5 h-3.5" />
                        Apertura: {conv.fechaApertura}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-[var(--cromatica-text-secondary)]">
                        <X className="w-3.5 h-3.5" />
                        Cierre: {conv.fechaCierre}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-sm text-white"
                        style={{
                          background: conv.color,
                        }}
                      >
                        <DollarSign className="w-3.5 h-3.5" />
                        {conv.costo}
                      </span>
                    </div>

                    <p className="text-[var(--cromatica-text-secondary)] leading-relaxed">
                      {conv.descripcion}
                    </p>
                  </div>

                  {/* Botón de registro */}
                  <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                    <a
                      href="#registro"
                      className="btn-cromatica block text-center md:inline-block whitespace-nowrap"
                    >
                      Registrarse
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Información adicional */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-glow p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] flex items-center justify-center flex-shrink-0 shadow-lg">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--cromatica-primary)] pt-2">
                Información Importante
              </h3>
            </div>
            <ul className="text-[var(--cromatica-text-secondary)] space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--cromatica-primary)] flex-shrink-0 mt-0.5" />
                <span>Todas las convocatorias incluyen espacio de exhibición o presentación</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--cromatica-primary)] flex-shrink-0 mt-0.5" />
                <span>El pago se realiza una vez confirmada tu participación</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--cromatica-primary)] flex-shrink-0 mt-0.5" />
                <span>Recibirás un correo de confirmación con todos los detalles</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--cromatica-primary)] flex-shrink-0 mt-0.5" />
                <span>Las plazas son limitadas, regístrate lo antes posible</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--cromatica-primary)] flex-shrink-0 mt-0.5" />
                <span>Para dudas, contacta a: expocromatica@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * GUÍA DE PERSONALIZACIÓN
 * ==========================================
 * * 1. MODIFICAR UNA CONVOCATORIA EXISTENTE:
 * - Busca el objeto en el array 'convocatorias'
 * - Cambia las propiedades que necesites
 * * 2. AGREGAR UNA NUEVA CONVOCATORIA:
 * - Copia un objeto existente del array
 * - Pégalo al final del array (antes del ]
 * - Modifica todos los valores
 * - Incrementa el id
 * * 3. ELIMINAR UNA CONVOCATORIA:
 * - Borra el objeto completo del array
 * * 4. CAMBIAR EL ORDEN:
 * - Reorganiza los objetos en el array
 * * 5. CAMBIAR COLORES:
 * - Modifica la propiedad 'color' de cada objeto
 * - Usa las variables de cromatica.css
 * * 6. CAMBIAR ICONOS:
 * - Modifica la propiedad 'icono'
 * - Solo usa Emojis entre comillas ("🍕")
 */