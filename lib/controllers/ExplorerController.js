const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController {
	static getExplorersByMission(mission) {
		const explorers = Reader.readJsonFile('explorers.json');
		const filtradoPorMision = ExplorerService.filterByMission(explorers, mission);
		return filtradoPorMision;
	}

	static getExplorersUsernamesByMission(mission) {}

	static getExplorersAmonutByMission(mission) {}
}

module.exports = ExplorerController;
