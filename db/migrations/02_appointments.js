exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointments', function(table) {
    table.increments()
    table.datetime('time')
    table.string('location')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointments')
}
