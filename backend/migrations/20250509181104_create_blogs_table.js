/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('blogs', function(table) {
    table.increments('id').primary();
    table.string('slug').unique().notNullable();
    table.string('title').notNullable();
    table.string('category');
    table.text('summary');
    table.text('content');
    table.string('cover_image');
    table.string('author').defaultTo('Prof. Dr. Günel Məmmədova');
    table.date('published_at');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('blogs');
};
