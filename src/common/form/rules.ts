export const required = (value: any) => !!value || 'Pole wymagane';
export const mustBeANumber = (value: any) => !!(+value) || 'To musi być liczba';
export const minLength = (length: number) => (value: any) => value?.length >= length || `Wartość jest zbyt krótka. Co najmniej: ${length} znaków`;
export const maxLength = (length: number) => (value: any) => value?.length < length || `Wartość jest zbyt długa. Co najwyżej: ${length} znaków`;
