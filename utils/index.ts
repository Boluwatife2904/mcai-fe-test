import type { ErrorObject } from "@vuelidate/core";

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

export function formatVuelidateMessage(errors: ErrorObject[]) {
	return errors.length ? (errors[0].$message as string) : "";
}

export function convertToInternationalCurrencySystem(labelValue: string | number) {
	// Nine Zeroes for Billions
	return Math.abs(Number(labelValue)) >= 1.0e9
		? Math.abs(Number(labelValue)) / 1.0e9 + "B"
		: // Six Zeroes for Millions
		Math.abs(Number(labelValue)) >= 1.0e6
		? Math.abs(Number(labelValue)) / 1.0e6 + "M"
		: // Three Zeroes for Thousands
		Math.abs(Number(labelValue)) >= 1.0e3
		? Math.abs(Number(labelValue)) / 1.0e3 + "K"
		: Math.abs(Number(labelValue));
}
