const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

app.get('/', (req, res) => {

    res.send('Server del mio blog')

})

const blogs = [
    {
        titolo: 'Scoprire Express in 10 minuti',
        contenuto: 'Una guida rapida per iniziare con Express.js, configurare un server semplice e creare le prime rotte.',
        immagine: '/images/express-quickstart.jpg',
        tags: ['Express', 'Node.js', 'Backend']
    },
    {
        titolo: 'Come strutturare un blog con template',
        contenuto: 'Consigli su come organizzare i file di un blog, utilizzare view engine e separare contenuto e logica.',
        immagine: '/images/blog-structure.png',
        tags: ['Blog', 'Template', 'Organizzazione']
    },
    {
        titolo: 'Middleware: cosa sono e come usarli',
        contenuto: 'Esempi pratici per capire i middleware in Express, dalla gestione degli errori al parsing delle richieste.',
        immagine: '/images/middleware.jpg',
        tags: ['Middleware', 'Express', 'JavaScript']
    },
    {
        titolo: 'Creare una REST API semplice',
        contenuto: 'Una guida per costruire endpoint GET e POST e servire dati JSON con Express.',
        immagine: '/images/rest-api.png',
        tags: ['API', 'REST', 'JSON']
    },
    {
        titolo: 'Deploy del blog su un server locale',
        contenuto: 'Passaggi per distribuire la tua applicazione Node su un server locale e testarla con il browser.',
        immagine: '/images/deploy-local.jpg',
        tags: ['Deploy', 'Server', 'Test']
    }
];