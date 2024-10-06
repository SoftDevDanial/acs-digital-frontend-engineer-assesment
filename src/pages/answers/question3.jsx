const Question3 = () => {
	const printToConsole = (fn, numbers, target) => {
		console.log(`Input: numbers = ${JSON.stringify(numbers)} , target = ${target}\nOutput: ${JSON.stringify(fn(numbers, target))}`);
	};

	const twoSum = (numbers, target) => {
		if (!Array.isArray(numbers)) {
			console.warn("Not an array");
			return;
		}
		let index1 = 0;
		let index2 = 0;

		for (let i = 0; i < numbers.length; i++) {
			const requiredNum = target - numbers[i];
			let found = false;
			for (let j = i; j < numbers.length; j++) {
				if (numbers[j] === requiredNum) {
					index1 = i;
					index2 = j;
					found = true;
					break;
				}
			}
			if (found) {
				break;
			}
		}
		const offset = 1;
		return [index1 + offset, index2 + offset];
	};

    printToConsole(twoSum , [4, 11, 17, 25], 21)
    printToConsole(twoSum , [0, 1, 2, 2, 3, 5], 4)
    printToConsole(twoSum , [2, 7, 11, 15], 9)
    printToConsole(twoSum , [2, 3, 4], 6)
    printToConsole(twoSum , [-1, 0], -1)

	return <></>;
};

export default Question3;
