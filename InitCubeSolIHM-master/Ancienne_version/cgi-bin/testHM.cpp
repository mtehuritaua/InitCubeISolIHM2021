#include <iostream>
#include <unistd.h>
#include <wiringPi.h>
#include "Serial.h"

using namespace std;
int val = 0;
int main()
{
	cout << "Content-Type: text/html\r\n\r\n";
	string message;
        Serial maLiaisonSerie("/dev/ttyAMA0", 9600);
        maLiaisonSerie.writeString("Envoi d'une commande\n\r");
	cout << ""<<endl; 
	return 0;
}

