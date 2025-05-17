/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('categories', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('name_az').notNullable();
  });
  await knex('categories').insert([
    { id: 1, name: 'breast cancer', name_az: 'döş xərçəngi əməliyyatı' },
    { id: 2, name: 'thyroid surgery', name_az: 'tiroid əməliyyatı' },
    { id: 3, name: 'parathyroid surgery', name_az: 'paratiroid əməliyyatı' },
  ]);
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('categories');
}; 