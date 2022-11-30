// 2. Escreva programa em Javascript ou ReactJS capaz de identificar a(s) letra(s) mais
// frequente(s) em uma cadeia de caracteres. A entrada será uma cadeia de caracteres sem
// espaços de no máximo 1000 caracteres. A saída deverá ser uma lista com as letra(s) seguida
// por sua porcentagem com duas casas decimais, deve ser ordenada pela porcentagem do maior
// para o menor. Deve-se desconsiderar diferenças de maiúsculas e minúsculas. Qualquer outro
// caractere que não seja uma letra de A a Z deverá ser desconsiderado. Exemplo: Entrada: Arara
// Saída: a = 60% b = 40%

const countCharPercentage = (text) => {
  if (!text || text === "") return;
  let itemsIncluded = [];
  let finalList = [];
  strList = text.replace(/\s/g, "").toLowerCase().split(""); //convert text to array

  strList.forEach((item, index) => {
    //check if it's letter
    if (item.match(/[a-z]/i)) {
      //it will not check same item twice
      if (!itemsIncluded.includes(item)) {
        //get how many times a char appears
        let count = strList.filter((value) => {
          if (value == item) {
            return value;
          }
        }).length;
        let percentage = (count * 100) / strList.length;
        itemsIncluded.push(item);
        finalList.push({ caractere: item, qtd: percentage.toFixed(2) });
      }
    }
  });
  //sort list and convert quatity to string
  finalList = finalList
    .sort(compare)
    .reverse()
    .map((item) => {
      return { caractere: item.caractere, qtd: `${item.qtd}%` };
    });
  return finalList;
};

function compare(a, b) {
  if (a.qtd / 100 < b.qtd / 100) {
    return -1;
  }
  if (a.qtd / 100 > b.qtd / 100) {
    return 1;
  }
  return 0;
}

const teste = countCharPercentage("arara");
console.log(teste);
