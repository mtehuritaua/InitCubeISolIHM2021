#include <iostream>
#include "Serial.h"

using namespace std;

int main()
{
	string message;	
	Serial maLiaisonSerie("/dev/ttyAMA0", 9600);
	

		message = maLiaisonSerie.readLine();
		cout << "Message reçu : "<< message <<endl;
	
	return 0;
}
