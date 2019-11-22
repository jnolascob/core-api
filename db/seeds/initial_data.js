const benefit = [
  {
    id: 1,
    name: 'Netflix',
    description: 'Acceso a la cuenta de Netflix',
    website: 'https://www.netflix.com/browse',
    username: 'family@doapps.me',
    password: 'DoAppsTeam2020',
  },
  {
    id: 2,
    name: 'Platzi',
    description: 'Acceso a la cuenta de Platzi',
    website: 'https://platzi.com/',
    username: 'doapps.me@gmail.com',
    password: 'DoAppsFinal2019',
  },
];

const employee = [
  {
    id: 1,
    name: 'Jonathan',
    lastname: 'Nolasco',
    email: 'jnolascob@gmail.com',
    password: '12345678',
    headquarter_id: 1,
  },
  {
    id: 2,
    name: 'Leonardo',
    lastname: 'Cardenas',
    email: 'leocardenas2898@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 3,
    name: 'Eduardo',
    lastname: 'Palomino',
    email: 'depalominop@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 4,
    name: 'Joshua',
    lastname: 'Navarro',
    email: 'joshua.navarro35@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 5,
    name: 'Leandro',
    lastname: 'Castillo',
    email: 'leccbo1995@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 6,
    name: 'Nicolás',
    lastname: 'Madrid',
    email: 'nmadrid.tello@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 7,
    name: 'Anais',
    lastname: '',
    email: 'annie.08.12.94@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 8,
    name: 'Lesly',
    lastname: 'Romero',
    email: 'leslyl.romerov@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 9,
    name: 'Lindley',
    lastname: 'Cabanillas',
    email: 'salvadorlindley@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 10,
    name: 'Angel',
    lastname: 'Espinoza',
    email: 'angel@espinoza.me',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 11,
    name: 'Marisol',
    lastname: 'Roca',
    email: 'msrn1004@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 12,
    name: 'Jose',
    lastname: 'Duran',
    email: 'jooose1204@gmail.com',
    password: '',
    headquarter_id: 1,
  },
  {
    id: 13,
    name: 'William',
    lastname: 'Nolasco',
    email: 'william.nolascob@gmail.com',
    password: '',
    headquarter_id: 1,
  },
];

const docs = [
  {
    name: 'Contrato',
    description: 'Documento de contrato de servicios',
    document_url: 'http://www.africau.edu/images/default/sample.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 1,
  },
  {
    name: 'Ingreso a planilla',
    description: 'Documento de contrato de servicios',
    document_url: 'http://www.africau.edu/images/default/sample.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 2,
  },
  {
    name: 'Contrato',
    description: 'Documento de contrato de servicios',
    document_url: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    author: 'employee',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 2,
  },
  {
    name: 'Certificado de trabajo',
    description: 'Documento de certificado de trabajo por el período 2019',
    document_url: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 3,
  },
];

const vacation_requests = [
  {
    start_date: '2019-04-17 09:58:06',
    end_date: '2019-04-24 09:58:06',
    description: 'Exijo mis vacaciones',
    employee_id: 1,
  },
];

const role_employee = [
  {
    employee_id: 1,
    role_id: 1,
  },
  {
    employee_id: 2,
    role_id: 1,
  },
  {
    employee_id: 3,
    role_id: 1,
  },
  {
    employee_id: 4,
    role_id: 1,
  },
  {
    employee_id: 5,
    role_id: 1,
  },
  {
    employee_id: 6,
    role_id: 1,
  },
  {
    employee_id: 7,
    role_id: 3,
  },
  {
    employee_id: 8,
    role_id: 3,
  },
  {
    employee_id: 9,
    role_id: 3,
  },
  {
    employee_id: 10,
    role_id: 4,
  },
  {
    employee_id: 11,
    role_id: 4,
  },
  {
    employee_id: 12,
    role_id: 1,
  },
  {
    employee_id: 13,
    role_id: 2,
  },
];

const roles = [
  { name: 'Programador' },
  { name: 'Diseñador' },
  { name: 'Project Manager' },
  { name: 'Administrador' },
];

const tools = [
  {
    name: 'invision',
    description: 'credenciales de invisionapp',
    website: 'invisionapp.com',
    username: 'user',
    password: '123456',
    role_id: 1,
  },
];

const trips = [
  {
    reason: 'Reunion',
    origin_address: 'DoApps',
    destination_address: 'Open Plaza Angamos',
    price: 5,
    date: '2019-04-24 09:58:06',
    employee_id: 1,
  },
];

const headquarters = [
  {
    id: 1,
    name: 'Lima',
    qr_code: 'https://www.doapps.me/',
  },
  {
    id: 2,
    name: 'Arequipa',
    qr_code: 'DOAPPS-AREQUIPA',
  },
];

const attendances = [
  {
    id: 1,
    register_date: '2019-05-04 09:58:06',
    employee_id: 1,
  },
];

exports.seed = async (knex) => {
  await knex.raw('SET @@SESSION.foreign_key_checks = 0;');
  await knex('headquarter').insert(headquarters);
  await knex('employee').del();
  await knex('vacation_request').del();
  await knex('role').del();
  await knex('role_employee').del();
  await knex('tool').del();
  await knex('doc').del();
  await knex('trip').del();
  await knex('justification').del();
  await knex('suggestion').del();
  await knex('benefit').del();
  await knex.raw('SET @@SESSION.foreign_key_checks = 1;');

  await knex('benefit').insert(benefit);
  await knex('employee').insert(employee);
  await knex('trip').insert(trips);
  await knex('role').insert(roles);
  await knex('tool').insert(tools);
  await knex('role_employee').insert(role_employee);
  await knex('vacation_request').insert(vacation_requests);
  await knex('doc').insert(docs);
  await knex('attendance').insert(attendances);
};
