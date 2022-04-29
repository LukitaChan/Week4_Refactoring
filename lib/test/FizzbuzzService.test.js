const FizzbuzzService = require('../services/FizzbuzzService');
describe('Test para funcion FizzbuzzService', () => {
	test('1. Test para applyValidationInExplorer', () => {
		const explorersFBS = { score: 1 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe(1);
	});

	test('2. Test para applyValidationInExplorer', () => {
		const explorersFBS = { score: 3 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe('FIZZ');
	});

	test('3. Test para applyValidationInExplorer', () => {
		const explorersFBS = { score: 5 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe('BUZZ');
	});

	test('4. Test para applyValidationInExplorer', () => {
		const explorersFBS = { score: 15 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe('FIZZBUZZ');
	});

	test('5. Test para applyValidationInNumber', () => {
		const explorerTricky15 = 15;
		const explorer15 = FizzbuzzService.applyValidationInNumber(explorerTricky15);
		expect(explorer15).toBe('FIZZBUZZ');
	});

	test('6. Test para applyValidationInNumber', () => {
		const explorerTricky9 = 9;
		const explorer9 = FizzbuzzService.applyValidationInNumber(explorerTricky9);
		expect(explorer9).toBe('FIZZ');
	});

	test('7. Test para applyValidationInNumber', () => {
		const explorerTricky10 = 10;
		const explorer10 = FizzbuzzService.applyValidationInNumber(explorerTricky10);
		expect(explorer10).toBe('BUZZ');
	});

	test('8. Test para applyValidationInNumber', () => {
		const explorerTricky4 = 4;
		const explorer4 = FizzbuzzService.applyValidationInNumber(explorerTricky4);
		expect(explorer4).toBe(4);
	});
});
