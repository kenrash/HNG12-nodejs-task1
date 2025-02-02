const express = require('express')
const cors = require('cors');

const app = express();

app.use(cors());
//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.end()) /*returns empty body response*/
//app.get('/', (req, res) => res.status(400).end())/*empty response body*/
//app.get('/', (req, res) => res.status(400).send('Sorry, cant that'))
app.get('/', (req, res) => res.json({ domain: '.flaviocopes.com', path: '/administrator', secure: true }))
app.listen(3000, () => console.log('Server ready'))