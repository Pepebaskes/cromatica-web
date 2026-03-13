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
    nombre: "Hacienda Don Quijote",
    direccion: "Colonia Las Flores",
    ciudad: "El Grullo, Jalisco",
    codigoPostal: "48740",
    // Coordenadas reales
    latitud: 19.797036,
    longitud: -104.223322,
    // URL de Google Maps
    googleMapsUrl: "https://maps.app.goo.gl/ADQq1CjT9UgZXbTEA",
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
            El festival se realizará a las afueras de El Grullo, Jalisco, en un hermoso espacio al aire libre que celebra la naturaleza y la cultura local. Hacienda Don Quijote, la prinicpal obra de arte es ese salón, gracias al señor Alfredo Pimienta por el espacio. .
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
                    <p className="text-lg">
                      C.P. {ubicacion.codigoPostal}
                    </p>
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
            <div className="card-glow overflow-hidden h-full min-h-[400px] lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.2677730423716!2d-104.22332222500329!3d19.79703688156176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425ab38b995fd09%3A0x2da11e7d24461777!2sHacienda%20Don%20Quijote!5e1!3m2!1ses!2smx!4v1772312862455!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}