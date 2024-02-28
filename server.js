const fastify = require('fastify')();
const connectDB = require('./databases/dbConfig'); // vers dbConfig.js
const Book = require('./models/book'); // vers book.js

// Appel de la fonction connectDB pour établir la connexion à MongoDB
connectDB()
    .then(() => {
        // Démarrage du serveur Fastify une fois que la connexion à la base de données est établie
        fastify.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // Arrêt du processus en cas d'échec de connexion
    });

fastify.post('/books', async (request, reply) => {
    try {
        const newBook = new Book(request.body); // Création d'une nouvelle instance de livre avec les données du corps de la requête
        const savedBook = await newBook.save(); // Enregistrement du nouveau livre dans la base de données
        reply.code(201).send(savedBook); // Répondre avec le livre enregistré
    } catch (err) {
        reply.code(500).send({ error: 'Internal Server Error' }); // En cas d'erreur, répondre avec un code d'erreur 500
    }
});
