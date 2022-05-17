export const telFormat = (value) => {
  value = `(${value.slice(0,2)}) ${value.slice(2,7)}.${value.slice(7,11)}`
  return value;
};

export const offTelFormat = (value) => {
  return value.replaceAll('(', '').replaceAll(')', '')
              .replaceAll(' ', '').replaceAll('.', '')
              .replaceAll('-', '');
};
