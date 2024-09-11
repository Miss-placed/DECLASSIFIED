export const toCapitalizedWords = (text: string) => {
	var words = text.match(/[A-Za-z][a-z]*/g) || [];

	return words.map(capitalize).join(' ');
};

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.substring(1);
};
