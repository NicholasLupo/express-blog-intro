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
        titolo: 'Ciambellone soffice',
        contenuto: 'Ricetta del classico ciambellone soffice, perfetto per la colazione o la merenda con una tazza di latte.',
        immagine: 'http://localhost:3000/images/ciambellone.jpeg',
        tags: ['Dolce', 'Colazione', 'Ciambellone']
    },
    {
        titolo: 'Pasta alla barbabietola',
        contenuto: 'Un primo piatto colorato e cremoso con crema di barbabietola e una spolverata di formaggio.',
        immagine: 'http://localhost:3000/images/pasta_barbabietola.jpeg',
        tags: ['Pasta', 'Barbabietola', 'Primo']
    },
    {
        titolo: 'Torta paesana rustica',
        contenuto: 'Torta casalinga dalla consistenza rustica, perfetta per chi ama i sapori autentici e antichi.',
        immagine: 'http://localhost:3000/images/torta_paesana.jpeg',
        tags: ['Torta', 'Rustico', 'Dolce']
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: 'Sfizio dolce con pane fritto, ideale per una merenda golosa o un fine pasto diverso dal solito.',
        immagine: 'http://localhost:3000/images/pane_fritto_dolce.jpeg',
        tags: ['Pane', 'Fritto', 'Dessert']
    },
    {
        titolo: 'Cracker alla barbabietola',
        contenuto: 'Snack salato e croccante perfetto per aperitivi, con un gusto delicato di barbabietola.',
        immagine: 'http://localhost:3000/images/cracker_barbabietola.jpeg',
        tags: ['Snack', 'Cracker', 'Salato']
    }
];

app.use(express.static('public'))

app.get('/bacheca', (req, res) => {

    res.json(blogs)

})