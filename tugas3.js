const printSegitiga = 5;
let str = '';
let tipeData = typeof printSegitiga;

if (tipeData === 'number') {
	for (let i = printSegitiga - 1; i >= 0; i--) {
		for (let j = 1; j <= i + 1; j++) {
			str += j;
		}
		str += '\n';
	}
	console.log(str);
} else if (tipeData === 'string') {
	console.log('Data harus Number');
}
