export const toCamelCase = (sentence: string) => {
  const lowerCased = sentence.toLowerCase();
  const snakeCase = lowerCased
    .split(' ')
    .map((word, index) => {
      if (index > 0) {
        const [firstLetter] = word.toUpperCase().split('');
        return `${firstLetter}${word.slice(1)}`;
      }
      return word;
    })
    .join('');
  return snakeCase;
};
