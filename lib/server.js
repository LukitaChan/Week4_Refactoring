const ExplorerController = require('./controllers/ExplorerController');

const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (request, response) => {
	response.json({ message: 'Bienvenido a la FizzBuzz-Api!' });
});

app.listen(port, () => {
	console.log(`FizzBuzz API esta activo localhost:${port}`);
});
