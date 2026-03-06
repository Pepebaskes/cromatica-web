/**
 * ==========================================
 * SECCIÓN: DISEÑADORES DE MODA
 * ==========================================
 * 
 * Muestra diseñadores de moda y marcas independientes.
 * 
 * 🔧 AGREGAR MÁS DISEÑADORES:
 * Agrega objetos al array 'disenadores'
 */

import { DisenadorCard } from '../components/DisenadorCard';

export function DisenadoresSection() {
  // 👉 AGREGA O MODIFICA DISEÑADORES AQUÍ
  const disenadores = [
    {
      id: 1,
      imagen: "",
      marca: "PENDIENTE",
      disenador: "",
      estilo: "|",
      descripcion: "",
      instagram: "",
    },
    {
      id: 2,
      imagen: "",
      marca: "PENDIENTE ",
      disenador: "",
      estilo: "",
      descripcion: "",
      instagram: "",
    },
    {
      id: 3,
      imagen: "",
      marca: "PENDIENTE",
      disenador: "",
      estilo: "",
      descripcion: "",
      instagram: "",
    },
    {
      id: 4,
      imagen: "",
      marca: "PENDIENTE",
      disenador: "",
      estilo: "",
      descripcion: "",
      instagram: "",
    },
  ];

  /* 
  👉 PARA AGREGAR UN NUEVO DISEÑADOR:
  
  {
    id: 5,
    imagen: "URL_IMAGEN",
    marca: "NOMBRE MARCA",
    disenador: "Nombre del Diseñador",
    estilo: "Tipo de moda",
    descripcion: "Descripción...",
    instagram: "username",
  },
  */

  return (
    <section
      id="disenadores"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--cromatica-pink)] rounded-full blur-[150px] opacity-10"></div>

      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            Fashion
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Diseñadores de Moda
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Marcas independientes y diseñadores emergentes de moda mexicana
          </p>
        </div>

        {/* Grid de diseñadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {disenadores.map((disenador, index) => (
            <div
              key={disenador.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DisenadorCard
                imagen={disenador.imagen}
                marca={disenador.marca}
                disenador={disenador.disenador}
                estilo={disenador.estilo}
                descripcion={disenador.descripcion}
                instagram={disenador.instagram}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-[var(--cromatica-primary)]">
              👗 ¿Eres diseñador de moda?
            </h3>
            <p className="text-[var(--cromatica-text-secondary)] mb-6">
              Muestra tu colección en CROMÁTICA 2.0. Espacio para marcas
              independientes, sustentables y emergentes.
            </p>
            <a href="#convocatoria" className="btn-cromatica">
              Registrarse como Diseñador
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
 * - Grid de 4 columnas en desktop (lg:grid-cols-4)
 * - Para cambiar a 3 columnas: lg:grid-cols-3
 * - Para cambiar a 2 columnas: lg:grid-cols-2
 */
