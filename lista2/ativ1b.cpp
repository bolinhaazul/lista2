#include <iostream>
#include <vector>
#include <windows.h>

using namespace std;

void funcao_b(int v[], int n)
{
  int i, j, aux, min;
  for (i = 0; i < n - 1; i++)
  {
    min = i;
    for (j = i + 1; j < n; j++)
    {
      if (v[j] < v[min])
      {
        min = j;
      }
    }
    aux = v[i];
    v[i] = v[min];
    v[min] = aux;
    for (int k = 0; k < n; k++)
    {
      cout << v[k] << " ";
    }
    cout << endl;
  }
}

int main()
{
  int vetor[10] = {7, 8, 1, 5, 2, 3, 9, 10, 4, 0};
  funcao_b(vetor, 10);
}

// SELECTION SORT