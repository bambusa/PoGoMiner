var express = require('express')
var router = express.Router()

var config = require('../config')
var db = require('../db')
var knex = db.knex

/* GET home page. */
router.get('/', function(req, res, next) {
    new db.Location().fetchAll().then(function (locations) {
        locations = JSON.toJSON(locations)
        for (var location in locations) {
            console.log(location)

            //knex('pokemon').leftJoin('pokemon_species_names', 'pokemon.pokemon_id', 'pokemon_species_names.pokemon_species_id')
            //    .whereRaw(knex.raw('pokemon.latitude = ' + location.latitude))
            //    .whereRaw(knex.raw('pokemon.longitude = ' + location.longitude))
            //    .whereRaw(knex.raw('pokemon_species_names.local_language_id = 6'))
            //    .select('pokemon.disappear_time', 'pokemon.pokemon_id', 'pokemon_species_names.name').then(function (scans) {
            //        scans = JSON.toJSON(scans)
            //        if (scans.length > 0) {
            //
            //        }
            //
            //}).catch(function (err) {
            //    logger.error(err, "verification.accountVerification")
            //})

        }
    }).catch(function (err) {
        console.log(err)
    })

    res.render('index', { title: 'PoGoMiner', config: config, markers: {} } )
});

module.exports = router
