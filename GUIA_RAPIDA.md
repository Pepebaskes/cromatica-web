# 🚀 GUÍA RÁPIDA - CROMÁTICA 2.0

## Inicio Rápido en 5 Minutos

### 📋 Lo Esencial

- **Proyecto:** Página web del festival CROMÁTICA 2.0
- **Fecha:** 22 de Mayo, 2026
- **Ubicación:** Ciudad de México
- **Tecnologías:** React + Tailwind CSS
- **Estado:** 100% funcional y listo para producción

---

## 🎯 Tareas Comunes

### 1. Agregar una Banda

**Archivo:** `/src/app/sections/ConciertosSection.tsx`

```tsx
const bandas = [
  // ... bandas existentes
  {
    id: 7, // Incrementa el número
    imagen: "https://images.unsplash.com/photo-XXXXX?w=800",
    nombre: "Nueva Banda",
    genero: "Rock",
    horario: "20:00 - 21:00",
    descripcion: "Descripción...",
    redesSociales: {
      instagram: "https://instagram.com/banda",
    },
  },
];
```

### 2. Cambiar la Fecha

**Archivo:** `/src/app/sections/HeroSection.tsx`

```tsx
const fechaEvento = "TU NUEVA FECHA";
```

### 3. Cambiar Colores

**Archivo:** `/src/styles/cromatica.css`

```css
:root {
  --cromatica-primary: #FF00FF; /* Cambia aquí */
  --cromatica-secondary: #00FFFF;
  /* etc. */
}
```

### 4. Agregar Artista Visual

**Archivo:** `/src/app/sections/ArtistasSection.tsx`

```tsx
const artistas = [
  // ... artistas existentes
  {
    id: 7,
    imagen: "URL",
    nombre: "Nuevo Artista",
    especialidad: "Pintura",
    descripcion: "Bio...",
    instagram: "username",
  },
];
```

### 5. Agregar Auto Clásico

**Archivo:** `/src/app/sections/AutosClasicosSection.tsx`

```tsx
const autos = [
  // ... autos existentes
  {
    id: 7,
    imagen: "URL",
    marca: "Ford",
    modelo: "Mustang",
    anio: "1970",
    dueno: "Nombre",
    descripcion: "...",
  },
];
```

---

## 📂 Estructura Simplificada

```
src/
├── app/
│   ├── components/    # Componentes reutilizables
│   ├── sections/      # Secciones de la página
│   └── App.tsx        # Archivo principal
│
└── styles/
    └── cromatica.css  # Colores y diseño
```

---

## 🎨 Colores del Festival

```
Magenta:  #FF00FF  (Primary)
Cyan:     #00FFFF  (Secondary)  
Amarillo: #FFFF00  (Tertiary)
Naranja:  #FF6B00  (Accent)
```

**Usar en código:**
```tsx
<div className="text-[var(--cromatica-primary)]">
```

---

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Instalar nueva dependencia
npm install nombre-paquete
```

---

## 📱 Responsive

```
Móvil:  < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

Todas las secciones son automáticamente responsive.

---

## 🚀 Deploy Rápido (Vercel)

1. Push a GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Ve a https://vercel.com
3. Importa tu repo
4. Click "Deploy"
5. ¡Listo!

---

## 📊 Secciones Principales

| Sección | Archivo | Qué hace |
|---------|---------|----------|
| Hero | `HeroSection.tsx` | Portada |
| Sobre | `SobreEventoSection.tsx` | Info del festival |
| Convocatoria | `ConvocatoriaSection.tsx` | Convocatorias |
| Conciertos | `ConciertosSection.tsx` | Bandas |
| Artistas | `ArtistasSection.tsx` | Artistas visuales |
| Diseñadores | `DisenadoresSection.tsx` | Moda |
| Autos | `AutosClasicosSection.tsx` | Autos clásicos |
| Invitados | `InvitadosSection.tsx` | Speakers VIP |
| Patrocinadores | `PatrocinadoresSection.tsx` | Logos |
| Ubicación | `UbicacionSection.tsx` | Mapa |
| Registro | `RegistroSection.tsx` | Formularios |

---

## ✅ Checklist Antes de Lanzar

- [ ] Cambiar fecha del evento
- [ ] Actualizar ubicación
- [ ] Agregar bandas reales
- [ ] Agregar artistas reales
- [ ] Reemplazar imágenes placeholder
- [ ] Actualizar información de contacto
- [ ] Configurar formularios (Supabase/Email)
- [ ] Agregar Google Maps (opcional)
- [ ] Probar en móvil
- [ ] Probar formularios
- [ ] Revisar links de redes sociales
- [ ] Agregar dominio personalizado

---

## 🆘 Problemas Comunes

**"No aparece mi cambio"**
- Refresca con Ctrl + Shift + R (cache)

**"Error al compilar"**
- Revisa que no falten comas en arrays
- Verifica que los IDs sean únicos
- Revisa la consola del navegador

**"Las imágenes no cargan"**
- Verifica que las URLs sean públicas
- Usa URLs de Unsplash para pruebas

**"El diseño se rompe en móvil"**
- Asegúrate de usar clases responsive (md:, lg:)
- No uses anchos fijos

---

## 📚 Documentación Completa

Para detalles exhaustivos, ve a **DOCUMENTACION_CROMATICA.md**

---

## 🎨 Clases CSS Útiles

```tsx
<h1 className="text-gradient">Título con gradiente</h1>
<h1 className="text-neon">Texto con neón</h1>
<h1 className="text-3d">Texto 3D</h1>
<h1 className="text-bubble">Logo estilo bubble</h1>
<div className="card-glow">Card con efecto glow</div>
<button className="btn-cromatica">Botón principal</button>
<button className="btn-outline">Botón secundario</button>
```

---

## 📞 ¿Dudas?

1. **Revisa los comentarios en el código** - Cada archivo está documentado
2. **Busca en DOCUMENTACION_CROMATICA.md** - Documentación completa
3. **Inspecciona ejemplos existentes** - Copia y modifica

---

## 🎉 ¡Listo para Usar!

El proyecto está **100% funcional** y documentado.
Solo personaliza el contenido y despliega.

**¡Éxito con CROMÁTICA 2.0!** 🎨🎸🚗
