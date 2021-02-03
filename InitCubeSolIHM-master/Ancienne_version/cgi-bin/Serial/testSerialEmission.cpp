#include <iostream>
#include "Serial.h"

using namespace std;
	
	
int main(){


string message;	
	Serial maLiaisonSerie("/dev/ttyAMA0", 9600);
	while (1)
	{
		usleep (1000000);
		maLiaisonSerie.writeString("Bonjour\n \r");
	}
	return 0;






}
