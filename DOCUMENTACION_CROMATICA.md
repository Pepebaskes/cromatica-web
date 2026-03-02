# 📚 DOCUMENTACIÓN COMPLETA - CROMÁTICA 2.0

## 🎨 Bienvenido al Proyecto CROMÁTICA 2.0

Esta es la documentación oficial de la página web del festival CROMÁTICA 2.0. Este documento te guiará paso a paso para entender, personalizar y escalar el proyecto.

---

## 📋 TABLA DE CONTENIDOS

1. [Descripción del Proyecto](#descripcion)
2. [Estructura de Archivos](#estructura)
3. [Sistema de Diseño](#diseno)
4. [Componentes Principales](#componentes)
5. [Secciones de la Página](#secciones)
6. [Cómo Agregar Contenido](#agregar-contenido)
7. [Personalización](#personalizacion)
8. [Integración con Backend](#backend)
9. [Responsive Design](#responsive)
10. [Optimización](#optimizacion)
11. [Deployment](#deployment)
12. [FAQ](#faq)

---

<a name="descripcion"></a>
## 🎯 1. DESCRIPCIÓN DEL PROYECTO

CROMÁTICA 2.0 es la página web oficial del festival independiente de arte, cultura, música y emprendimiento que se realizará el 22 de mayo de 2026 en México.

### Características principales:
- ✅ Diseño moderno, colorido y juvenil
- ✅ Sistema completamente modular
- ✅ 100% responsive (móvil, tablet, desktop)
- ✅ Documentación exhaustiva en español
- ✅ Fácil de personalizar y escalar
- ✅ Componentes reutilizables
- ✅ Código limpio y organizado

---

<a name="estructura"></a>
## 📂 2. ESTRUCTURA DE ARCHIVOS

```
cromatica-festival/
│
├── src/
│   ├── app/
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── ArtistaCard.tsx   # Card de artista visual
│   │   │   ├── AutoCard.tsx      # Card de auto clásico
│   │   │   ├── BandCard.tsx      # Card de banda musical
│   │   │   ├── DisenadorCard.tsx # Card de diseñador de moda
│   │   │   ├── Footer.tsx        # Pie de página
│   │   │   ├── FormularioRegistro.tsx # Formulario modular
│   │   │   └── Navigation.tsx    # Menú de navegación
│   │   │
│   │   ├── sections/             # Secciones de la página
│   │   │   ├── HeroSection.tsx           # Portada principal
│   │   │   ├── SobreEventoSection.tsx    # Sobre el evento
│   │   │   ├── ConvocatoriaSection.tsx   # Convocatorias
│   │   │   ├── ConciertosSection.tsx     # Conciertos
│   │   │   ├── ArtistasSection.tsx       # Artistas visuales
│   │   │   ├── DisenadoresSection.tsx    # Diseñadores
│   │   │   ├── AutosClasicosSection.tsx  # Autos clásicos
│   │   │   ├── InvitadosSection.tsx      # Invitados especiales
│   │   │   ├── PatrocinadoresSection.tsx # Patrocinadores
│   │   │   ├── UbicacionSection.tsx      # Ubicación
│   │   │   └── RegistroSection.tsx       # Registro
│   │   │
│   │   └── App.tsx               # Archivo principal
│   │
│   └── styles/
│       ├── cromatica.css         # Sistema de diseño del festival
│       ├── fonts.css             # Fuentes de Google
│       ├── index.css             # Importaciones globales
│       ├── tailwind.css          # Tailwind base
│       └── theme.css             # Tema base
│
├── DOCUMENTACION_CROMATICA.md    # Este archivo
├── GUIA_RAPIDA.md                # Guía rápida de inicio
└── package.json                   # Dependencias
```

### ¿Qué archivo hace qué?

- **App.tsx**: Ensambla todas las secciones
- **Navigation.tsx**: Menú de navegación con scroll suave
- **cromatica.css**: Todos los colores, efectos y animaciones
- **[Nombre]Section.tsx**: Cada sección de la página
- **[Nombre]Card.tsx**: Componentes reutilizables para tarjetas

---

<a name="diseno"></a>
## 🎨 3. SISTEMA DE DISEÑO

### Paleta de Colores Oficial

El archivo `cromatica.css` contiene todas las variables de color:

```css
--cromatica-primary: #FF00FF;      /* Magenta vibrante */
--cromatica-secondary: #00FFFF;    /* Cyan eléctrico */
--cromatica-tertiary: #FFFF00;     /* Amarillo brillante */
--cromatica-accent: #FF6B00;       /* Naranja intenso */
--cromatica-purple: #9D00FF;       /* Púrpura profundo */
--cromatica-green: #00FF88;        /* Verde neón */
--cromatica-pink: #FF1493;         /* Rosa fuerte */
--cromatica-blue: #0066FF;         /* Azul eléctrico */
```

### Cómo Usar los Colores

```jsx
// En componentes React con inline styles:
<div style={{ color: 'var(--cromatica-primary)' }}>

// En Tailwind (usando corchetes):
<div className="text-[var(--cromatica-primary)]">

// En archivos CSS:
.mi-clase {
  background: var(--cromatica-gradient-1);
}
```

### Tipografía

**Fuentes utilizadas:**
1. **Fredoka One** - Logo CROMÁTICA (efecto 3D/bubble)
2. **Poppins** - Títulos y subtítulos
3. **Inter** - Texto de cuerpo

**Cómo aplicar:**
```jsx
// Logo con efecto 3D:
<h1 className="text-bubble" style={{ fontFamily: "'Fredoka One', cursive" }}>
  CROMÁTICA
</h1>

// Títulos:
<h2 style={{ fontFamily: "'Poppins', sans-serif" }}>
  Título
</h2>
```

### Efectos Especiales

**Texto con gradiente:**
```jsx
<h2 className="text-gradient">Título con gradiente</h2>
```

**Texto con neón:**
```jsx
<p className="text-neon">Texto con efecto neón</p>
```

**Texto 3D:**
```jsx
<h1 className="text-3d">Texto 3D</h1>
```

**Cards con glow:**
```jsx
<div className="card-glow p-8">
  Contenido del card
</div>
```

**Botones:**
```jsx
// Botón principal:
<button className="btn-cromatica">Click aquí</button>

// Botón secundario:
<button className="btn-outline">Click aquí</button>
```

---

<a name="componentes"></a>
## 🧩 4. COMPONENTES PRINCIPALES

### Navigation.tsx
Menú de navegación con sidebar móvil.

**Agregar un nuevo link:**
```tsx
// En Navigation.tsx, busca el array navItems:
const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nueva Sección', href: '#nueva' }, // ← Agrega aquí
];
```

### BandCard.tsx
Componente para mostrar bandas.

**Uso:**
```tsx
<BandCard
  imagen="url-imagen"
  nombre="Nombre de la Banda"
  genero="Rock"
  horario="20:00 - 21:00"
  descripcion="Descripción..."
  redesSociales={{
    instagram: "https://...",
    spotify: "https://..."
  }}
/>
```

### ArtistaCard.tsx
Componente para artistas visuales.

**Uso:**
```tsx
<ArtistaCard
  imagen="url-imagen"
  nombre="Nombre del Artista"
  especialidad="Pintura"
  descripcion="Bio..."
  instagram="username"
/>
```

### DisenadorCard.tsx
Componente para diseñadores de moda.

**Uso:**
```tsx
<DisenadorCard
  imagen="url-imagen"
  marca="Nombre de la Marca"
  disenador="Nombre del Diseñador"
  estilo="Streetwear"
  descripcion="Descripción..."
  instagram="username"
/>
```

### AutoCard.tsx
Componente para autos clásicos.

**Uso:**
```tsx
<AutoCard
  imagen="url-imagen"
  modelo="Mustang"
  marca="Ford"
  anio="1969"
  dueno="Nombre del Dueño"
  descripcion="Descripción..."
/>
```

### FormularioRegistro.tsx
Formulario modular para registros.

**Uso:**
```tsx
<FormularioRegistro tipo="artista" />
<FormularioRegistro tipo="banda" />
<FormularioRegistro tipo="empresario" />
// etc.
```

---

<a name="secciones"></a>
## 📄 5. SECCIONES DE LA PÁGINA

### 1. HeroSection (Portada)
**Ubicación:** `/src/app/sections/HeroSection.tsx`

**Personalizar:**
```tsx
const fechaEvento = "22 de Mayo, 2026"; // ← Cambia la fecha aquí
const fraseImpactante = "Tu nueva frase"; // ← Cambia la frase aquí
```

### 2. SobreEventoSection
**Ubicación:** `/src/app/sections/SobreEventoSection.tsx`

**Contenido:**
- Historia del festival
- Misión
- Valores

**Agregar más valores:**
Copia un bloque de card y personalízalo:
```tsx
<div className="card-glow p-8 text-center">
  <div className="text-5xl mb-4">🎯</div>
  <h4 className="text-xl font-bold mb-2">Nuevo Valor</h4>
  <p className="text-[var(--cromatica-text-secondary)]">
    Descripción
  </p>
</div>
```

### 3. ConvocatoriaSection
**Ubicación:** `/src/app/sections/ConvocatoriaSection.tsx`

**Agregar nueva convocatoria:**
```tsx
const convocatorias = [
  // ... convocatorias existentes
  {
    id: 8, // Incrementa el número
    categoria: "Nueva Categoría",
    fechaApertura: "1 de Marzo",
    fechaCierre: "15 de Mayo",
    descripcion: "Descripción...",
    costo: "$50 MXN",
    icono: "🎭",
    color: "var(--cromatica-blue)",
  },
];
```

### 4. ConciertosSection
**Ubicación:** `/src/app/sections/ConciertosSection.tsx`

**Agregar nueva banda:**
```tsx
const bandas = [
  // ... bandas existentes
  {
    id: 7,
    imagen: "URL_IMAGEN",
    nombre: "Nueva Banda",
    genero: "Rock",
    horario: "16:00 - 17:00",
    descripcion: "Descripción...",
    redesSociales: {
      instagram: "https://...",
      spotify: "https://...",
    },
  },
];
```

### 5. ArtistasSection
**Similar a ConciertosSection**, solo agrega al array `artistas`.

### 6. DisenadoresSection
**Similar a ConciertosSection**, solo agrega al array `disenadores`.

### 7. AutosClasicosSection
**Similar a ConciertosSection**, solo agrega al array `autos`.

### 8. InvitadosSection
**Ubicación:** `/src/app/sections/InvitadosSection.tsx`

**Agregar nuevo invitado:**
```tsx
const invitados = [
  // ... invitados existentes
  {
    id: 4,
    imagen: "URL_IMAGEN",
    nombre: "Nombre Completo",
    titulo: "Título profesional",
    descripcion: "Bio...",
    conferencia: "Tema de conferencia",
    horario: "HH:MM - HH:MM",
  },
];
```

### 9. PatrocinadoresSection
**Ubicación:** `/src/app/sections/PatrocinadoresSection.tsx`

**Agregar nuevo patrocinador:**
```tsx
const patrocinadores = [
  // ... patrocinadores existentes
  {
    id: 7,
    nombre: "Nombre Empresa",
    logo: "URL_LOGO_PNG",
    url: "https://sitio-web.com",
  },
];
```

### 10. UbicacionSection
**Ubicación:** `/src/app/sections/UbicacionSection.tsx`

**Cambiar ubicación:**
```tsx
const ubicacion = {
  nombre: "Nuevo Lugar",
  direccion: "Nueva Dirección",
  ciudad: "Ciudad, Estado",
  codigoPostal: "00000",
  latitud: 19.4326,
  longitud: -99.1332,
  googleMapsUrl: "https://goo.gl/maps/...",
};
```

### 11. RegistroSection
**Ubicación:** `/src/app/sections/RegistroSection.tsx`

**Agregar nueva categoría de registro:**

1. En `RegistroSection.tsx`:
```tsx
const categorias = [
  // ... categorías existentes
  { id: 'nueva-cat', label: 'Nueva Categoría', icono: '🎭' },
];
```

2. En `FormularioRegistro.tsx`:
```tsx
// Agrega el tipo:
interface FormularioRegistroProps {
  tipo: 'artista' | 'banda' | ... | 'nueva-cat';
}

// Agrega la config:
const config = {
  // ... configs existentes
  'nueva-cat': {
    titulo: 'Registro de Nueva Categoría',
    icono: '🎭',
    costo: '$50 MXN',
    placeholder: 'Tu nombre',
  },
};
```

---

<a name="agregar-contenido"></a>
## ➕ 6. CÓMO AGREGAR CONTENIDO

### Agregar una Banda

1. Ve a `/src/app/sections/ConciertosSection.tsx`
2. Encuentra el array `bandas`
3. Agrega un nuevo objeto:

```tsx
{
  id: 7, // Siguiente número disponible
  imagen: "https://images.unsplash.com/photo-XXXXX?w=800&h=800&fit=crop",
  nombre: "Mi Nueva Banda",
  genero: "Indie Rock",
  horario: "23:00 - 00:00",
  descripcion: "Una banda increíble con un sonido único...",
  redesSociales: {
    instagram: "https://instagram.com/minuevabanda",
    spotify: "https://open.spotify.com/artist/123",
  },
},
```

4. **¡Listo!** La banda aparecerá automáticamente.

### Agregar un Artista Visual

Mismo proceso, pero en `/src/app/sections/ArtistasSection.tsx`:

```tsx
{
  id: 7,
  imagen: "URL_IMAGEN",
  nombre: "Nuevo Artista",
  especialidad: "Fotografía",
  descripcion: "Bio del artista...",
  instagram: "username",
},
```

### Agregar un Diseñador

En `/src/app/sections/DisenadoresSection.tsx`:

```tsx
{
  id: 5,
  imagen: "URL_IMAGEN",
  marca: "NUEVA MARCA",
  disenador: "Nombre Diseñador",
  estilo: "Moda Sustentable",
  descripcion: "Descripción...",
  instagram: "username",
},
```

### Agregar un Auto Clásico

En `/src/app/sections/AutosClasicosSection.tsx`:

```tsx
{
  id: 7,
  imagen: "URL_IMAGEN",
  marca: "Chevrolet",
  modelo: "Camaro",
  anio: "1970",
  dueno: "Juan Pérez",
  descripcion: "Descripción del auto...",
},
```

### Obtener Imágenes para el Proyecto

**Opciones:**

1. **Unsplash (Recomendado para pruebas):**
   - Ve a https://unsplash.com
   - Busca: "rock band", "artist painting", "classic car", etc.
   - Usa el formato: `https://images.unsplash.com/photo-ID?w=800&h=800&fit=crop`

2. **Subir tus propias imágenes:**
   - Usa un servicio como Cloudinary, ImgBB, o similar
   - Obtén la URL directa
   - Úsala en los componentes

3. **Desde el proyecto:**
   - Coloca imágenes en `/public/images/`
   - Usa rutas relativas: `/images/banda1.jpg`

---

<a name="personalizacion"></a>
## 🎨 7. PERSONALIZACIÓN

### Cambiar la Paleta de Colores

1. Ve a `/src/styles/cromatica.css`
2. Modifica las variables en `:root`:

```css
:root {
  --cromatica-primary: #TU_COLOR; /* Cambia aquí */
  --cromatica-secondary: #TU_COLOR;
  /* etc. */
}
```

3. **¡Los cambios se aplicarán en toda la página automáticamente!**

### Cambiar la Tipografía del Logo

1. Ve a `https://fonts.google.com`
2. Busca una fuente "bubble" o "display"
3. En `/src/styles/fonts.css`, agrega:

```css
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap');
```

4. En los componentes, usa:

```tsx
<h1 style={{ fontFamily: "'TU_FUENTE', cursive" }}>
  CROMÁTICA
</h1>
```

### Cambiar la Fecha del Evento

En `/src/app/sections/HeroSection.tsx`:

```tsx
const fechaEvento = "NUEVA FECHA";
```

### Cambiar la Ubicación

En `/src/app/sections/UbicacionSection.tsx`:

```tsx
const ubicacion = {
  nombre: "Nuevo Lugar",
  direccion: "Nueva Dirección",
  // etc.
};
```

### Agregar una Nueva Sección

1. **Crear el archivo:**
   - Crea `/src/app/sections/MiNuevaSeccion.tsx`

2. **Código básico:**
```tsx
export function MiNuevaSeccion() {
  return (
    <section
      id="mi-seccion"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container-cromatica">
        <h2 className="text-4xl font-bold text-gradient mb-8">
          Mi Nueva Sección
        </h2>
        {/* Tu contenido aquí */}
      </div>
    </section>
  );
}
```

3. **Importar en App.tsx:**
```tsx
import { MiNuevaSeccion } from './sections/MiNuevaSeccion';

// En el return:
<MiNuevaSeccion />
```

4. **Agregar link en Navigation:**
```tsx
const navItems = [
  // ... items existentes
  { label: 'Mi Sección', href: '#mi-seccion' },
];
```

---

<a name="backend"></a>
## 🔌 8. INTEGRACIÓN CON BACKEND

### Opción 1: Supabase (Recomendado)

**Por qué Supabase:**
- Gratis para empezar
- Base de datos PostgreSQL
- Autenticación incluida
- APIs automáticas
- Dashboard visual

**Pasos:**

1. **Crear cuenta en Supabase:**
   - Ve a https://supabase.com
   - Crea una cuenta gratis
   - Crea un nuevo proyecto

2. **Crear tabla de registros:**
```sql
CREATE TABLE registros (
  id BIGSERIAL PRIMARY KEY,
  tipo VARCHAR(50) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50),
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. **Instalar cliente Supabase:**
```bash
npm install @supabase/supabase-js
```

4. **Configurar en tu proyecto:**

Crea `/src/lib/supabase.ts`:
```tsx
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'TU_SUPABASE_URL';
const supabaseKey = 'TU_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

5. **Usar en FormularioRegistro:**

```tsx
import { supabase } from '../../lib/supabase';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const { data, error } = await supabase
    .from('registros')
    .insert([{ tipo, ...formData }]);
  
  if (error) {
    alert('Error al enviar. Intenta de nuevo.');
  } else {
    alert('¡Registro enviado con éxito!');
    // Limpiar formulario...
  }
};
```

### Opción 2: API Propia

Si tienes tu propio backend:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://tu-api.com/registros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tipo, ...formData }),
    });
    
    if (response.ok) {
      alert('¡Registro enviado!');
    }
  } catch (error) {
    alert('Error al enviar');
  }
};
```

### Opción 3: Servicios de Email

**FormSubmit (Más fácil):**

1. Ve a https://formsubmit.co
2. Cambia tu formulario:

```tsx
<form
  action="https://formsubit.co/tu@email.com"
  method="POST"
>
  <input type="text" name="nombre" required />
  <input type="email" name="email" required />
  <button type="submit">Enviar</button>
</form>
```

**EmailJS:**

1. Crea cuenta en https://emailjs.com
2. Instala: `npm install @emailjs/browser`
3. Implementa en tu formulario

### Google Maps

**Para integrar Google Maps real:**

1. **Obtener API Key:**
   - Ve a https://console.cloud.google.com
   - Crea un proyecto
   - Activa "Maps JavaScript API"
   - Obtén tu API key

2. **Instalar librería:**
```bash
npm install @react-google-maps/api
```

3. **Implementar en UbicacionSection:**

```tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

<LoadScript googleMapsApiKey="TU_API_KEY">
  <GoogleMap
    center={{ lat: ubicacion.latitud, lng: ubicacion.longitud }}
    zoom={15}
    mapContainerStyle={{ width: '100%', height: '500px' }}
  >
    <Marker position={{ lat: ubicacion.latitud, lng: ubicacion.longitud }} />
  </GoogleMap>
</LoadScript>
```

---

<a name="responsive"></a>
## 📱 9. RESPONSIVE DESIGN

### Breakpoints de Tailwind

```
sm:  640px   (móvil grande)
md:  768px   (tablet)
lg:  1024px  (laptop)
xl:  1280px  (desktop)
2xl: 1536px  (desktop grande)
```

### Cómo Funciona

```tsx
// Este texto es:
// - text-2xl en móvil
// - text-3xl en tablet (md)
// - text-4xl en laptop (lg)
<h2 className="text-2xl md:text-3xl lg:text-4xl">
  Título Responsive
</h2>

// Este grid es:
// - 1 columna en móvil
// - 2 columnas en tablet (md)
// - 3 columnas en laptop (lg)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Prueba el Diseño Responsive

1. **Chrome DevTools:**
   - F12 → Click en el icono de móvil
   - Prueba diferentes dispositivos

2. **Responsive Design Mode (Firefox):**
   - Ctrl + Shift + M
   - Cambia resoluciones

3. **Navegador:**
   - Ajusta el tamaño de la ventana manualmente

### Consejos para Responsive

✅ **Haz:**
- Usa `grid` o `flexbox` para layouts
- Usa clases responsive de Tailwind (sm:, md:, lg:)
- Prueba en móvil SIEMPRE
- Usa `max-w-` para limitar anchos

❌ **Evita:**
- Anchos fijos (width: 500px)
- Posiciones absolutas sin fallback
- Texto demasiado pequeño en móvil
- Botones muy pequeños (<44px)

---

<a name="optimizacion"></a>
## ⚡ 10. OPTIMIZACIÓN

### Optimizar Imágenes

**Herramientas recomendadas:**
1. **TinyPNG** - https://tinypng.com
2. **Squoosh** - https://squoosh.app
3. **ImageOptim** (Mac)

**Tamaños recomendados:**
- Bandas: 800x800px
- Artistas: 800x800px  
- Autos: 800x600px
- Hero background: 1920x1080px

**Formato:**
- JPG para fotos
- PNG para logos con transparencia
- WebP para mejor compresión (si el navegador lo soporta)

### Lazy Loading

Todas las imágenes en el proyecto ya usan `loading="lazy"`:

```tsx
<img src="..." alt="..." loading="lazy" />
```

Esto carga las imágenes solo cuando están por aparecer en pantalla.

### Performance Tips

1. **Minimizar dependencias:**
   - Solo instala lo que necesites
   - Revisa package.json regularmente

2. **Optimizar CSS:**
   - Las clases CSS están en módulos separados
   - Solo se cargan las que usas

3. **Code splitting:**
   - React hace esto automáticamente
   - Cada componente se carga cuando se necesita

4. **Lighthouse Score:**
   - Abre Chrome DevTools
   - Ve a "Lighthouse"
   - Genera reporte
   - Sigue las recomendaciones

---

<a name="deployment"></a>
## 🚀 11. DEPLOYMENT

### Opción 1: Vercel (Recomendado)

**Por qué Vercel:**
- ✅ Gratis para proyectos personales
- ✅ Deploy automático desde GitHub
- ✅ HTTPS incluido
- ✅ CDN global
- ✅ Preview deployments

**Pasos:**

1. **Push a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/cromatica.git
git push -u origin main
```

2. **Conectar con Vercel:**
   - Ve a https://vercel.com
   - Crea cuenta (usa GitHub)
   - Click "New Project"
   - Importa tu repositorio
   - Click "Deploy"
   - ¡Listo! Tu sitio está en vivo

3. **Dominio personalizado:**
   - Ve a tu proyecto en Vercel
   - Settings → Domains
   - Agrega tu dominio
   - Sigue las instrucciones DNS

### Opción 2: Netlify

Similar a Vercel:

1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Deploy automático
4. Configura dominio personalizado

### Opción 3: GitHub Pages

```bash
npm run build
# Sube la carpeta dist/ a GitHub Pages
```

### Variables de Entorno

Si usas APIs (Google Maps, Supabase, etc.):

**En Vercel:**
1. Settings → Environment Variables
2. Agrega tus keys

**En tu código:**
```tsx
const apiKey = process.env.VITE_GOOGLE_MAPS_KEY;
```

**En .env (no subir a GitHub):**
```
VITE_GOOGLE_MAPS_KEY=tu_key_aquí
VITE_SUPABASE_URL=tu_url_aquí
```

---

<a name="faq"></a>
## ❓ 12. FAQ (Preguntas Frecuentes)

### ¿Cómo cambio los colores del festival?

Ve a `/src/styles/cromatica.css` y modifica las variables CSS en `:root`. Los cambios se aplicarán automáticamente en todo el sitio.

### ¿Cómo agrego más bandas?

En `/src/app/sections/ConciertosSection.tsx`, agrega un nuevo objeto al array `bandas`. Sigue el mismo formato que los existentes.

### ¿Puedo usar esto para otro evento?

¡Sí! Todo el código está documentado y es fácil de personalizar. Solo cambia los textos, colores e imágenes.

### ¿Necesito saber programación?

Para cambios básicos (textos, imágenes, colores): **No**.
Para cambios avanzados (nuevas funcionalidades): **Sí, React/JavaScript básico**.

### ¿Cómo conecto con una base de datos?

Sigue la sección [Integración con Backend](#backend) de esta documentación. Supabase es la opción más fácil.

### ¿Es responsive?

Sí, completamente. El diseño se adapta a móvil, tablet y desktop automáticamente.

### ¿Puedo vender boletos desde esta página?

El código actual no incluye pasarela de pago, pero puedes:
1. Agregar un link a Eventbrite/Boletia
2. Integrar Stripe/PayPal
3. Usar un servicio de ticketing externo

### ¿Cómo optimizo las imágenes?

Usa herramientas como TinyPNG o Squoosh. El tamaño ideal para bandas/artistas es 800x800px.

### ¿Cuánto cuesta hostear esto?

**Gratis** con Vercel, Netlify o GitHub Pages.

### ¿Puedo agregar un blog?

Sí, puedes:
1. Crear una nueva sección para posts
2. Usar un CMS headless como Contentful
3. Integrar con WordPress (usando su API REST)

### ¿Cómo hago SEO?

Agrega a tu `index.html`:
```html
<head>
  <title>CROMÁTICA 2.0 - Festival de Arte y Cultura</title>
  <meta name="description" content="Festival independiente...">
  <meta property="og:title" content="CROMÁTICA 2.0">
  <meta property="og:image" content="URL_IMAGEN">
  <!-- etc. -->
</head>
```

### ¿El código está bien documentado?

Sí, **cada archivo tiene comentarios exhaustivos en español** explicando qué hace y cómo modificarlo.

### ¿Puedo usar esto comercialmente?

Sí, el código es tuyo. Puedes usarlo como quieras.

---

## 📞 CONTACTO Y SOPORTE

Si tienes dudas o necesitas ayuda:

1. **Revisa los comentarios en el código** - Cada archivo tiene documentación detallada
2. **Busca en esta documentación** - Usa Ctrl+F
3. **Revisa GUIA_RAPIDA.md** - Para inicio rápido

---

## 🎉 ¡ÉXITO CON TU FESTIVAL!

Has recibido un proyecto profesional, bien estructurado y completamente documentado. Con esta base, puedes crear la página web de cualquier evento.

**Recuerda:**
- El código es modular y fácil de modificar
- Todos los archivos tienen comentarios en español
- Puedes agregar contenido sin tocar código complejo
- Es completamente responsive y optimizado

¡Mucha suerte con CROMÁTICA 2.0! 🎨🎸🚗

---

**Última actualización:** 27 de febrero de 2026
**Versión:** 1.0.0
