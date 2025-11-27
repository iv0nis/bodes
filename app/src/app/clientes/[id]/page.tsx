import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { clientesDemo, eventosDemo } from '@/data/clientes-demo';
import Link from 'next/link';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClienteDetallePage({ params }: Props) {
  const { id } = await params;
  const cliente = clientesDemo.find(c => c.id === id);

  if (!cliente) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Cliente no encontrado</h2>
          <Link href="/clientes">
            <Button className="mt-4">Volver a clientes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const eventosCliente = eventosDemo.filter(e => e.clienteId === cliente.id);

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

  const generarMensajeWhatsApp = (tipo: 'saludo' | 'resena') => {
    const telefono = cliente.telefono.replace(/\s/g, '');
    let mensaje = '';

    if (tipo === 'saludo') {
      mensaje = `Hola ${cliente.nombre}! Soy de Xocolat Events. ¿Cómo estás? Me gustaría hablar contigo sobre tu evento.`;
    } else {
      mensaje = `Hola ${cliente.nombre}! Esperamos que tu experiencia con Xocolat Events haya sido increíble. Nos encantaría que compartieras tu opinión en Bodas.net: [LINK]. ¡Muchas gracias! 💒`;
    }

    return `https://wa.me/34${telefono}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="space-y-6">
      {/* Navegación */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/clientes" className="hover:text-slate-900">Clientes</Link>
        <span>/</span>
        <span className="text-slate-900">{cliente.nombre} {cliente.apellidos}</span>
      </div>

      {/* Cabecera del cliente */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-3xl font-bold">
            {cliente.nombre[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {cliente.nombre} {cliente.apellidos}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <Badge className={getEstadoColor(cliente.estado)}>
                {cliente.estado}
              </Badge>
              <span className="text-slate-500">{cliente.tipoEvento}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Origen: {cliente.origen}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <a href={generarMensajeWhatsApp('saludo')} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              💬 WhatsApp
            </Button>
          </a>
          <Button variant="outline" className="gap-2">
            📧 Email
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900">
            Editar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna principal */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="info" className="w-full">
            <TabsList>
              <TabsTrigger value="info">Información</TabsTrigger>
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
              <TabsTrigger value="historial">Historial</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Datos del Cliente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-500">Email</label>
                      <p className="font-medium">{cliente.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Teléfono</label>
                      <p className="font-medium">{cliente.telefono}</p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Fecha de nacimiento</label>
                      <p className="font-medium">
                        {cliente.fechaNacimiento
                          ? new Date(cliente.fechaNacimiento).toLocaleDateString('es-ES')
                          : '-'}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-slate-500">Ubicación evento</label>
                      <p className="font-medium">{cliente.ubicacion || 'Por definir'}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <label className="text-sm text-slate-500">Notas</label>
                    <p className="mt-1 p-3 bg-slate-50 rounded-lg text-sm">
                      {cliente.notas || 'Sin notas'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="eventos" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Eventos y Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  {eventosCliente.length > 0 ? (
                    <div className="space-y-3">
                      {eventosCliente.map(evento => (
                        <div key={evento.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <div className="text-2xl">
                            {evento.tipo === 'boda' ? '💒' : evento.tipo === 'reunion' ? '📋' : '📅'}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{evento.titulo}</p>
                            <p className="text-sm text-slate-500">
                              {new Date(evento.fecha).toLocaleDateString('es-ES', {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                              {evento.hora && ` a las ${evento.hora}`}
                            </p>
                            {evento.descripcion && (
                              <p className="text-xs text-slate-400 mt-1">{evento.descripcion}</p>
                            )}
                          </div>
                          <Badge variant="outline">{evento.tipo}</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center py-8">No hay eventos programados</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historial" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Actividad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Historial demo */}
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
                      <div>
                        <p className="text-sm font-medium">Estado cambiado a {cliente.estado}</p>
                        <p className="text-xs text-slate-500">Hace 2 días</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm font-medium">Reunión programada</p>
                        <p className="text-xs text-slate-500">Hace 5 días</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                      <div>
                        <p className="text-sm font-medium">Presupuesto enviado</p>
                        <p className="text-xs text-slate-500">Hace 1 semana</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-slate-300"></div>
                      <div>
                        <p className="text-sm font-medium">Cliente creado desde {cliente.origen}</p>
                        <p className="text-xs text-slate-500">Hace 2 semanas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Columna lateral */}
        <div className="space-y-6">
          {/* Fecha del evento */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader className="pb-2">
              <CardDescription>Fecha del Evento</CardDescription>
              <CardTitle className="text-2xl">
                {new Date(cliente.fechaBoda).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-700">
                {Math.ceil((new Date(cliente.fechaBoda).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días restantes
              </p>
            </CardContent>
          </Card>

          {/* Presupuesto */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Presupuesto</CardDescription>
              <CardTitle className="text-3xl">
                {cliente.presupuesto
                  ? `${cliente.presupuesto.toLocaleString('es-ES')}€`
                  : 'Sin definir'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Ver presupuesto
              </Button>
            </CardContent>
          </Card>

          {/* Acciones rápidas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href={generarMensajeWhatsApp('resena')}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-start gap-2">
                  ⭐ Pedir reseña
                </Button>
              </a>
              <Button variant="outline" className="w-full justify-start gap-2">
                📅 Programar reunión
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                📄 Crear presupuesto
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                🎂 Enviar felicitación
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
