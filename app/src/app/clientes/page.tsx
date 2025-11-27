'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { clientesDemo, Cliente } from '@/data/clientes-demo';

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');

  const clientesFiltrados = clientesDemo.filter(cliente => {
    const coincideBusqueda =
      cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.email.toLowerCase().includes(busqueda.toLowerCase());

    const coincideEstado = filtroEstado === 'todos' || cliente.estado === filtroEstado;

    return coincideBusqueda && coincideEstado;
  });

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

  const getOrigenIcon = (origen: string) => {
    const iconos: Record<string, string> = {
      'web': '🌐',
      'bodas.net': '💒',
      'whatsapp': '💬',
      'referido': '👥',
      'instagram': '📸',
    };
    return iconos[origen] || '📋';
  };

  const estados = ['todos', 'lead', 'contactado', 'presupuestado', 'confirmado', 'realizado'];

  // Contadores por estado
  const contadores = {
    todos: clientesDemo.length,
    lead: clientesDemo.filter(c => c.estado === 'lead').length,
    contactado: clientesDemo.filter(c => c.estado === 'contactado').length,
    presupuestado: clientesDemo.filter(c => c.estado === 'presupuestado').length,
    confirmado: clientesDemo.filter(c => c.estado === 'confirmado').length,
    realizado: clientesDemo.filter(c => c.estado === 'realizado').length,
  };

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Clientes</h1>
          <p className="text-slate-500 mt-1">Gestiona tu cartera de clientes</p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900">
          + Nuevo Cliente
        </Button>
      </div>

      {/* Filtros rápidos por estado */}
      <div className="flex gap-2 flex-wrap">
        {estados.map(estado => (
          <Button
            key={estado}
            variant={filtroEstado === estado ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFiltroEstado(estado)}
            className={filtroEstado === estado ? 'bg-amber-500 hover:bg-amber-600 text-slate-900' : ''}
          >
            {estado.charAt(0).toUpperCase() + estado.slice(1)}
            <span className="ml-2 bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-xs">
              {contadores[estado as keyof typeof contadores]}
            </span>
          </Button>
        ))}
      </div>

      {/* Buscador */}
      <Card>
        <CardContent className="pt-6">
          <Input
            type="search"
            placeholder="Buscar por nombre, apellidos o email..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Tabla de clientes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {clientesFiltrados.length} cliente{clientesFiltrados.length !== 1 ? 's' : ''} encontrado{clientesFiltrados.length !== 1 ? 's' : ''}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Fecha Evento</TableHead>
                <TableHead>Origen</TableHead>
                <TableHead>Presupuesto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientesFiltrados.map(cliente => (
                <TableRow key={cliente.id} className="hover:bg-slate-50">
                  <TableCell>
                    <Link href={`/clientes/${cliente.id}`} className="hover:underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-medium">
                          {cliente.nombre[0]}
                        </div>
                        <div>
                          <p className="font-medium">{cliente.nombre} {cliente.apellidos}</p>
                          <p className="text-xs text-slate-500">{cliente.tipoEvento}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{cliente.telefono}</p>
                      <p className="text-slate-500 text-xs">{cliente.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(cliente.fechaBoda).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{getOrigenIcon(cliente.origen)}</span>
                      <span className="text-sm text-slate-600">{cliente.origen}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {cliente.presupuesto ? (
                      <span className="font-medium">
                        {cliente.presupuesto.toLocaleString('es-ES')}€
                      </span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getEstadoColor(cliente.estado)}>
                      {cliente.estado}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" title="WhatsApp">
                        💬
                      </Button>
                      <Button variant="ghost" size="sm" title="Email">
                        📧
                      </Button>
                      <Link href={`/clientes/${cliente.id}`}>
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
