
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', function(table){
    table.increments();
    table.string('name');
    table.string('catagory');
  }).then(function(){
    return knex.schema.createTable('user_stats_preferences', function(table){
      table.increments();
      table.integer('user').references('id').inTable('users')
      table.integer('stat').references('id').inTable('stats')
    });
  }).then(function(){
    return knex.schema.table('users', function(table){
      table.dropColumn('preferences');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_stats_preferences').then(function(){
    return knex.schema.dropTable('stats')
  }).then(function(){
    return knex.schema.table('users', function(table){
    table.json('preferences');
    })
  })
};
