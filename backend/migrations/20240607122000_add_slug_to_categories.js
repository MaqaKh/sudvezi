/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // 1. Add slug as nullable
  await knex.schema.table('categories', function(table) {
    table.string('slug');
  });
  // 2. Populate slugs for existing rows
  await knex('categories').where('id', 1).update({ slug: 'breast-cancer' });
  await knex('categories').where('id', 2).update({ slug: 'thyroid-surgery' });
  await knex('categories').where('id', 3).update({ slug: 'parathyroid-surgery' });
  // 3. Alter slug to be notNullable and unique
  await knex.schema.alterTable('categories', function(table) {
    table.string('slug').notNullable().unique().alter();
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('categories', function(table) {
    table.dropColumn('slug');
  });
}; 