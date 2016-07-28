var config = require('./config')

var knex = require('knex')({
    client: 'mysql',
    connection: config.db_config
});
module.exports.knex = knex

var bookshelf = require('bookshelf')(knex)
module.exports = bookshelf

var Scan = bookshelf.Model.extend({
    tableName: 'pokemon',
    idAttribute: 'encounter_id'
});
module.exports.Scan = Scan

var Location = bookshelf.Model.extend({
    tableName: 'scannedlocation',
    idAttribute: 'scanned_id'
});
module.exports.Location = Location

var Name = bookshelf.Model.extend({
    tableName: 'pokemon_species_names',
    idAttribute: 'id'
});
module.exports.Name = Name
