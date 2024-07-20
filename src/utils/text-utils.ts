export const getSingularOrPlural = (word: string, length: number) =>
  length <= 1 ? word : `${word}s`;
