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
}

module.exports = ExplorerController;
