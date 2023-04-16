#include <iostream>
#include <vector>
#include <windows.h>

using namespace std;

void funcao_c(int v[], int n)
{
  int i, j, aux;
  for (i = n - 1; i > 0; i--)
  {
    for (j = 0; j < i; j++)
    {
      if (v[j] > v[j + 1])
      {
        aux = v[j];
        v[j] = v[j + 1];
        v[j + 1] = aux;
        for (int k = 0; k < n; k++)
        {
          cout << v[k] << " ";
        }
        cout << endl;
      }
    }
  }
}

int main()
{
  int vetor[10] = {7, 8, 1, 5, 2, 3, 9, 10, 4, 0};
  funcao_c(vetor, 10);
}
