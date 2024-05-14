export const objectString = (data: Record<string, string>) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const cleaned = keys.map((key, index) => {
    const cleanedKey = stringEmpty(key);
    const cleanedValue = stringEmpty(values[index]);
    return `${cleanedKey}${cleanedValue}`;
  });

  return cleaned.join(' ');
}


export const stringEmpty = (text: string): string => {
  const sinCaracteresEspeciales = text.replace(/[^\wáéíóúüñ]+/g, '');
  return sinCaracteresEspeciales.toLowerCase();
};
