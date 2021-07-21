export const required = (value: any) => !!value || 'Pole wymagane';
export const mustBeANumber = (value: any) => !!(+value) || 'To musi być liczba';
