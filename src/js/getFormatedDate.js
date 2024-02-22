export const getFormatedDate = () => {
  const atualDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Sao_Paulo", // Fuso horário de Brasília
  };
  return atualDate.toLocaleString("pt-BR", options);
};
