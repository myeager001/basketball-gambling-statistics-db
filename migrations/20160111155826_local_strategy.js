
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
  table.boolean('is_local').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('is_local');
  })
};
