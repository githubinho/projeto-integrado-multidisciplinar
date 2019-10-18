
exports.up = function(knex) {
  return knex.schema.createTable('motoristas', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('email').notNull().unique()
      table.string('senha').notNull()
      table.integer('empresaId').references('id').inTable('empresas').notNull()
      table.integer('veiculoId').references('id').inTable('veiculos').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('motoristas')
};
