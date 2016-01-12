
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table){
    table.json('preferences');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('preferences');
  })
};
