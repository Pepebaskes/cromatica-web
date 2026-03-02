/**
 * ==========================================
 * SECCIÓN: PATROCINADORES
 * ==========================================
 * 
 * Muestra logos de patrocinadores.
 * Efecto: escala de grises que se colorea al hacer hover.
 * 
 * 🔧 AGREGAR MÁS PATROCINADORES:
 * Agrega objetos al array 'patrocinadores'
 */

export function PatrocinadoresSection() {
  // 👉 AGREGA O MODIFICA PATROCINADORES AQUÍ
  const patrocinadores = [
    {
      id: 1,
      nombre: "Empresa 1",
      logo: "https://via.placeholder.com/200x80/FF00FF/FFFFFF?text=SPONSOR+1",
      url: "https://ejemplo.com",
    },
    {
      id: 2,
      nombre: "Empresa 2",
      logo: "https://via.placeholder.com/200x80/00FFFF/000000?text=SPONSOR+2",
      url: "https://ejemplo.com",
    },
    {
      id: 3,
      nombre: "Empresa 3",
      logo: "https://via.placeholder.com/200x80/FFFF00/000000?text=SPONSOR+3",
      url: "https://ejemplo.com",
    },
    {
      id: 4,
      nombre: "Empresa 4",
      logo: "https://via.placeholder.com/200x80/FF6B00/FFFFFF?text=SPONSOR+4",
      url: "https://ejemplo.com",
    },
    {
      id: 5,
      nombre: "Empresa 5",
      logo: "https://via.placeholder.com/200x80/9D00FF/FFFFFF?text=SPONSOR+5",
      url: "https://ejemplo.com",
    },
    {
      id: 6,
      nombre: "Empresa 6",
      logo: "https://via.placeholder.com/200x80/00FF88/000000?text=SPONSOR+6",
      url: "https://ejemplo.com",
    },
  ];

  /* 
  👉 PARA AGREGAR UN NUEVO PATROCINADOR:
  
  {
    id: 7,
    nombre: "Nombre de la empresa",
    logo: "URL_DEL_LOGO", // Idealmente PNG transparente
    url: "https://sitio-web.com",
  },
  */

  return (
    <section
      id="patrocinadores"
      className="py-20 md:py-32 relative overflow-hidden bg-[var(--cromatica-bg-darker)]"
    >
      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nuestros Patrocinadores
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Gracias a quienes hacen posible CROMÁTICA 2.0
          </p>
        </div>

        {/* Grid de logos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {patrocinadores.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 bg-[var(--cromatica-bg-card)] rounded-lg transition-all duration-300 hover:scale-110 hover:bg-[var(--cromatica-bg-light)]"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.nombre}
                  className="w-full h-auto max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Llamado a patrocinadores */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              ¿Quieres ser patrocinador?
            </h3>
            <p className="text-[var(--cromatica-text-secondary)] mb-6">
              Apoya el arte y la cultura independiente mexicana.
              Contacta con nosotros para conocer nuestros paquetes de patrocinio.
            </p>
            <a
              href="mailto:patrocinios@cromaticafestival.mx"
              className="btn-cromatica"
            >
              📧 Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * NOTAS
 * ==========================================
 * 
 * - Los logos aparecen en escala de grises
 * - Al hacer hover se colorean y escalan
 * - Grid responsive: 2 cols móvil, 3 tablet, 6 desktop
 * - Usa logos PNG con fondo transparente para mejor resultado
 * 
 * CÓMO USAR LOGOS REALES:
 * 1. Sube tus logos a un hosting de imágenes
 * 2. Obtén las URLs
 * 3. Reemplaza las URLs en el array 'patrocinadores'
 * 4. Asegúrate que sean PNG con fondo transparente
 */
