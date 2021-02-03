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
	wiringPiSetup () ;
   	pinMode (0, OUTPUT) ;
	val = digitalRead(0);
	if (val == HIGH)
	{
		digitalWrite (0,LOW);
		cout<<"led eteinte";
	}
	else
	{
		digitalWrite(0,HIGH);
		cout<<"led allumer";
	}
	return 0;
}

