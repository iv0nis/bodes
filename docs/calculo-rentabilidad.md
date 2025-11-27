# Cálculo de Rentabilidad - Modelo Suscripción
## Propuesta: 1.000€ inicial + 125-150€/mes

**Fecha:** 27 de noviembre de 2025
**Proyecto:** Cerimonies - Xocolat Events

---

## 💰 PROPUESTA DE PRECIO

### Opción A: Cuota 125€/mes
- **Pago inicial:** 1.000€
- **Cuota mensual:** 125€/mes
- **Permanencia:** 18 meses

### Opción B: Cuota 150€/mes
- **Pago inicial:** 1.000€
- **Cuota mensual:** 150€/mes
- **Permanencia:** 18 meses

---

## 📊 INGRESOS TOTALES

### Opción A (125€/mes)
| Concepto | Cantidad |
|----------|----------|
| Pago inicial | 1.000€ |
| 18 meses × 125€ | 2.250€ |
| **TOTAL 18 MESES** | **3.250€** |

### Opción B (150€/mes)
| Concepto | Cantidad |
|----------|----------|
| Pago inicial | 1.000€ |
| 18 meses × 150€ | 2.700€ |
| **TOTAL 18 MESES** | **3.700€** |

---

## 💸 COSTES DE INFRAESTRUCTURA

### Costes Mensuales (Cliente ya paga Mailchimp)

| Servicio | Coste/mes | Descripción |
|----------|-----------|-------------|
| VPS Hostinger (4GB RAM) | 12€ | Servidor para app dockerizada |
| Supabase Free | 0€ | 500MB DB, 50K usuarios/mes (suficiente inicio) |
| Twilio SMS | ~10-20€ | Estimado uso moderado (~150 SMS/mes) |
| Dominio | 1€ | ~12€/año |
| **TOTAL MENSUAL** | **~23-33€/mes** | |

**Coste infraestructura 18 meses:** 414€ - 594€

### Alternativa con Supabase Pro (si necesita escalar)

| Servicio | Coste/mes |
|----------|-----------|
| VPS Hostinger | 12€ |
| Supabase Pro | 23€ (~25$/mes) |
| Twilio SMS | ~10-20€ |
| Dominio | 1€ |
| **TOTAL MENSUAL** | **~46-56€/mes** |

**Coste infraestructura 18 meses:** 828€ - 1.008€

---

## 📈 RENTABILIDAD DETALLADA

### ESCENARIO 1: Cuota 125€/mes + Infraestructura Free Tier

#### Ingresos 18 meses
- Pago inicial: 1.000€
- Cuotas mensuales: 2.250€ (125€ × 18)
- **Total ingresos:** 3.250€

#### Costes 18 meses
- Infraestructura: ~500€ (promedio 28€/mes × 18)
- **Total costes:** 500€

#### Beneficio Neto 18 meses
**3.250€ - 500€ = 2.750€**

#### Desglose Mensual (después del desarrollo)
- **Ingresos mensuales:** 125€
- **Costes mensuales:** ~28€
- **BENEFICIO MENSUAL:** **97€/mes**
- **Margen:** 77.6%

#### Desglose Anual (año completo)
- **Ingresos anuales:** 1.500€ (125€ × 12)
- **Costes anuales:** 336€ (28€ × 12)
- **BENEFICIO ANUAL:** **1.164€**

---

### ESCENARIO 2: Cuota 150€/mes + Infraestructura Free Tier

#### Ingresos 18 meses
- Pago inicial: 1.000€
- Cuotas mensuales: 2.700€ (150€ × 18)
- **Total ingresos:** 3.700€

#### Costes 18 meses
- Infraestructura: ~500€ (promedio 28€/mes × 18)
- **Total costes:** 500€

#### Beneficio Neto 18 meses
**3.700€ - 500€ = 3.200€**

#### Desglose Mensual (después del desarrollo)
- **Ingresos mensuales:** 150€
- **Costes mensuales:** ~28€
- **BENEFICIO MENSUAL:** **122€/mes**
- **Margen:** 81.3%

#### Desglose Anual (año completo)
- **Ingresos anuales:** 1.800€ (150€ × 12)
- **Costes anuales:** 336€ (28€ × 12)
- **BENEFICIO ANUAL:** **1.464€**

---

### ESCENARIO 3: Cuota 125€/mes + Infraestructura Pro (Supabase Pro)

#### Ingresos 18 meses
- Total ingresos: 3.250€

#### Costes 18 meses
- Infraestructura: ~900€ (promedio 50€/mes × 18)
- **Total costes:** 900€

#### Beneficio Neto 18 meses
**3.250€ - 900€ = 2.350€**

#### Desglose Mensual
- **Ingresos mensuales:** 125€
- **Costes mensuales:** ~50€
- **BENEFICIO MENSUAL:** **75€/mes**
- **Margen:** 60%

#### Desglose Anual
- **Ingresos anuales:** 1.500€
- **Costes anuales:** 600€
- **BENEFICIO ANUAL:** **900€**

---

### ESCENARIO 4: Cuota 150€/mes + Infraestructura Pro (Supabase Pro)

#### Ingresos 18 meses
- Total ingresos: 3.700€

#### Costes 18 meses
- Infraestructura: ~900€ (promedio 50€/mes × 18)
- **Total costes:** 900€

#### Beneficio Neto 18 meses
**3.700€ - 900€ = 2.800€**

#### Desglose Mensual
- **Ingresos mensuales:** 150€
- **Costes mensuales:** ~50€
- **BENEFICIO MENSUAL:** **100€/mes**
- **Margen:** 66.6%

#### Desglose Anual
- **Ingresos anuales:** 1.800€
- **Costes anuales:** 600€
- **BENEFICIO ANUAL:** 1.200€**

---

## 📊 RESUMEN COMPARATIVO

### Beneficio Mensual (después del desarrollo)

| Opción | Infraestructura | Ingreso/mes | Coste/mes | Beneficio/mes | Margen |
|--------|-----------------|-------------|-----------|---------------|--------|
| **125€ + Free** | Básica | 125€ | 28€ | **97€** | 77.6% |
| **150€ + Free** | Básica | 150€ | 28€ | **122€** | 81.3% |
| **125€ + Pro** | Premium | 125€ | 50€ | **75€** | 60% |
| **150€ + Pro** | Premium | 150€ | 50€ | **100€** | 66.6% |

### Beneficio Anual (12 meses completos)

| Opción | Ingreso/año | Coste/año | Beneficio/año |
|--------|-------------|-----------|---------------|
| **125€ + Free** | 1.500€ | 336€ | **1.164€** |
| **150€ + Free** | 1.800€ | 336€ | **1.464€** |
| **125€ + Pro** | 1.500€ | 600€ | **900€** |
| **150€ + Pro** | 1.800€ | 600€ | **1.200€** |

### Beneficio Total 18 Meses (incluyendo pago inicial)

| Opción | Total Ingresos | Total Costes | Beneficio 18m |
|--------|----------------|--------------|---------------|
| **125€ + Free** | 3.250€ | 500€ | **2.750€** |
| **150€ + Free** | 3.700€ | 500€ | **3.200€** |
| **125€ + Pro** | 3.250€ | 900€ | **2.350€** |
| **150€ + Pro** | 3.700€ | 900€ | **2.800€** |

---

## ⚠️ IMPORTANTE: Coste de Desarrollo NO Incluido

**Estas cifras NO incluyen el coste del desarrollo inicial (275h).**

El desarrollo tiene un coste de oportunidad de:
- **275 horas × 50€/h = 13.750€** (si cobras 50€/h normalmente)
- **275 horas × 40€/h = 11.000€** (si valoramos más bajo)

### Análisis Real de Rentabilidad

Con cuota de **150€/mes** (opción más rentable):

#### Primeros 18 meses:
- Ingresos totales: 3.700€
- Costes infraestructura: 500€
- **Beneficio neto:** 2.750€

**Pero si valoras tu tiempo de desarrollo a 40€/h:**
- Coste desarrollo: 11.000€
- Beneficio: 2.750€
- **Pérdida real primeros 18 meses:** -8.250€

### ¿Cuándo se recupera la inversión?

Si el cliente **renueva después de los 18 meses:**

**Opción 150€/mes + Free Tier:**
- Beneficio mensual: 122€/mes
- Meses para recuperar 11.000€ de desarrollo: **90 meses (~7.5 años)**

**Con 5 clientes simultáneos:**
- Beneficio mensual total: 610€/mes (122€ × 5)
- Meses para recuperar inversión de 1 cliente: **18 meses**

---

## 🎯 ESTRATEGIA RECOMENDADA

### Opción 1: Modelo Mixto (RECOMENDADO)

**Cobrar más realista para cubrir desarrollo:**

- **Pago inicial:** 5.000€ (cubre parte del desarrollo)
- **Cuota mensual:** 150€/mes
- **Permanencia:** 18 meses

**Rentabilidad:**
- Ingresos 18 meses: 5.000€ + 2.700€ = **7.700€**
- Costes infraestructura: 500€
- **Beneficio neto:** 7.200€
- **Tiempo para recuperar inversión desarrollo:** ~18 meses (más realista)

### Opción 2: Solo para Múltiples Clientes

**Mantener 1.000€ + 150€/mes SOLO si consigues varios clientes a la vez:**

- Con **3 clientes:**
  - Ingresos mensuales totales: 450€/mes
  - Costes totales: 84€/mes
  - **Beneficio: 366€/mes** (1 cliente paga infra de los 3)

- Con **5 clientes:**
  - Ingresos mensuales totales: 750€/mes
  - Costes totales: 140€/mes
  - **Beneficio: 610€/mes**
  - **Beneficio anual: 7.320€**

### Opción 3: Sistema Template Reutilizable

**Desarrollar UNA vez, vender a múltiples clientes:**

1. Desarrollas el sistema base (275h = inversión única)
2. Por cada nuevo cliente:
   - Personalización: 20-30h
   - Pago inicial: 1.000€
   - Cuota: 150€/mes

**Rentabilidad por cliente (después del primero):**
- Ingresos 18 meses: 3.700€
- Costes infra: 500€
- Costes personalización: 1.000€ (25h × 40€)
- **Beneficio neto por cliente:** 2.200€

---

## 💡 RECOMENDACIÓN FINAL

### Para 1 Solo Cliente: NO RENTABLE
Con 1.000€ + 150€/mes y 1 solo cliente, **tardas 7.5 años en recuperar** el coste del desarrollo.

### Para Múltiples Clientes: RENTABLE
Si consigues **3-5 clientes con el mismo sistema:**
- Cliente 1: -8.250€ (pérdida por desarrollo)
- Cliente 2: +2.200€ (solo personalización)
- Cliente 3: +2.200€
- Cliente 4: +2.200€
- Cliente 5: +2.200€
- **Total 5 clientes:** +650€ en 18 meses

**Beneficio mensual recurrente con 5 clientes:** 610€/mes

### Propuesta Alternativa Realista

Para que sea rentable con Xocolat Events como cliente único:

**Opción A: Subir pago inicial**
- Pago inicial: **8.000€**
- Cuota mensual: 150€/mes (18 meses)
- Total 18 meses: 10.700€
- Beneficio neto: 10.200€ (cubre casi el desarrollo)

**Opción B: Subir cuota mensual**
- Pago inicial: 1.000€
- Cuota mensual: **600€/mes** (18 meses)
- Total 18 meses: 11.800€
- Beneficio neto: 11.300€ (cubre el desarrollo)

**Opción C: Mantener precio bajo + vender más clientes**
- 1.000€ + 150€/mes
- Buscar 3-5 clientes más del sector eventos/bodas
- Usar el código base ya desarrollado
- Rentabilidad con economía de escala

---

## 📋 TABLA RESUMEN MENSUAL Y ANUAL

### Con 1.000€ inicial + 150€/mes + Free Tier

| Período | Ingresos | Costes Infra | Beneficio Neto |
|---------|----------|--------------|----------------|
| **Mes 1** | 1.000€ (inicial) | 28€ | 972€ |
| **Mes 2-18** (cada mes) | 150€ | 28€ | **122€/mes** |
| **Total Mes 2-18** | 2.550€ | 476€ | 2.074€ |
| **Total 18 meses** | 3.700€ | 504€ | **3.196€** |
| | | | |
| **Año 1 (meses 1-12)** | 2.800€ | 336€ | **2.464€** |
| **Año 2 (meses 13-24)** | 1.800€ | 336€ | **1.464€** |
| **Año 3 (meses 25-36)** | 1.800€ | 336€ | **1.464€** |

**IMPORTANTE:** Estos beneficios NO cubren el coste del desarrollo inicial.

---

## ✅ CONCLUSIÓN

### Beneficio MENSUAL (después desarrollo):
- **Con 125€/mes:** 97€/mes (margen 77%)
- **Con 150€/mes:** 122€/mes (margen 81%)

### Beneficio ANUAL (después desarrollo):
- **Con 125€/mes:** 1.164€/año
- **Con 150€/mes:** 1.464€/año

### Beneficio 18 MESES (total):
- **Con 125€/mes:** 2.750€
- **Con 150€/mes:** 3.200€

**⚠️ ADVERTENCIA:** Esto NO cubre el desarrollo (11.000-13.750€). Solo es rentable si:
1. Consigues 3-5 clientes con el mismo sistema
2. Subes significativamente el pago inicial o la cuota
3. Lo ves como inversión a largo plazo (7+ años con 1 cliente)
