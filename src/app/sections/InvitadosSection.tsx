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
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      nombre: "Dr. Arturo Mendoza",
      titulo: "Curador de Arte Contemporáneo",
      descripcion: "Reconocido curador internacional y director del Museo de Arte Moderno. Especialista en arte latinoamericano.",
      conferencia: "El Futuro del Arte Independiente",
      horario: "15:00 - 16:00",
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      nombre: "Mtra. Patricia Velasco",
      titulo: "Empresaria y Filántropa",
      descripcion: "Fundadora de Emprendedoras MX. Mentora de más de 500 negocios creativos en México.",
      conferencia: "Emprendimiento Creativo en México",
      horario: "16:30 - 17:30",
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
      nombre: "Mtro. Ricardo Flores",
      titulo: "Productor Musical",
      descripcion: "Productor nominado al Grammy Latino. Ha trabajado con artistas de todo el continente.",
      conferencia: "La Industria Musical Independiente",
      horario: "18:00 - 19:00",
    },
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
            Conferencias magistrales y talleres con expertos de la industria
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
                      Conferencia
                    </p>
                    <p className="text-lg font-bold mb-2">
                      📢 {invitado.conferencia}
                    </p>
                    <p className="text-sm text-[var(--cromatica-secondary)] font-semibold">
                      🕐 {invitado.horario}
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
              Las conferencias se realizarán en el Auditorio Principal.
              Entrada incluida con tu boleto al festival.
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
