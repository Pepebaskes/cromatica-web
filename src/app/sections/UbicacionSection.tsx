/**
 * ==========================================
 * SECCIÓN: UBICACIÓN
 * ==========================================
 * 
 * Muestra la ubicación del festival con:
 * - Dirección
 * - Mapa (placeholder para Google Maps o similar)
 * - Botón para abrir en Google Maps
 * - Información de transporte
 * 
 * 🔧 PERSONALIZAR:
 * - Cambia las variables de dirección
 * - Integra Google Maps API si necesitas
 */

export function UbicacionSection() {
  // 👉 PERSONALIZA LA UBICACIÓN AQUÍ
  const ubicacion = {
    nombre: "Casino El Relicario (sede tentativa)",
    direccion: "Sede por confirmar",
    ciudad: "El Grullo, Jalisco",
    codigoPostal: "",
    // Coordenadas pendientes de confirmación
    latitud: 0,
    longitud: 0,
    // URL de Google Maps
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Casino+El+Relicario+El+Grullo+Jalisco",
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
            La sede está por confirmarse. La ubicación tentativa para CROMÁTICA 3.0 es el Casino El Relicario, en El Grullo, Jalisco. Actualizaremos este espacio en cuanto quede confirmada.
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
                    <p className="text-lg font-semibold">
                      {ubicacion.nombre}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--cromatica-text-muted)] mb-1">
                      Dirección
                    </p>
                    <p className="text-lg">
                      {ubicacion.direccion}
                    </p>
                    <p className="text-lg">
                      {ubicacion.ciudad}
                    </p>
                    {ubicacion.codigoPostal && (
                      <p className="text-lg">
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

              {/* Información de transporte */}
              <div className="card-glow p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  🚇 Estacionamiento
                </h3>
                
                <div className="space-y-4 text-[var(--cromatica-text-secondary)]">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚗</span>
                    <div>
                      <p className="font-semibold text-white">Auto</p>
                      <p className="text-sm">Estacionamiento disponible</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚴</span>
                    <div>
                      <p className="font-semibold text-white">Bicicleta</p>
                      <p className="text-sm">Espacio disponible para bicicletas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="card-glow h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8 text-center">
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--cromatica-primary)] mb-3">Mapa pendiente</p>
                <p className="text-2xl font-bold mb-3">La ubicación definitiva se anunciará pronto.</p>
                <p className="text-[var(--cromatica-text-secondary)]">Consulta la referencia tentativa en Google Maps mientras confirmamos la sede.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
