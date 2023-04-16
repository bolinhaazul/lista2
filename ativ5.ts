function bubbleSort<T>(vetor: T[]) {
  let aux: any;
  let movimentos = 0;
  const inicio = new Date().getTime();
  console.log(inicio);
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length; j++) {
      if (vetor[i] < vetor[j]) {
        aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        movimentos++;
      }
    }

    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${movimentos} movimentos, em ${
    tempoExecucao / 1000
  } segundos`;
}
let palavra = "palavra";
var vetor = palavra.split("");
console.log(bubbleSort(vetor));
