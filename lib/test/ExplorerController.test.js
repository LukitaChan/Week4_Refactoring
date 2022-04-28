const ExplorerController = require('../controllers/ExplorerController');

describe('Test para ExplorerController', () => {
	test('1. Obtener los explorers que están en node.', () => {
		const explorersInNode = ExplorerController.getExplorersByMission('node').length;
		expect(explorersInNode).toBe(10);
	});
});
