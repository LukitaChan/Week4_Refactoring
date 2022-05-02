const ExplorerController = require('./controllers/ExplorerController');
const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (request, response) => {
	response.json({ message: 'Bienvenido a la FizzBuzz-Api!' });
});

app.get('/v1/explorers/:mission', (request, response) => {
	const mission = request.params.mission;
	const explorersInMission = ExplorerController.getExplorersByMission(mission);
	response.json(explorersInMission);
});

app.get('/v1/explorers/usernames/:mission', (request, response) => {
	const mission = request.params.mission;
	const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
	response.json({ mission: request.params.mission, ExplorersUsernames: explorersUsernamesInMission });
});

app.get('/v1/explorers/amount/:mission', (request, response) => {
	const mission = request.params.mission;
	const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
	response.json({ mission: request.params.mission, quantity: explorersAmountInMission });
});

app.get('/v1/fizzbuzz/:score', (request, response) => {
	const score = request.params.score;
	const scoreInMission = ExplorerController.FizzbuzzNumber(score);
	response.json({ score: request.params.score, trick: scoreInMission });
});

app.get('/v1/explorers/names/:mission', (request, response) => {
	const mission = request.params.mission;
	const missionFiltrado = ExplorerController.getExplorersNamesByMission(mission);
	response.json({ Name: request.params.name, Array: missionFiltrado });
});

app.get('/v1/explorers/stack/:stacks', (request, response) => {
	const stack = request.params.stacks;
	const stackFiltrado = ExplorerController.getExplorersByStack(stack);
	response.json({ stack: request.params.stacks, Array: stackFiltrado });
});

app.listen(port, () => {
	console.log(`FizzBuzz API esta activo localhost:${port}`);
});
