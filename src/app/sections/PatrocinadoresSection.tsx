/**
 * ==========================================
 * SECCIÓN: PATROCINADORES
 * ==========================================
 * * Muestra logos de patrocinadores con descripción detallada.
 * Efecto: Tarjetas con hover dinámico y logos que se colorean.
 */

export function PatrocinadoresSection() {
  // 👉 CONFIGURA TUS PATROCINADORES AQUÍ
  // Asegúrate de que las imágenes estén en public/images/
  const patrocinadores = [
    {
      id: 1,
      nombre: "Comité Estudiantil TSJ",
      logo: "/images/comite.png", 
      descripcion: "Impulsando el desarrollo académico y cultural de los jóvenes en la región de El Grullo.",
      url: "https://www.instagram.com/cre_itjmm/",
    },
    {
      id: 2,
      nombre: "Boreal Eventos",
      logo: "/images/BorealEventos.jpg",
      descripcion: "Expertos en decoración, organización y logística para tus eventos privados",
      url: "https://www.instagram.com/eventosboreal/",
    },
    
    {
      id: 3,
      nombre: "Foro 9",
      logo: "/images/Foro9.png",
      descripcion: "Foro 9, es un espacio cultural en El Grullo con más de 10 años de trayectoria. Destaca por su cerveza artesanal, música en vivo de rock clásico y su apoyo a artistas emergentes.",
      url: "https://www.instagram.com/foro_cheve9/",
    },
    
    {
      id: 4,
      nombre: "HIjos de María Morales",
      logo: "/images/hijosDeMariaMorales.jpeg",
      descripcion: "Hijos de María Morales Shot es una marca mexicana de licor de agave saborizado, presentado en sabores como fresa, maracuyá, melón, jamaica, horchata y coco. Se comercializa como un shot de México, ideal para consumirse frío o en coctelería, destacando por sabores auténticos y tradicionales en cada trago.",
      url: "https://www.hijosdemariamorales.com.mx/index.php/inicio",
    },
     {
      id: 5, // Corregido ID duplicado
      nombre: "Ham Urbans",
      logo: "/images/hadUrbans.png",
      descripcion: "HAM URBANS es más que ropa, es una forma de expresión. Nos dedicamos a crear prendas únicas que combinan estilo, calidad y personalidad, pensadas para quienes quieren destacar y sentirse auténticos en cada momento , negocio o evento . Cada diseño refleja creatividad, detalle y pasión por lo que hacemos, cuidando tanto la estética como la comodidad. Nuestro objetivo es que cada persona que use nuestras prendas se sienta segura, diferente y conectada con su propio estilo.",
      url: "https://www.instagram.com/accounts/login/?next=%2Fham_urbans_&source=omni_redirect",
      
    },

    /** */
  ];

  return (
    <section
      id="patrocinadores"
      className="py-20 md:py-32 relative overflow-hidden bg-[var(--cromatica-bg-darker)]"
    >
      <div className="container-cromatica relative z-10">
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Nuestros Patrocinadores
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            El corazón de CROMÁTICA 2.0 late gracias al apoyo de estas increíbles empresas y organizaciones.
          </p>
        </div>

        {/* Grid de Tarjetas de Patrocinadores */}
        <div className="max-w-7xl mx-auto">
          {/* Mantenemos grid de 4 para logos de patrocinadores, pero con comportamiento responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {patrocinadores.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[var(--cromatica-bg-card)] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[var(--cromatica-primary)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2"
              >
                {/* Contenedor de la Imagen (Adaptable y Cuadrado) */}
                {/* CAMBIO CLAVE: Usamos aspect-square para que sea relativo y no recorte */}
                <div className="relative w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
                  
                  {/* Overlay sutil de brillo al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--cromatica-primary)]/20 via-[var(--cromatica-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img
                    src={sponsor.logo}
                    alt={sponsor.nombre}
                    /* CAMBIO CLAVE: object-cover para llenar el espacio relativo */
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Contenido de Texto */}
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-[var(--cromatica-bg-darker)]/30">
                  <h4 className="text-xl font-bold text-[var(--cromatica-text-primary)] mb-3 group-hover:text-[var(--cromatica-primary)] transition-colors duration-300">
                    {sponsor.nombre}
                  </h4>
                  {/* Descripción completa sin restricciones de altura */}
                  <p className="text-sm text-[var(--cromatica-text-muted)] leading-relaxed mb-4">
                    {sponsor.descripcion}
                  </p>
                  
                  {/* Indicador visual de "Ver más" */}
                  <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-[var(--cromatica-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Visitar sitio 
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bloque de Convocatoria */}
        <div className="mt-24 text-center">
          <div className="inline-block relative p-[1px] rounded-2xl bg-gradient-to-r from-[var(--cromatica-primary)] via-[var(--cromatica-secondary)] to-[var(--cromatica-tertiary)] overflow-hidden">
            <div className="bg-[var(--cromatica-bg-darker)] rounded-2xl p-8 md:p-12 max-w-3xl">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                ¿Tu empresa apoya el arte?
              </h3>
              <p className="text-[var(--cromatica-text-secondary)] text-lg mb-8">
                Forma parte de la red cultural más importante de la región. 
                Tenemos diferentes niveles de patrocinio adaptados a tu marca.
              </p>
              <a
                href="mailto:tesoreria@expocromatica.com"
                className="btn-cromatica inline-flex items-center gap-2"
              >
                📧 Solicitar Información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}