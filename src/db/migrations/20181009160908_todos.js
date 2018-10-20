exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
