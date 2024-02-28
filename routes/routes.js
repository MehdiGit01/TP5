// importation Fastify contrôleurs
const fastify = require('fastify')();
const bookController = require('./controllers/bookController');

// routes
async function routes(fastify, options) {
    fastify.post('/books', bookController.addBook);
    fastify.get('/books/:id', bookController.getBook);

}

// enregistre routes avec Fastify
module.exports = routes;
