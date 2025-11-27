// Datos de demostración para el MVP visual

export interface Cliente {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
  fechaBoda: string;
  tipoEvento: 'boda' | 'corporativo' | 'catering' | 'otro';
  estado: 'lead' | 'contactado' | 'presupuestado' | 'confirmado' | 'realizado';
  origen: 'web' | 'bodas.net' | 'whatsapp' | 'referido' | 'instagram';
  notas: string;
  presupuesto?: number;
  ubicacion?: string;
}

export interface Evento {
  id: string;
  clienteId: string;
  tipo: 'boda' | 'reunion' | 'cita' | 'aniversario' | 'cumpleanos';
  titulo: string;
  fecha: string;
  hora?: string;
  descripcion?: string;
}

export const clientesDemo: Cliente[] = [
  {
    id: '1',
    nombre: 'María',
    apellidos: 'García López',
    email: 'maria.garcia@email.com',
    telefono: '612 345 678',
    fechaNacimiento: '1995-03-15',
    fechaBoda: '2025-06-21',
    tipoEvento: 'boda',
    estado: 'confirmado',
    origen: 'bodas.net',
    notas: 'Ceremonia civil en Mas Can Riera. 120 invitados. Quiere decoración romántica con flores blancas.',
    presupuesto: 18500,
    ubicacion: 'Mas Can Riera, Mataró'
  },
  {
    id: '2',
    nombre: 'Carlos',
    apellidos: 'Martínez Ruiz',
    email: 'carlos.mr@gmail.com',
    telefono: '634 567 890',
    fechaNacimiento: '1992-07-22',
    fechaBoda: '2025-09-13',
    tipoEvento: 'boda',
    estado: 'presupuestado',
    origen: 'instagram',
    notas: 'Boda íntima, solo 50 personas. Interesado en menú degustación.',
    presupuesto: 12000,
    ubicacion: 'Pendiente confirmar'
  },
  {
    id: '3',
    nombre: 'Laura',
    apellidos: 'Sánchez Pérez',
    email: 'laura.sanchez@empresa.com',
    telefono: '655 123 456',
    fechaNacimiento: '1988-11-30',
    fechaBoda: '2025-05-10',
    tipoEvento: 'boda',
    estado: 'confirmado',
    origen: 'referido',
    notas: 'Referida por María García. Quiere algo similar pero más moderno.',
    presupuesto: 22000,
    ubicacion: 'Can Marlet, Montseny'
  },
  {
    id: '4',
    nombre: 'Andrea',
    apellidos: 'Fernández Torres',
    email: 'andrea.ft@hotmail.com',
    telefono: '678 901 234',
    fechaNacimiento: '1990-05-08',
    fechaBoda: '2025-07-05',
    tipoEvento: 'boda',
    estado: 'contactado',
    origen: 'whatsapp',
    notas: 'Primer contacto por WhatsApp. Pendiente reunión inicial.',
    ubicacion: 'Por definir'
  },
  {
    id: '5',
    nombre: 'Paula',
    apellidos: 'Rodríguez Vidal',
    email: 'paula.rv@gmail.com',
    telefono: '699 876 543',
    fechaNacimiento: '1994-09-12',
    fechaBoda: '2025-10-18',
    tipoEvento: 'boda',
    estado: 'lead',
    origen: 'web',
    notas: 'Rellenó formulario web. Pendiente primer contacto.',
  },
  {
    id: '6',
    nombre: 'Empresa TechCorp',
    apellidos: 'S.L.',
    email: 'eventos@techcorp.es',
    telefono: '932 456 789',
    fechaNacimiento: '',
    fechaBoda: '2025-12-15',
    tipoEvento: 'corporativo',
    estado: 'presupuestado',
    origen: 'web',
    notas: 'Cena de Navidad para 80 empleados. Buscan espacio con capacidad.',
    presupuesto: 8500,
    ubicacion: 'Pendiente'
  },
  {
    id: '7',
    nombre: 'Sofía',
    apellidos: 'López Martín',
    email: 'sofia.lm@email.com',
    telefono: '611 222 333',
    fechaNacimiento: '1991-12-03',
    fechaBoda: '2024-11-27',
    tipoEvento: 'boda',
    estado: 'realizado',
    origen: 'bodas.net',
    notas: 'Boda realizada. Muy contentos. Pendiente pedir reseña.',
    presupuesto: 16000,
    ubicacion: 'Mas Corts, Mataró'
  },
  {
    id: '8',
    nombre: 'Cristina',
    apellidos: 'Navarro Gil',
    email: 'cris.navarro@gmail.com',
    telefono: '622 444 555',
    fechaNacimiento: '1993-04-20',
    fechaBoda: '2025-08-30',
    tipoEvento: 'boda',
    estado: 'confirmado',
    origen: 'bodas.net',
    notas: 'Ceremonia simbólica. 100 invitados. Menú vegetariano para 20 personas.',
    presupuesto: 19500,
    ubicacion: 'Can Ribas, Caldes'
  }
];

// Eventos de calendario (incluye bodas, reuniones, recordatorios)
export const eventosDemo: Evento[] = [
  // Bodas confirmadas
  { id: 'e1', clienteId: '3', tipo: 'boda', titulo: 'Boda Laura Sánchez', fecha: '2025-05-10', hora: '12:00' },
  { id: 'e2', clienteId: '1', tipo: 'boda', titulo: 'Boda María García', fecha: '2025-06-21', hora: '13:00' },
  { id: 'e3', clienteId: '4', tipo: 'boda', titulo: 'Boda Andrea Fernández', fecha: '2025-07-05', hora: '12:30' },
  { id: 'e4', clienteId: '8', tipo: 'boda', titulo: 'Boda Cristina Navarro', fecha: '2025-08-30', hora: '13:00' },
  { id: 'e5', clienteId: '2', tipo: 'boda', titulo: 'Boda Carlos Martínez', fecha: '2025-09-13', hora: '12:00' },
  { id: 'e6', clienteId: '5', tipo: 'boda', titulo: 'Boda Paula Rodríguez', fecha: '2025-10-18', hora: '12:00' },

  // Reuniones próximas
  { id: 'e7', clienteId: '4', tipo: 'reunion', titulo: 'Reunión inicial - Andrea', fecha: '2025-11-29', hora: '17:00', descripcion: 'Primera reunión para conocer necesidades' },
  { id: 'e8', clienteId: '5', tipo: 'reunion', titulo: 'Llamada - Paula Rodríguez', fecha: '2025-11-28', hora: '11:00', descripcion: 'Primer contacto telefónico' },
  { id: 'e9', clienteId: '2', tipo: 'reunion', titulo: 'Revisión presupuesto - Carlos', fecha: '2025-12-02', hora: '18:30', descripcion: 'Revisar presupuesto y cerrar detalles' },
  { id: 'e10', clienteId: '6', tipo: 'reunion', titulo: 'Visita espacio - TechCorp', fecha: '2025-12-05', hora: '10:00', descripcion: 'Visitar posibles ubicaciones' },

  // Aniversarios de boda (clientes pasados)
  { id: 'e11', clienteId: '7', tipo: 'aniversario', titulo: '1er Aniversario - Sofía López', fecha: '2025-11-27', descripcion: 'Enviar felicitación' },

  // Cumpleaños próximos
  { id: 'e12', clienteId: '7', tipo: 'cumpleanos', titulo: 'Cumpleaños Sofía López', fecha: '2025-12-03', descripcion: 'Enviar felicitación' },
];

// Alertas y recordatorios activos
export interface Alerta {
  id: string;
  tipo: 'aniversario' | 'cumpleanos' | 'seguimiento' | 'resena' | 'pago';
  clienteId: string;
  mensaje: string;
  fecha: string;
  prioridad: 'alta' | 'media' | 'baja';
}

export const alertasDemo: Alerta[] = [
  {
    id: 'a1',
    tipo: 'aniversario',
    clienteId: '7',
    mensaje: '¡Hoy es el 1er aniversario de boda de Sofía López!',
    fecha: '2025-11-27',
    prioridad: 'alta'
  },
  {
    id: 'a2',
    tipo: 'resena',
    clienteId: '7',
    mensaje: 'Pedir reseña a Sofía López (boda hace 1 año)',
    fecha: '2025-11-27',
    prioridad: 'media'
  },
  {
    id: 'a3',
    tipo: 'seguimiento',
    clienteId: '5',
    mensaje: 'Lead sin contactar: Paula Rodríguez (hace 3 días)',
    fecha: '2025-11-27',
    prioridad: 'alta'
  },
  {
    id: 'a4',
    tipo: 'seguimiento',
    clienteId: '4',
    mensaje: 'Recordar reunión mañana con Andrea Fernández',
    fecha: '2025-11-28',
    prioridad: 'media'
  },
  {
    id: 'a5',
    tipo: 'cumpleanos',
    clienteId: '7',
    mensaje: 'Cumpleaños de Sofía López en 6 días',
    fecha: '2025-12-03',
    prioridad: 'baja'
  }
];

// Estadísticas para el dashboard
export const estadisticasDemo = {
  totalClientes: 8,
  bodasConfirmadas: 4,
  bodasPendientes: 3,
  eventosEsteMes: 2,
  leadsSinContactar: 1,
  presupuestoTotal: 96500,
  proximaBoda: {
    cliente: 'Laura Sánchez',
    fecha: '2025-05-10',
    diasRestantes: 164
  }
};
