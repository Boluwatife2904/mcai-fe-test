export function convertWordToInitials(word: string) {
	let position;
	let length;
	const slicedWord = word.slice(1);

	if (slicedWord.length % 2 === 1) {
		position = slicedWord.length / 2;
		length = 1;
	} else {
		position = slicedWord.length / 2 - 1;
		length = 2;
	}

	const middleOfWord = slicedWord.substring(position, position + length);

	return `${word.charAt(0)}${middleOfWord.charAt(middleOfWord.length - 1)}`;
}

export function stringToHashCode(word: string) {
	let hash = 0;
	for (let i = 0; i < word.length; i++) {
		const char = word.charCodeAt(i);
		hash = (hash << 5) - hash + char;
	}
	return hash;
}