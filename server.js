const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/health', (_, res) => res.status(200).send({ uptime: process.uptime() }));

app.listen(port, () => console.log(`Listening on port: ${port}`));
