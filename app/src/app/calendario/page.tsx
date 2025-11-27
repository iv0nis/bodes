'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { eventosDemo, clientesDemo } from '@/data/clientes-demo';
import Link from 'next/link';

export default function CalendarioPage() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | undefined>(new Date());
  const [mesActual, setMesActual] = useState(new Date());

  // Obtener eventos del mes actual
  const eventosDelMes = eventosDemo.filter(evento => {
    const fechaEvento = new Date(evento.fecha);
    return (
      fechaEvento.getMonth() === mesActual.getMonth() &&
      fechaEvento.getFullYear() === mesActual.getFullYear()
    );
  });

  // Eventos de la fecha seleccionada
  const eventosDelDia = fechaSeleccionada
    ? eventosDemo.filter(evento => {
        const fechaEvento = new Date(evento.fecha);
        return (
          fechaEvento.toDateString() === fechaSeleccionada.toDateString()
        );
      })
    : [];

  // Fechas con eventos para marcar en el calendario
  const fechasConEventos = eventosDemo.map(e => new Date(e.fecha));

  const getTipoEventoIcon = (tipo: string) => {
    const iconos: Record<string, string> = {
      boda: '💒',
      reunion: '📋',
      cita: '🤝',
      aniversario: '💝',
      cumpleanos: '🎂',
    };
    return iconos[tipo] || '📅';
  };

  const getTipoEventoColor = (tipo: string) => {
    const colores: Record<string, string> = {
      boda: 'bg-pink-100 text-pink-800 border-pink-200',
      reunion: 'bg-blue-100 text-blue-800 border-blue-200',
      cita: 'bg-green-100 text-green-800 border-green-200',
      aniversario: 'bg-purple-100 text-purple-800 border-purple-200',
      cumpleanos: 'bg-amber-100 text-amber-800 border-amber-200',
    };
    return colores[tipo] || 'bg-slate-100 text-slate-800';
  };

  // Agrupar eventos por tipo para el resumen
  const resumenEventos = {
    bodas: eventosDelMes.filter(e => e.tipo === 'boda').length,
    reuniones: eventosDelMes.filter(e => e.tipo === 'reunion').length,
    otros: eventosDelMes.filter(e => !['boda', 'reunion'].includes(e.tipo)).length,
  };

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Calendario</h1>
          <p className="text-slate-500 mt-1">Gestiona tus eventos y citas</p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900">
          + Nuevo Evento
        </Button>
      </div>

      {/* Resumen del mes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💒</span>
              <div>
                <p className="text-2xl font-bold">{resumenEventos.bodas}</p>
                <p className="text-sm text-slate-500">Bodas este mes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📋</span>
              <div>
                <p className="text-2xl font-bold">{resumenEventos.reuniones}</p>
                <p className="text-sm text-slate-500">Reuniones</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📅</span>
              <div>
                <p className="text-2xl font-bold">{resumenEventos.otros}</p>
                <p className="text-sm text-slate-500">Otros eventos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendario */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {mesActual.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={fechaSeleccionada}
              onSelect={setFechaSeleccionada}
              onMonthChange={setMesActual}
              className="rounded-md border w-full"
              modifiers={{
                hasEvent: fechasConEventos,
              }}
              modifiersClassNames={{
                hasEvent: 'bg-amber-100 font-bold text-amber-900',
              }}
            />

            {/* Leyenda */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1">
                <span>💒</span> Boda
              </div>
              <div className="flex items-center gap-1">
                <span>📋</span> Reunión
              </div>
              <div className="flex items-center gap-1">
                <span>💝</span> Aniversario
              </div>
              <div className="flex items-center gap-1">
                <span>🎂</span> Cumpleaños
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Panel lateral - Eventos del día */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {fechaSeleccionada
                  ? fechaSeleccionada.toLocaleDateString('es-ES', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long'
                    })
                  : 'Selecciona una fecha'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {eventosDelDia.length > 0 ? (
                <div className="space-y-3">
                  {eventosDelDia.map(evento => {
                    const cliente = clientesDemo.find(c => c.id === evento.clienteId);
                    return (
                      <div
                        key={evento.id}
                        className={`p-3 rounded-lg border ${getTipoEventoColor(evento.tipo)}`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-xl">{getTipoEventoIcon(evento.tipo)}</span>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{evento.titulo}</p>
                            {evento.hora && (
                              <p className="text-xs opacity-75">{evento.hora}</p>
                            )}
                            {evento.descripcion && (
                              <p className="text-xs mt-1 opacity-75">{evento.descripcion}</p>
                            )}
                            {cliente && (
                              <Link href={`/clientes/${cliente.id}`}>
                                <p className="text-xs mt-2 underline">
                                  Ver cliente →
                                </p>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-sm text-center py-4">
                  No hay eventos para este día
                </p>
              )}
            </CardContent>
          </Card>

          {/* Próximos eventos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {eventosDemo
                  .filter(e => new Date(e.fecha) >= new Date())
                  .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
                  .slice(0, 5)
                  .map(evento => (
                    <div key={evento.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded">
                      <span>{getTipoEventoIcon(evento.tipo)}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{evento.titulo}</p>
                        <p className="text-xs text-slate-500">
                          {new Date(evento.fecha).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {evento.tipo}
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
