const ExplorerController = require('../controllers/ExplorerController');

describe('Test para ExplorerController', () => {
	test('1. Obtener filtro de los explorers que están en node.', () => {
		const filtradoPorMisionNode = ExplorerController.getExplorersByMission('node');
		expect(filtradoPorMisionNode).toStrictEqual([
			{
				name: 'Woopa1',
				githubUsername: 'ajolonauta1',
				score: 1,
				mission: 'node',
				stacks: ['javascript', 'reasonML', 'elm']
			},
			{
				name: 'Woopa2',
				githubUsername: 'ajolonauta2',
				score: 2,
				mission: 'node',
				stacks: ['javascript', 'groovy', 'elm']
			},
			{
				name: 'Woopa3',
				githubUsername: 'ajolonauta3',
				score: 3,
				mission: 'node',
				stacks: ['elixir', 'groovy', 'reasonML']
			},
			{
				name: 'Woopa4',
				githubUsername: 'ajolonauta4',
				mission: 'node',
				score: 4,
				stacks: ['javascript']
			},
			{
				name: 'Woopa5',
				githubUsername: 'ajolonauta5',
				score: 5,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'elm']
			},
			{
				name: 'Woopa11',
				githubUsername: 'ajolonauta11',
				score: 11,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa12',
				githubUsername: 'ajolonauta12',
				score: 12,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa13',
				githubUsername: 'ajolonauta13',
				score: 13,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa14',
				githubUsername: 'ajolonauta14',
				score: 14,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa15',
				githubUsername: 'ajolonauta15',
				score: 15,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			}
		]);
		//hay 10 Miembros con node.
	});

	test('2. Obtener los explorers por Usernames por mission node', () => {
		const usernameExplorersPorMision = ExplorerController.getExplorersUsernamesByMission('node');
		expect(usernameExplorersPorMision).toStrictEqual([
			'ajolonauta1',
			'ajolonauta2',
			'ajolonauta3',
			'ajolonauta4',
			'ajolonauta5',
			'ajolonauta11',
			'ajolonauta12',
			'ajolonauta13',
			'ajolonauta14',
			'ajolonauta15'
		]);
	});

	test('3. Obtener la cantidad de explorers cuya mission es node', () => {
		const amountExplorersPorMision = ExplorerController.getExplorersAmonutByMission('node');
		expect(amountExplorersPorMision).toBe(10);
	});

	test('4. Obtener filtro de los explorers con stacks javascript', () => {
		const filtradoPorMisionJavas = ExplorerController.getExplorersByStack('javascript');
		expect(filtradoPorMisionJavas).toStrictEqual([
			{
				name: 'Woopa1',
				githubUsername: 'ajolonauta1',
				score: 1,
				mission: 'node',
				stacks: ['javascript', 'reasonML', 'elm']
			},
			{
				name: 'Woopa2',
				githubUsername: 'ajolonauta2',
				score: 2,
				mission: 'node',
				stacks: ['javascript', 'groovy', 'elm']
			},
			{
				name: 'Woopa4',
				githubUsername: 'ajolonauta4',
				mission: 'node',
				score: 4,
				stacks: ['javascript']
			},
			{
				name: 'Woopa5',
				githubUsername: 'ajolonauta5',
				score: 5,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'elm']
			},
			{
				name: 'Woopa9',
				githubUsername: 'ajolonauta9',
				score: 9,
				mission: 'java',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa10',
				githubUsername: 'ajolonauta10',
				score: 10,
				mission: 'java',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa11',
				githubUsername: 'ajolonauta11',
				score: 11,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa12',
				githubUsername: 'ajolonauta12',
				score: 12,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa13',
				githubUsername: 'ajolonauta13',
				score: 13,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa14',
				githubUsername: 'ajolonauta14',
				score: 14,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			},
			{
				name: 'Woopa15',
				githubUsername: 'ajolonauta15',
				score: 15,
				mission: 'node',
				stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm']
			}
		]);
		//hay 11 Miembros con javascript.
	});
});
