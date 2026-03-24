# Appbolera 🎳

Un sistema centralizado e integral para la gestión y puntuación de boleras comerciales (Bowling Alley Management Software). Este sistema permite administrar pistas, gestionar tarifas basadas en bloques de tiempo, controlar el estado de los juegos y manejar los cierres de caja diarios y ciclos de negocio.

## Estructura del Proyecto

Este monorepositorio está gestionado con **Nx** e integra tanto el frontend como el backend de la aplicación, separados en aplicaciones independientes dentro de la carpeta `apps/`.

### 1. Frontend (`apps/appbolera-frontend`)
Aplicación web moderna y reactiva diseñada para la recepción y control de pistas.
- **Framework:** Angular v20.1
- **Estilos y UI:** TailwindCSS, DaisyUI, PrimeNG / PrimeFlex
- **Iconos:** FontAwesome

### 2. Backend (`apps/appbolera-backend`)
API REST robusta encargada del manejo de datos, lógica de negocio y contabilidad de la bolera.
- **Framework:** Spring Boot v3.5.5 (Java 21)
- **Persistencia:** Spring Data JPA, Hibernate, PostgreSQL
- **Herramientas:** Lombok, Maven Wrapper (`mvnw`)

## Características Principales 🌟
- **Gestión Centralizada de Pistas:** Control único de todas las pistas desde un solo panel administrativo.
- **Módulo de Contabilidad e Ingresos:** 
  - Cálculo de tarifas basado en bloques de tiempo (ej. 30 min = $50k COP, 60 min = $80k COP) en lugar de tiempo exacto.
  - Generación de resúmenes diarios exportables a Excel con el estado de las partidas (completado, cancelado).
- **Control de Ciclos de Negocio:**
  - Apertura/Cierre manual de ciclo de caja para evitar juegos fuera de la contabilidad.
  - Gestión de turnos y juegos que transicionan después de medianoche.

## Requisitos Previos
- [Node.js](https://nodejs.org/) (versión compatible con Nx v21)
- [Java 21](https://adoptium.net/)
- [PostgreSQL](https://www.postgresql.org/) (en ejecución)

## Ejecutar el Proyecto

### Levantar el Frontend (Angular / Nx)
Para arrancar el servidor de desarrollo del frontend:
```bash
npx nx serve appbolera-frontend
```

Para generar un build de producción:
```bash
npx nx build appbolera-frontend
```

### Levantar el Backend (Spring Boot)
Navega a la carpeta del backend y utiliza Maven Wrapper:
```bash
cd apps/appbolera-backend
./mvnw spring-boot:run
```
*(Asegúrate de configurar los datos de acceso a tu base de datos PostgreSQL en el archivo `application.properties` o `application.yml` dentro de `src/main/resources`)*.

## Comandos Útiles de Desarrollo (Nx Histórico)
Aquí algunos comandos utilizados durante la configuración inicial del proyecto por si necesitas generar nuevos recursos:
- Crear componente en Angular: `nx g @nx/angular:component apps/appbolera-frontend/src/app/layout/navbar`
- Instalar plugin de SpringBoot Nx (opcional a futuro): `npm install @nxrocks/nx-spring-boot --save-dev`

## Herramientas de Nx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

- [Aprende sobre cómo usar Nx](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
- Extensión útil: [Instalar Nx Console en tu editor](https://nx.dev/getting-started/editor-setup) para autocompletar e interfaz visual de tareas.
