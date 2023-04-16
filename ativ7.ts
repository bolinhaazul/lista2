function selectionSort<T>(vetor: String[]) {
  const inicio = new Date().getTime();
  let count = 0;
  for (let i = 0; i < vetor.length; i++) {
    let min = i;
    for (let j = i + 1; j < vetor.length; j++) {
      const aux1 = vetor[j];
      const aux2 = vetor[min];
      if (aux1.length < aux2.length) {
        min = j;
      }
    }
    const aux = vetor[min];
    vetor[min] = vetor[i];
    vetor[i] = aux;
    count++;
    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${count} movimentos, em ${
    tempoExecucao / 1000
  } segundos e o vetor resultado e ${vetor}`;
}
const vitor = "abracadabra, feijao, garrafa, animal";
const gerson = vitor.split(", ");
console.log(selectionSort(gerson));
