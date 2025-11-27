import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { clientesDemo, eventosDemo, alertasDemo, estadisticasDemo } from '@/data/clientes-demo';
import Link from 'next/link';

export default function Dashboard() {
  // Próximos eventos (próximos 30 días desde hoy demo)
  const proximosEventos = eventosDemo
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
    .slice(0, 5);

  // Clientes recientes
  const clientesRecientes = clientesDemo.slice(0, 4);

  const getEstadoColor = (estado: string) => {
    const colores: Record<string, string> = {
      lead: 'bg-blue-100 text-blue-800',
      contactado: 'bg-yellow-100 text-yellow-800',
      presupuestado: 'bg-purple-100 text-purple-800',
      confirmado: 'bg-green-100 text-green-800',
      realizado: 'bg-slate-100 text-slate-800',
    };
    return colores[estado] || 'bg-slate-100 text-slate-800';
  };

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

  const getPrioridadColor = (prioridad: string) => {
    const colores: Record<string, string> = {
      alta: 'border-l-red-500 bg-red-50',
      media: 'border-l-yellow-500 bg-yellow-50',
      baja: 'border-l-blue-500 bg-blue-50',
    };
    return colores[prioridad] || 'border-l-slate-500';
  };

  return (
    <div className="space-y-6">
      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Resumen de actividad - Xocolat Events</p>
      </div>

      {/* Alertas activas */}
      {alertasDemo.filter(a => a.prioridad === 'alta').length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <span>🔔</span> Alertas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alertasDemo.filter(a => a.prioridad === 'alta').map(alerta => (
              <div key={alerta.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-100">
                <span className="text-sm">{alerta.mensaje}</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Ver
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Clientes</CardDescription>
            <CardTitle className="text-4xl">{estadisticasDemo.totalClientes}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">
              <span className="text-green-600 font-medium">+2</span> este mes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Bodas Confirmadas</CardDescription>
            <CardTitle className="text-4xl text-green-600">{estadisticasDemo.bodasConfirmadas}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">
              Próxima: {estadisticasDemo.proximaBoda.fecha}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Presupuestos Pendientes</CardDescription>
            <CardTitle className="text-4xl text-amber-600">{estadisticasDemo.bodasPendientes}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">
              Por confirmar
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Facturación Estimada</CardDescription>
            <CardTitle className="text-4xl">{(estadisticasDemo.presupuestoTotal / 1000).toFixed(1)}k€</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">
              Presupuestos 2025
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contenido en 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Próximos eventos */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Próximos Eventos</CardTitle>
              <Link href="/calendario">
                <Button variant="ghost" size="sm">Ver calendario →</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {proximosEventos.map(evento => (
                <div key={evento.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-2xl">{getTipoEventoIcon(evento.tipo)}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{evento.titulo}</p>
                    <p className="text-xs text-slate-500">
                      {new Date(evento.fecha).toLocaleDateString('es-ES', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                      })}
                      {evento.hora && ` · ${evento.hora}`}
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

        {/* Clientes recientes */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Clientes Recientes</CardTitle>
              <Link href="/clientes">
                <Button variant="ghost" size="sm">Ver todos →</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {clientesRecientes.map(cliente => (
                <Link key={cliente.id} href={`/clientes/${cliente.id}`}>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-medium">
                      {cliente.nombre[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{cliente.nombre} {cliente.apellidos}</p>
                      <p className="text-xs text-slate-500">
                        Boda: {new Date(cliente.fechaBoda).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                    <Badge className={getEstadoColor(cliente.estado)}>
                      {cliente.estado}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recordatorios pendientes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recordatorios y Tareas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {alertasDemo.map(alerta => {
              const cliente = clientesDemo.find(c => c.id === alerta.clienteId);
              return (
                <div
                  key={alerta.id}
                  className={`p-4 rounded-lg border-l-4 ${getPrioridadColor(alerta.prioridad)}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium">{alerta.mensaje}</p>
                      {cliente && (
                        <p className="text-xs text-slate-500 mt-1">
                          {cliente.nombre} {cliente.apellidos}
                        </p>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {alerta.tipo}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
