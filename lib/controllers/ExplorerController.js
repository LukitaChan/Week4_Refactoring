const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController {
	static getExplorersByMission(mission) {
		const explorers = Reader.readJsonFile('explorers.json');
		const filtradoPorMision = ExplorerService.filterByMission(explorers, mission);
		return filtradoPorMision;
	}

	static getExplorersUsernamesByMission(mission) {
		const explorers = Reader.readJsonFile('explorers.json');
		const usernameExplorersPorMision = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
		return usernameExplorersPorMision;
	}

	static getExplorersAmonutByMission(mission) {
		const explorers = Reader.readJsonFile('explorers.json');
		const amountExplorersPorMision = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
		return amountExplorersPorMision;
	}

	static FizzbuzzNumber(score) {
		//const explorers = Reader.readJsonFile('explorers.json');
		const numeroScore = FizzbuzzService.applyValidationInNumber(score);
		return numeroScore;
	}

	static FizzBuzzBot(number) {
		const botNumero = FizzbuzzService.botFizzBuzz(number);
		return botNumero;
		//console.log(botNumero);
	}

	static getExplorersByStack(stacks) {
		const explorers = Reader.readJsonFile('explorers.json');
		const filtradosPorStack = ExplorerService.filterByStack(explorers, stacks);
		return filtradosPorStack;
	}

	static getExplorersNamesByMission(mission) {
		const explorers = Reader.readJsonFile('explorers.json');
		const nameExplorersPorMision = ExplorerService.getExplorersNamesByMission(explorers, mission);
		return nameExplorersPorMision;
	}
}

module.exports = ExplorerController;
