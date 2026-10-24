/**
 * ==========================================
 * SECCIÓN: UBICACIÓN
 * ==========================================
 * 
 * Muestra la ubicación del festival con:
 * - Dirección en Casino El Relicario
 * - Mini mapa interactivo embebido de Google Maps
 * - Botón para abrir en Google Maps
 * - Indicaciones de movilidad y estacionamiento (a pie desde el centro)
 */

export function UbicacionSection() {
  // Configuración de la ubicación oficial
  const ubicacion = {
    nombre: "Casino El Relicario",
    recinto: "Plaza de Toros El Relicario",
    direccion: "Obregón #69",
    colonia: "Centro",
    ciudad: "El Grullo, Jalisco",
    codigoPostal: "48740",
    // URL directa para abrir en la app/web de Google Maps
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Casino+El+Relicario+Plaza+de+Toros+El+Grullo+Jalisco",
    // URL embebida para el mini mapa interactivo en vivo
    embedUrl: "https://maps.google.com/maps?q=Casino+El+Relicario,+El+Grullo,+Jalisco&t=&z=16&ie=UTF8&iwloc=&output=embed",
  };

  return (
    <section
      id="ubicacion"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--cromatica-blue)] rounded-full blur-[150px] opacity-10"></div>

      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            Ubicación
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ¿Dónde Nos Encontramos?
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            ¡Nos vemos en el <strong>Casino El Relicario</strong>! Ubicado en el corazón de El Grullo, Jalisco, en las instalaciones de la Plaza de Toros El Relicario, a solo unos pasos del centro.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Información de ubicación */}
            <div className="space-y-6">
              <div className="card-glow p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  📍 Dirección
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[var(--cromatica-text-muted)] mb-1">
                      Lugar
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {ubicacion.nombre}
                    </p>
                    <p className="text-sm text-[var(--cromatica-primary)] font-medium">
                      {ubicacion.recinto}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--cromatica-text-muted)] mb-1">
                      Dirección
                    </p>
                    <p className="text-lg text-white">
                      {ubicacion.direccion}, {ubicacion.colonia}
                    </p>
                    <p className="text-lg text-[var(--cromatica-text-secondary)]">
                      {ubicacion.ciudad}
                    </p>
                    {ubicacion.codigoPostal && (
                      <p className="text-sm text-[var(--cromatica-text-muted)]">
                        C.P. {ubicacion.codigoPostal}
                      </p>
                    )}
                  </div>

                  <a
                    href={ubicacion.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cromatica block text-center mt-6"
                  >
                    🗺️ Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Información de estacionamiento y movilidad */}
              <div className="card-glow p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  🚗 Acceso y Movilidad
                </h3>
                
                <div className="space-y-4 text-[var(--cromatica-text-secondary)]">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">⚠️</span>
                    <div>
                      <p className="font-semibold text-amber-400">Sin estacionamiento en el lugar</p>
                      <p className="text-sm">
                        El recinto <strong>no cuenta con estacionamiento</strong> propio. Te recomendamos anticipar tu llegada para estacionar en calles aledañas del centro o acudir en transporte local.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚶</span>
                    <div>
                      <p className="font-semibold text-white">A pie desde el centro</p>
                      <p className="text-sm">
                        Está a pie del centro: puedes llegar caminando cómodamente en pocos minutos desde la zona centro y el jardín principal de El Grullo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚴</span>
                    <div>
                      <p className="font-semibold text-white">Bicicleta y transporte local</p>
                      <p className="text-sm">
                        Excelente opción para desplazarte rápido y sin complicaciones por el centro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Mapa Interactivo */}
            <div className="card-glow h-full min-h-[420px] lg:min-h-[550px] overflow-hidden rounded-2xl flex flex-col p-3 md:p-4">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--cromatica-text-secondary)]">
                    Mini Mapa en Vivo
                  </span>
                </div>
                <a
                  href={ubicacion.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[var(--cromatica-primary)] hover:underline flex items-center gap-1"
                >
                  Ampliar mapa ↗
                </a>
              </div>
              <div className="relative w-full flex-1 min-h-[350px] lg:min-h-[480px] rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <iframe
                  title="Ubicación Casino El Relicario - El Grullo, Jalisco"
                  src={ubicacion.embedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
