# Presupuesto Proyecto Cerimonies - Xocolat Events

**Fecha:** 27 de noviembre de 2025
**Cliente:** Xocolat Events (Mataró, Barcelona)
**Proyecto:** Sistema integral de gestión interna (CRM + Operativa + Calendario)

---

## 1. RESUMEN EJECUTIVO

### Alcance del Proyecto (MVP)
Sistema web interno para gestión de eventos con los siguientes módulos:

- ✅ **CRM y Gestión de Clientes** - Base de datos clientes, formularios, historial
- ✅ **Calendario de Eventos** - Planificación eventos, visualización calendario
- ✅ **Sistema de Recordatorios** - Avisos automáticos de citas y reuniones
- ✅ **Comunicaciones automatizadas** - Integración con Mailchimp para emails y Twilio para SMS
- ❌ Facturación (se mantiene Holded como herramienta externa)
- ❌ Presupuestos avanzados (fase 2)

### Stack Tecnológico Propuesto
- **Frontend:** Next.js 14 (App Router) + TypeScript + TailwindCSS + shadcn/ui
- **Backend:** Next.js API Routes + Server Actions
- **Base de datos:** Supabase (PostgreSQL + Auth + Storage)
- **Deployment:** VPS Hostinger con Docker + Docker Compose
- **Integraciones:** Mailchimp API + Twilio SMS API

---

## 2. DESGLOSE DE DESARROLLO

### Fase 1: Setup y Configuración Inicial
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Configuración infraestructura | 8h | Setup Docker, VPS Hostinger, CI/CD básico |
| Setup proyecto Next.js | 6h | Estructura base, TypeScript, ESLint, Prettier |
| Configuración Supabase | 4h | DB schema inicial, auth, políticas RLS |
| Sistema de autenticación | 8h | Login, registro, recuperación contraseña |
| **SUBTOTAL** | **26h** | |

### Fase 2: Módulo CRM y Gestión de Clientes
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Diseño base de datos clientes | 6h | Schema SQL, relaciones, validaciones |
| CRUD clientes completo | 12h | Crear, editar, eliminar, buscar clientes |
| Formulario captación web | 6h | Formulario público + validación + guardado |
| Historial comunicaciones | 8h | Timeline de interacciones con cada cliente |
| Búsqueda y filtros avanzados | 6h | Filtros por fecha, estado, tipo evento |
| **SUBTOTAL** | **38h** | |

### Fase 3: Calendario y Gestión de Eventos
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Diseño BD eventos/bodas | 6h | Schema eventos, relación con clientes |
| Vista calendario mensual | 10h | Componente calendario interactivo |
| Creación/edición eventos | 8h | Formularios eventos con validación |
| Vista detalle evento | 6h | Información completa del evento |
| Filtros y búsqueda eventos | 4h | Por fecha, tipo, cliente, estado |
| **SUBTOTAL** | **34h** | |

### Fase 4: Sistema de Recordatorios y Automatizaciones
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Sistema de notificaciones | 8h | Arquitectura notificaciones internas |
| Recordatorios de citas | 10h | Cron jobs + lógica envío recordatorios |
| Integración Mailchimp | 12h | API Mailchimp, templates, envíos |
| Integración Twilio SMS | 10h | API Twilio, envío SMS, verificación números |
| Emails automáticos | 10h | Felicitaciones aniversario, confirmaciones |
| SMS automáticos | 8h | Recordatorios por SMS, confirmaciones |
| Panel configuración avisos | 6h | UI para configurar cuándo enviar avisos |
| **SUBTOTAL** | **64h** | |

### Fase 5: Dashboard y Reportes
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Dashboard principal | 10h | Métricas clave, próximos eventos, actividad |
| Reportes básicos | 8h | Eventos del mes, clientes nuevos, estadísticas |
| Exportación datos (CSV/PDF) | 6h | Exportar listados y reportes |
| **SUBTOTAL** | **24h** | |

### Fase 6: UI/UX Profesional
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Diseño sistema de componentes | 12h | Design system con shadcn/ui personalizado |
| Diseño responsivo móvil/tablet | 10h | Adaptación todas las vistas a móvil |
| Optimización UX | 6h | Mejoras usabilidad, feedback usuario |
| **SUBTOTAL** | **28h** | |

### Fase 7: Testing y Deployment
| Tarea | Horas | Descripción |
|-------|-------|-------------|
| Testing funcional | 12h | Tests unitarios y de integración clave |
| Testing manual completo | 8h | Pruebas exhaustivas de flujos |
| Deployment producción | 6h | Setup Docker en VPS, dominio, SSL |
| Documentación técnica | 6h | Docs para mantenimiento futuro |
| Formación cliente | 4h | Sesión formación uso del sistema |
| **SUBTOTAL** | **36h** | |

---

## 3. RESUMEN HORAS DE DESARROLLO

| Fase | Horas |
|------|-------|
| Setup y Configuración | 26h |
| CRM y Clientes | 38h |
| Calendario y Eventos | 34h |
| Recordatorios y Automatizaciones | 64h |
| Dashboard y Reportes | 24h |
| UI/UX Profesional | 28h |
| Testing y Deployment | 36h |
| **TOTAL DESARROLLO** | **250h** |

**Margen gestión proyecto (10%):** +25h
**TOTAL FINAL:** **275 horas**

---

## 4. COSTES DE DESARROLLO

### Opción A: Tarifa Estándar
- **Tarifa por hora:** 50€/h
- **Total desarrollo:** 275h × 50€ = **13.750€**

### Opción B: Tarifa Profesional
- **Tarifa por hora:** 65€/h
- **Total desarrollo:** 275h × 65€ = **17.875€**

### Opción C: Precio Cerrado (Recomendada)
- **Precio proyecto completo:** **15.500€**
- Incluye todas las fases descritas (+ integración Twilio SMS)
- Garantía de 3 meses post-lanzamiento
- 2 revisiones de funcionalidad incluidas

---

## 5. COSTES DE INFRAESTRUCTURA (Mensuales)

| Servicio | Coste Mensual | Descripción |
|----------|---------------|-------------|
| VPS Hostinger (4GB RAM) | ~12€/mes | Servidor para app dockerizada |
| Supabase Pro | 25$/mes (~23€) | Base de datos + Auth + Storage |
| Mailchimp Essentials | ~15€/mes | Hasta 5.000 contactos |
| Twilio (Pay as you go) | Variable | ~0,065€/SMS España (estimado 20€/mes con 300 SMS) |
| Dominio (.com) | ~12€/año (~1€/mes) | Dominio personalizado |
| **TOTAL MENSUAL** | **~71€/mes** | **~852€/año** |

### Alternativa Económica (Free Tier Básico)
- **VPS Hostinger:** ~12€/mes
- **Supabase Free:** 0€/mes (límites: 500MB DB, 50.000 usuarios activos/mes)
- **Mailchimp Free:** 0€/mes (hasta 500 contactos)
- **Twilio Pay as you go:** Variable (~10-20€/mes estimado con uso moderado de SMS)
- **Dominio:** ~1€/mes
- **TOTAL MENSUAL:** **~23-33€/mes** (~276-396€/año)

**Recomendación:** Empezar con Free Tier y escalar según crecimiento.

---

## 6. INVERSIÓN TOTAL PROYECTO

### Año 1
| Concepto | Coste |
|----------|-------|
| Desarrollo (precio cerrado) | 15.500€ |
| Infraestructura año 1 (Free Tier + SMS) | 276-396€ |
| **TOTAL AÑO 1** | **15.776-15.896€** |

### Años Siguientes
| Concepto | Coste Anual |
|----------|-------------|
| Infraestructura (Free Tier + SMS) | 276-396€/año |
| Infraestructura (Pro + SMS) | 852€/año |
| Mantenimiento opcional | 900-1.500€/año |

**Nota sobre SMS:** El coste de Twilio es variable según uso. Con 300 SMS/mes (10 SMS/día) ≈ 20€/mes. Con 150 SMS/mes ≈ 10€/mes.

---

## 7. FORMA DE PAGO PROPUESTA

### Opción A: 3 Pagos
- **40% inicio** (6.200€) - Al firmar contrato y arrancar proyecto
- **40% mitad** (6.200€) - Al completar Fases 1-4 (funcionalidad core)
- **20% entrega** (3.100€) - Al deployment en producción

### Opción B: 4 Pagos
- **25% inicio** (3.875€) - Al firmar contrato
- **25% milestone 1** (3.875€) - CRM + Clientes completo
- **25% milestone 2** (3.875€) - Calendario + Recordatorios completo
- **25% entrega** (3.875€) - Deployment y formación

---

## 8. TIMELINE ESTIMADO

Considerando dedicación parcial (20-25h/semana):

| Fase | Duración | Acumulado |
|------|----------|-----------|
| Setup y Configuración | 1 semana | Semana 1 |
| CRM y Clientes | 2 semanas | Semana 3 |
| Calendario y Eventos | 1.5 semanas | Semana 4.5 |
| Recordatorios y Automatizaciones | 2 semanas | Semana 6.5 |
| Dashboard y Reportes | 1 semana | Semana 7.5 |
| UI/UX Profesional | 1.5 semanas | Semana 9 |
| Testing y Deployment | 2 semanas | Semana 11 |

**Duración total estimada:** 10-12 semanas (2.5-3 meses)

---

## 9. ENTREGABLES

- ✅ Código fuente completo (repositorio Git)
- ✅ Sistema desplegado en producción (VPS Hostinger)
- ✅ Documentación técnica
- ✅ Manual de usuario básico
- ✅ 1 sesión de formación (4 horas)
- ✅ Garantía de 3 meses (corrección bugs)
- ✅ 2 revisiones de funcionalidad incluidas

---

## 10. CONDICIONES Y EXCLUSIONES

### Incluido
- Todo lo descrito en el apartado "Desglose de Desarrollo"
- Setup infraestructura inicial
- Garantía 3 meses post-lanzamiento

### NO Incluido
- Módulo de facturación (se usa Holded)
- Módulo de presupuestos complejos (fase 2)
- Integración con Bodas.net (fase 2)
- Integración WhatsApp Business API (fase 2)
- Mantenimiento más allá de 3 meses
- Cambios de alcance no contemplados

### Funcionalidades Fase 2 (Futuras)
- Sistema de presupuestos personalizados
- Integración Holded para sincronizar facturas
- Integración Bodas.net para leads
- WhatsApp Business API
- Sistema de tareas del equipo
- Gestión de proveedores

**Coste estimado Fase 2:** 6.000-8.000€ adicionales

---

## 11. COMPARATIVA DE ALTERNATIVAS

### Opción 1: Software SaaS existente (Honeybook, Dubsado, etc.)
- **Coste:** 40-100€/mes (~480-1.200€/año)
- **Pros:** Listo para usar, sin desarrollo
- **Contras:** No personalizable, limitado, cuota mensual perpetua, en inglés

### Opción 2: Sistema a medida (Esta propuesta)
- **Coste:** 14.500€ + ~156€/año infraestructura
- **Pros:** 100% personalizado, escalable, en español, sin cuotas de software
- **Contras:** Inversión inicial mayor

**ROI:** En 12-15 meses la inversión se amortiza vs SaaS premium.

---

## 12. GARANTÍAS Y SOPORTE

### Garantía Post-Lanzamiento (3 meses)
- Corrección de bugs sin coste
- Soporte técnico por email/chat
- 2 revisiones de funcionalidad incluidas

### Soporte Post-Garantía (Opcional)
- **Plan Básico:** 75€/mes (6h soporte/mes, corrección bugs críticos)
- **Plan Estándar:** 150€/mes (12h soporte/mes, pequeñas mejoras)
- **Plan Premium:** 300€/mes (25h soporte/mes, nuevas funcionalidades)

---

## RESUMEN RECOMENDACIÓN

**Propuesta final:**
- **Precio desarrollo:** 15.500€ (precio cerrado, incluye integración SMS)
- **Infraestructura año 1:** 276-396€ (Free Tier + Twilio SMS, escalable)
- **Timeline:** 10-12 semanas
- **Pago:** 40% - 40% - 20%
- **Garantía:** 3 meses incluidos

**Total inversión primer año:** **15.776-15.896€**

Esta propuesta ofrece un sistema completamente funcional, escalable y personalizado que cubrirá las necesidades operativas de Xocolat Events con una inversión controlada y un ROI claro.

---

**Validez de la oferta:** 30 días desde la fecha de emisión.

Para cualquier duda o ajuste de la propuesta, quedo a tu disposición.
