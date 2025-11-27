'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { alertasDemo } from '@/data/clientes-demo';

export function Header() {
  const alertasActivas = alertasDemo.filter(a => a.prioridad === 'alta').length;

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      {/* Búsqueda */}
      <div className="flex-1 max-w-md">
        <Input
          type="search"
          placeholder="Buscar clientes, eventos..."
          className="w-full"
        />
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <Button variant="ghost" size="icon" className="relative">
          <span className="text-xl">🔔</span>
          {alertasActivas > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {alertasActivas}
            </span>
          )}
        </Button>

        {/* Nuevo cliente */}
        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900">
          + Nuevo Cliente
        </Button>
      </div>
    </header>
  );
}
