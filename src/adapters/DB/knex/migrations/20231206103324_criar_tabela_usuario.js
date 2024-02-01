/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const exists = await knex.schema.hasTable('users')

  if(exists) return

  return knex.schema.createTable('users', table => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.string('mail').notNullable().unique()
    table.string('pass').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
