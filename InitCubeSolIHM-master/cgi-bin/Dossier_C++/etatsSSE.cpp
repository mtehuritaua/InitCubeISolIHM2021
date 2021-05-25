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
	   	 cout<< "Event:etat\r\n\r\n";
		//cout << "data:"<<number++<<"\r\n\r\n" <<endl;
		//Format JSON on envoie 2valeurs number et number+3
		cout<< "data:"<<"{\"etat\":"<<number++<<",\"batterie\":"<<number+3<<",\"memoire\":"<<number+6<<",\"temp\":"<<number+5<<",\"temp1\":"<<number+2<<",\"temp2\":"<<number+7<<",\"temp3\":"<<number+9<<"}""\r\n\r\n"<<endl;
		usleep(1000000);
	}
	return 0;
}
