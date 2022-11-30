// 1. Considere um Caixa Eletrônico com cédulas disponíveis nos valores 20, 10, 5 e 1 escreva um
// programa em Javascript ou ReactJS em que o usuário preenche um valor numérico qualquer
// (número inteiro), realiza os cálculos necessários, e apresenta o resultado com a menor
// quantidade de notas, dos diferentes valores disponíveis, que são necessárias para retornar o
// valor numérico recebido.

const returnMoneyQuantity = (value) => {
  
  let availableMoney = [20, 10, 5, 1]; //se quiser adicionar novas cédulas disponiveis, basta colocar no array
  let itemsIncluded = [];
  let finalList = [];
  let index = 0;

  while (value != 0) {
    if (value >= availableMoney[index]) {
      value = value - availableMoney[index];
      if (!itemsIncluded.includes(availableMoney[index])) {
        // if the item is not in the array, it will add item
        finalList.push({ nota: availableMoney[index], qtd: 1 });
        itemsIncluded.push(availableMoney[index]);
      } else {
        finalList.map((item) => {
          //if the item is in the array, it will inscrease item quantity
          if (item.nota == availableMoney[index]) {
            return (item = { nota: item.nota, qtd: item.qtd++ });
          } else {
            return item;
          }
        });
      }
    } else {
      index++;
    }
  }
  return finalList;
};

const teste = returnMoneyQuantity(73);
console.log(teste);
