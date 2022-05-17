//Formatação da data e hora dd/mm/aaaa
export const dateFormat = (date) => {
  return Number.isInteger(new Date(date).getTime()) && new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(date)) || null;
};

//Formatação da data e hora dd/mm/aaaa hh:mm
export const dateTimeFormat = (date) => {
  return Number.isInteger(new Date(date).getTime()) && new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(date)) || null;
};

//Formatação da data e hora dd/mm/aaaa -> dd/mm
export const dateFormatMonthYear = (date) => {
  date = date.split('/');
  return `${date[0]}/${date[1]}`
};
