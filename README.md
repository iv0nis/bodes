# Cerimonies - Sistema de Gestión para Xocolat Events

## Descripción

Sistema de automatización integral para Xocolat Events, empresa de gestión de eventos, catering y bodas en Mataró, Barcelona.

## Objetivo

Desarrollar un sistema integral completo que combina **CRM + operativa + facturación** para la gestión interna de eventos. Sistema enfocado en uso interno (sin web pública), optimizado para la gestión de clientes, presupuestos, calendario de eventos y operativa diaria.

## Estado Actual

- **Fase**: MVP Visual completado + Presupuesto y propuesta comercial preparados
- **Última actualización**: 2025-11-27
- **Próximo hito**: Presentar presupuesto al cliente y cerrar acuerdo comercial

## Features Principales

### ✅ Operativas

- **Dashboard**: Métricas, alertas, próximos eventos, clientes recientes, recordatorios
- **Gestión de Clientes**: Lista con filtros/búsqueda, ficha detallada, acciones rápidas (WhatsApp, reseña)
- **Calendario**: Vista mensual, eventos por día, próximos eventos

## Stack Tecnológico

### Frontend
- **Framework**: Next.js 16 (App Router + API Routes)
- **UI**: Tailwind CSS 4 + shadcn/ui
- **Lenguaje**: TypeScript

### Backend
- **Framework**: Next.js API Routes + Server Actions
- **Base de datos**: PostgreSQL (Supabase)
- **Autenticación**: Supabase Auth

### Integraciones
- **Email**: Mailchimp (cliente ya tiene contrato)
- **SMS**: Twilio (~0.065€/SMS España, estimado 150-300 SMS/mes)

### Deploy
- **Plataforma**: VPS Hostinger (4GB RAM) con Docker + Docker Compose
- **SSL**: Incluido
- **Dominio**: A definir con cliente

## Instalación y Uso

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build producción
npm run build

# Iniciar producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Decisiones Arquitectónicas Clave

- **Stack definitivo**: Next.js 16 + Tailwind CSS 4 + shadcn/ui + Supabase + Twilio SMS + Mailchimp
- **Modelo comercial**: 1.000€ inicial + 150€/mes × 18 meses (modelo recurrente con permanencia)
- **SMS desde MVP**: Integración Twilio obligatoria desde el inicio (tasa apertura 98% vs Email 20%)

## ⚠️ Consideraciones Críticas

### Rentabilidad del Modelo Comercial

**IMPORTANTE**: El modelo propuesto de **1.000€ inicial + 150€/mes × 18 meses** genera un margen de 122€/mes (81%), pero solo ingresos totales de 3.700€ en 18 meses.

**El desarrollo estimado vale 11.000-13.750€**, por lo que con un solo cliente se tarda ~7.5 años en amortizar la inversión.

**Estrategias de viabilidad:**
- Buscar **3-5 clientes** del sector bodas/eventos (beneficio 610€/mes con 5 clientes)
- Subir pago inicial a **6.000-8.000€** para cubrir desarrollo desde inicio
- Subir cuota mensual a **400-600€/mes**
- Desarrollar sistema **template reutilizable** (personalización 20-30h por cliente adicional)

Ver análisis detallado en `/docs/calculo-rentabilidad.md`

### Costes Variables Twilio SMS

**Twilio SMS** tiene coste variable (~0.065€/SMS España) difícil de estimar sin volumen confirmado.

**Estimación actual**: 150-300 SMS/mes (~10-20€/mes), pero debe **validarse con cliente** antes de cerrar propuesta comercial para no afectar margen de beneficio.

### Documentación Comercial

Los documentos comerciales completos están disponibles en `/docs/`:
- `presupuesto-proyecto.md` - Presupuesto técnico detallado (275h desarrollo)
- `propuesta-comercial-recurrente.md` - Modelo suscripción con 3 opciones
- `calculo-rentabilidad.md` - Análisis financiero realista

## Próximos Pasos Prioritarios

1. **Presentar presupuesto** al cliente (presupuesto técnico + propuesta suscripción)
2. **Decidir modelo de negocio** definitivo (validar rentabilidad 1.000€+150€/mes)
3. **Validar volumen SMS** mensual con cliente (confirmar 150-300 SMS/mes)
4. **Cerrar acuerdo comercial** y firmar contrato (definir forma de pago, permanencia 18 meses)
5. **Evaluar estrategia multi-cliente** (3-5 clientes sector bodas/eventos con template reutilizable)
6. **Iniciar desarrollo** tras firma (setup infraestructura, Supabase, autenticación, migración MVP a producción)

## Convenciones

- **Idioma UI**: Castellano
- **Idioma código**: Inglés (variables, funciones) con comentarios en castellano donde sea útil
- **Componentes**: Siguiendo convenciones estándar de React/Next.js

## Cliente

**Xocolat Events** - Mataró, Barcelona
Empresa especializada en gestión de eventos, catering y bodas

---

**Sistema de Memoria**: Este proyecto utiliza [MemSys3 v0.7.0](memsys3/) para gestión de contexto y sesiones de desarrollo.
