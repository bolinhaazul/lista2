function insertionSort<T>(vetor: T[]) {
  const inicio = new Date().getTime();
  let count = 0;
  SetAux: for (let i = 1; i < vetor.length; i++) {
    const aux = vetor[i];

    for (let j = i - 1; j >= 0; j--) {
      if (aux >= vetor[j]) {
        vetor[j + 1] = aux;
        count++;
        continue SetAux;
      } else {
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
        count++;
        continue;
      }
    }
    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${count} movimentos, em ${
    tempoExecucao / 1000
  } segundos`;
}

const palavras = "carro, bicicleta, moto, copo, agua, feijao, monitor";
var betor = palavras.split(", ");
console.log(insertionSort(betor));
