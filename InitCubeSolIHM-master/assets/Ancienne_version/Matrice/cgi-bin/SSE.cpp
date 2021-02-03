#include <iostream>
#include <unistd.h>
using namespace std;

int main()
{
        int number = 0;
        cout << "Content-Type: text/event-stream\r\n\r\n";
        cout << "Cache-Control: no-cache\r\n\r\n";
        for (int i=0 ; i<10;i++)
        {
                cout << "data:" << "{\"temp\":"<<number++<<",\"matrice\":["number++<<","<<number+2<<","<<number+3<<","<<number+4<<"]}" "\r\n\r\n" <<endl;

                usleep(1000000);
        }
        return 0;
}

