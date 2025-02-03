const express = require('express')
const cors = require('cors');

const app = express();

app.use(cors());
app.get('/', (req, res) => res.status(200).json({ email: 'adigunkehinde35@gmail.com', current_datetime: new Date().toISOString(), github_url: "https://github.com/kenrash/HNG12-nodejs-task1" }))
app.listen(3000, () => console.log('Server ready'))