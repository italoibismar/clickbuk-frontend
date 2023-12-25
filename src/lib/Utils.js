export const isEmailValid = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export function formatDate(date) {
  return Intl.DateTimeFormat('pt-br').format(date);
}

export function formatCurrency(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function currencyStringToNumber(value) {
  if (typeof value === 'number') {
    return value
  }
  const sanitizedString = value.replace(/\./g, '').replace(',', '.')

  return Number(sanitizedString);
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function calcularDiferencaDeDias(data1, data2) {
  // Convertendo as strings de data para objetos Date no formato dd/mm/yyyy
  const [dia1, mes1, ano1] = data1.split('/').map(Number);
  const [dia2, mes2, ano2] = data2.split('/').map(Number);

  // Criando objetos Date com o formato correto (mês é baseado em zero)
  const primeiraData = new Date(ano1, mes1 - 1, dia1);
  const segundaData = new Date(ano2, mes2 - 1, dia2);

  // Calculando a diferença em milissegundos
  const diferencaEmMilissegundos = segundaData - primeiraData;

  // Convertendo a diferença de milissegundos para dias
  const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

  // Arredondando para o número inteiro mais próximo
  return Math.round(diferencaEmDias);
}

export function formatarData(date) {
  const ano = date.getFullYear();
  const mes = (date.getMonth() + 1).toString().padStart(2, '0');
  const dia = date.getDate().toString().padStart(2, '0');

  // Formatando a data no formato dd/mm/yyyy
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}