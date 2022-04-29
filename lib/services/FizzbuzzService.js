class FizzbuzzService {
	static applyValidationInExplorer(explorer) {
		//4. Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene...
		const assignFizzTrick = function (explorer) {
			if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
				explorer.trick = 'FIZZBUZZ';
				return explorer;
			} else if (explorer.score % 5 === 0) {
				explorer.trick = 'BUZZ';
				return explorer;
			} else if (explorer.score % 3 === 0) {
				explorer.trick = 'FIZZ';
				return explorer;
			} else {
				explorer.trick = explorer.score;
				return explorer;
			}
		};
		return assignFizzTrick(explorer);
	}

	static applyValidationInNumber(number) {
		const assignFizzTricky = function (number) {
			if (number >= 1 && number % 5 === 0 && number % 3 === 0) {
				return 'FIZZBUZZ';
			} else if (number % 5 === 0) {
				return 'BUZZ';
			} else if (number % 3 === 0) {
				return 'FIZZ';
			} else if (number === 0) {
				return 'Por favor ingresa un numero entero mayor a 0';
			} else {
				return number;
			}
		};
		return assignFizzTricky(number);
	}
}

module.exports = FizzbuzzService;
