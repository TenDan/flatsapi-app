const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());

export const isRequired = (value: any) => !!value || 'Pole wymagane';
export const isNumber = (value: any) => !!(+value) || 'To musi być liczba';
export const minLength = (length: number) => (value: any) => value?.length >= length || `Wartość jest zbyt krótka. Co najmniej: ${length} znaków`;
export const maxLength = (length: number) => (value: any) => value?.length < length || `Wartość jest zbyt długa. Co najwyżej: ${length} znaków`;
export const isEmail = (value: string) => emailRegex.test(value.toLowerCase()) || 'To musi być adres e-mail';
