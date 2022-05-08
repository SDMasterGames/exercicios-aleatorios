#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>

int concat(int a, int b)
{

    char number1[2];
    char number2[2];

    // Convert both the integers to string
    sprintf(number1, "%d", a);
    sprintf(number2, "%d", b);

    // Concatenate both strings
    strcat(number1, number2);

    // Convert the concatenated string
    // to integer
    int c = atoi(number1);

    // return the formed integer
    return c;
}

int main()
{
    int N = 1000;
    int M = 9999;
    while (N <= M)
    {
        int arr[4];
        int r;
        int i = 0;
        int temp = N;
        while (temp != 0)
        {            
            r = temp % 10;
            arr[i] = r;
            i++;
            temp = temp / 10;
        }
        int valor1 = concat(arr[3], arr[2]);
        int valor2 = concat(arr[1], arr[0]);
        int quadrado = pow(valor1 + valor2, 2);
        if (quadrado == N)
        {
            printf("%d\n", N);
        }

        N++;
    }
    return 0;
}