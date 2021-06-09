//caesarCipherEncryptor

//solution 1
function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let alphabet = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26,
	}
	let result = ''
	let place = 0
	let alphabetKeys = Object.keys(alphabet)
	for (let i = 0; i < string.length; i++) {
			if (key > 26 || alphabet[string[i]] + key > 26) {
				place = Number(alphabet[string[i]]) + key
				while (place > 26) {
					place -= 26
				}
				result += alphabetKeys[place - 1]
			} else {
				place = Number(alphabet[string[i]]) + key
				result += alphabetKeys[place - 1]
			}
	}
	return result
}
