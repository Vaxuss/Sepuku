#include <iostream>
#include <ctime>

using namespace std;

int main()
{
    srand(time(NULL));
    int plansza[9][9];
    int liczby[9];
    int liczbypowtorzone[10];
    int k = 0;
    int a = 0;

    for (int i = 0; i < 9; i++)
    {
        liczby[i] = 0;
    }

    for (int i = 0; i < 10; i++)
    {
        liczbypowtorzone[i] = 0;
    }

    while (a < 9)
    {
        k = rand() % 9 + 1;
        if (liczbypowtorzone[k] == 0)
        {
            liczby[a] = k;
            liczbypowtorzone[k]++;
            a++;
        }
    }

    for (int i = 0; i < 9; i++)
    {
        cout << liczby[i] << " ";
    }




}
