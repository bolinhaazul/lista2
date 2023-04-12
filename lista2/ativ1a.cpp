#include <iostream>
#include <windows.h>

using namespace std;

void funcao_a(int v[], int n)
{
  int i, j, x;
  for (i = 1; i < n; i++)
  {
    x = v[i];
    j = i - 1;
    while (j >= 0 && v[j] > x)
    {
      v[j + 1] = v[j];
      j--;
    }
    v[j + 1] = x;
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
  funcao_a(vetor, 10);
}

// INSERTION SORT