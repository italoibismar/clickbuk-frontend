import { useUsers } from "../../../lib/hooks/useUsers";

export function useSubscribeTrialController() {
  function calcularDiferencaDeDias(data1, data2) {
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
  
  function formatarData(date) {
    const ano = date.getFullYear();
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const dia = date.getDate().toString().padStart(2, '0');
  
    // Formatando a data no formato dd/mm/yyyy
    const dataFormatada = `${dia}/${mes}/${ano}`;
  
    return dataFormatada;
  }
  
  function calcularPorcentagemEntreDatas(dataFinal, dataAtual) {
    // Extrai o dia das datas no formato dd/mm/yyyy
    const [diaFinal] = dataFinal.split('/').map(Number);
    const [diaAtual] = dataAtual.split('/').map(Number);
  
    // Calcula a porcentagem entre o dia final e o dia atual
    const porcentagem = ((7 - Math.abs(diaFinal - diaAtual)) / 7) * 100;
  
    // Limita a porcentagem entre 0% e 100%
    const porcentagemLimitada = Math.min(Math.max(porcentagem, 0), 100);

    const porcentagemInvertida = 100 - porcentagemLimitada;
  
    // Arredonda para o número inteiro mais próximo
    return Math.round(porcentagemInvertida);
  }
  
  const { id } = JSON.parse(localStorage.getItem("user"));
  
  const { user, isLoading } = useUsers(id);

  // Exemplo de uso
  const dataAtualFormatada = formatarData(new Date());
  const dataFinalFormatada = formatarData(new Date(user?.trial_period));

  const dataInicial = dataAtualFormatada;
  const dataFinal = dataFinalFormatada;
  const diasRestantes = calcularDiferencaDeDias(dataInicial, dataFinal);
  const progresso = calcularPorcentagemEntreDatas(dataFinal, dataInicial);
  const assinaturaAtiva = user?.subscription?.find(assinatura => assinatura?.subscription_status === "active");

  return {
      diasRestantes,
      progresso,
      assinaturaAtiva,
      isLoading
  }
        
}