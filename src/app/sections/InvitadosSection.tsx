/**
 * ==========================================
 * SECCIÓN: INVITADOS ESPECIALES
 * ==========================================
 * 
 * Sección destacada con diseño más elegante para invitados VIP.
 * 
 * 🔧 AGREGAR MÁS INVITADOS:
 * Agrega objetos al array 'invitados'
 */

export function InvitadosSection() {
  // 👉 AGREGA O MODIFICA INVITADOS AQUÍ
  const invitados = [
    {
      id: 1,
      imagen: "/images/ferchoLogo.jpeg",
      nombre: "Felipe López Martinez",
      titulo: "Diseñador de moda",
      descripcion: "Reconociendo su trayectoria dentro de la comunidad de El Grullo Jalisco, su apoyo y su gran talento como artista",
      conferencia: "",
      horario: "",
    },
    /** 
    {
      id: 2,
      imagen: "",
      nombre: "Pendiente",
      titulo: "",
      descripcion: "",
      conferencia: "",
      horario: "",
    },
    {
      id: 3,
      imagen: "",
      nombre: "PENDIENTE",
      titulo: "",
      descripcion: "",
      conferencia: "",
      horario: "",
    },
    */
  ];

  /* 
  👉 PARA AGREGAR UN NUEVO INVITADO:
  
  {
    id: 4,
    imagen: "URL_IMAGEN",
    nombre: "Nombre Completo",
    titulo: "Título profesional",
    descripcion: "Bio del invitado...",
    conferencia: "Tema de la conferencia",
    horario: "HH:MM - HH:MM",
  },
  */

  return (
    <section
      id="invitados"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Fondo decorativo con dorado/elegante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cromatica-tertiary)] rounded-full blur-[180px] opacity-10"></div>

      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            VIP
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Invitados Especiales
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Personas que apoyan y mueven tanto a la organización de CROMÁTICA como a la 
            comunidad artística en general, homenajeamos su trayectoria.
          </p>
        </div>

        {/* Grid de invitados */}
        <div className="max-w-6xl mx-auto space-y-8">
          {invitados.map((invitado, index) => (
            <div
              key={invitado.id}
              className="card-glow p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                
                {/* Foto del invitado */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--cromatica-primary)]">
                    <img
                      src={invitado.imagen}
                      alt={invitado.nombre}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Información */}
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                    {invitado.nombre}
                  </h3>
                  <p className="text-[var(--cromatica-primary)] font-semibold mb-3">
                    {invitado.titulo}
                  </p>
                  <p className="text-[var(--cromatica-text-secondary)] mb-4 leading-relaxed">
                    {invitado.descripcion}
                  </p>

                  {/* Conferencia */}
                  <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                    <p className="text-sm text-[var(--cromatica-text-muted)] mb-1">
                      
                    </p>
                    <p className="text-lg font-bold mb-2">
                       {invitado.conferencia}
                    </p>
                    <p className="text-sm text-[var(--cromatica-secondary)] font-semibold">
                       {invitado.horario}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <p className="text-[var(--cromatica-text-secondary)]">
              Nuestros invitados especiales son parte fundamental de nuestro evento, dudas y sugerencias al correo de CROMÁTICA
            </p>
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
 * - Diseño horizontal con foto circular
 * - Estilo más elegante y espacioso
 * - Perfecto para destacar speakers importantes
 * - Las fotos usan border circular con color del festival
 */
