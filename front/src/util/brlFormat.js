//Formatação da data e hora dd/mm/aaaa
export const brlFormat = (value) => {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};

