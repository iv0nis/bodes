'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navegacion = [
  { nombre: 'Dashboard', href: '/', icono: '📊' },
  { nombre: 'Clientes', href: '/clientes', icono: '👥' },
  { nombre: 'Calendario', href: '/calendario', icono: '📅' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700 bg-white/95 rounded-lg mx-3 mt-3">
        <Image
          src="/xocolat-logo.png"
          alt="Xocolat Events"
          width={200}
          height={80}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navegacion.map((item) => {
            const activo = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    activo
                      ? 'bg-amber-500 text-slate-900 font-medium'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  <span className="text-xl">{item.icono}</span>
                  <span>{item.nombre}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
            X
          </div>
          <div>
            <p className="text-sm font-medium">Xocolat Events</p>
            <p className="text-xs text-slate-400">Mataró, Barcelona</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
