function employee(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.string('lastname', 100).notNullable();
  table.string('email', 50).notNullable();
  table.string('password', 50).notNullable();
  table.integer('headquarter_id').unsigned().notNullable();
  table.foreign('headquarter_id').references('id').inTable('headquarter');
  table.timestamps(true, true);
}

function vacation_request(table) {
  table.increments('id').primary();
  table.datetime('start_date').notNullable();
  table.datetime('end_date').notNullable();
  table.string('description', 150);
  table.enu('status', ['pending', 'acepted', 'rejected']).defaultTo('pending');
  table.string('status_comment', 150);
  table.integer('employee_id').unsigned().notNullable();
  table.foreign('employee_id').references('id').inTable('employee');
  table.timestamps(true, true);
}

function role(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.timestamps(true, true);
}

function role_employee(table) {
  table.increments('id').primary();
  table.integer('employee_id').unsigned().notNullable();
  table.integer('role_id').unsigned().notNullable();
  table.foreign('employee_id').references('id').inTable('employee');
  table.foreign('role_id').references('id').inTable('role');
  table.timestamps(true, true);
}

function tool(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.string('description', 150);
  table.string('website', 150).defaultTo('');
  table.string('serial', 150).defaultTo('');
  table.string('username', 150).defaultTo('');
  table.string('password', 150).defaultTo('');
  table.integer('role_id').unsigned().notNullable();
  table.foreign('role_id').references('id').inTable('role');
  table.timestamps(true, true);
}

function doc(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.string('description', 150);
  table.string('document_url', 250).notNullable();
  table.enu('author', ['employee', 'company']);
  table.datetime('upload_date');
  table.integer('employee_id').unsigned().notNullable();
  table.foreign('employee_id').references('id').inTable('employee');
  table.timestamps(true, true);
}

function trip(table) {
  table.increments('id').primary();
  table.string('reason', 50).notNullable();
  table.string('origin_address');
  table.string('destination_address');
  table.float('price');
  table.string('image_url', 250);
  table.datetime('date');
  table.integer('employee_id').unsigned().notNullable();
  table.foreign('employee_id').references('id').inTable('employee');
  table.timestamps(true, true);
}

function attendance(table) {
  table.increments('id').primary();
  table.date('register_date').notNullable();
  table.datetime('check_in');
  table.datetime('check_out');
  table.enu('status', ['attended', 'absent']).notNullable().defaultTo('absent');
  table.boolean('has_justification').defaultTo(false);
  table.integer('employee_id').unsigned().notNullable();
  table.foreign('employee_id').references('id').inTable('employee');
  table.timestamps(true, true);
}

function justification(table) {
  table.increments('id').primary();
  table.string('reason').notNullable();
  table.string('comment', 250);
  table.string('photo_url', 250);
  table.datetime('register_date');
  table.enu('status', ['pending', 'accepted', 'rejected']).notNullable().defaultTo('pending');
  table.integer('attendance_id').unsigned().notNullable();
  table.foreign('attendance_id').references('id').inTable('attendance');
  table.timestamps(true, true);
}

function suggestion(table) {
  table.increments('id').primary();
  table.string('message').notNullable();
  table.string('image_url', 250);
  table.timestamps(true, true);
}

function benefit(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.string('description', 150);
  table.string('website', 150);
  table.string('username', 50);
  table.string('password', 50);
  table.string('image_url', 250).defaultTo('');
  table.timestamps(true, true);
}

function headquarter(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.string('qr_code', 50).notNullable();
  table.timestamps(true, true);
}

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('employee', employee),
    knex.schema.createTable('vacation_request', vacation_request),
    knex.schema.createTable('role', role),
    knex.schema.createTable('role_employee', role_employee),
    knex.schema.createTable('tool', tool),
    knex.schema.createTable('doc', doc),
    knex.schema.createTable('trip', trip),
    knex.schema.createTable('attendance', attendance),
    knex.schema.createTable('justification', justification),
    knex.schema.createTable('suggestion', suggestion),
    knex.schema.createTable('benefit', benefit),
    knex.schema.createTable('headquarter', headquarter),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.dropTableIfExists('employee'),
    knex.schema.dropTableIfExists('vacation_request'),
    knex.schema.dropTableIfExists('role'),
    knex.schema.dropTableIfExists('role_employee'),
    knex.schema.dropTableIfExists('tool'),
    knex.schema.dropTableIfExists('doc'),
    knex.schema.dropTableIfExists('trip'),
    knex.schema.dropTableIfExists('attendance'),
    knex.schema.dropTableIfExists('justification'),
    knex.schema.dropTableIfExists('suggestion'),
    knex.schema.dropTableIfExists('benefit'),
    knex.schema.dropTableIfExists('headquarter'),
    knex.raw('SET foreign_key_checks = 1;'),
  ]);
};
