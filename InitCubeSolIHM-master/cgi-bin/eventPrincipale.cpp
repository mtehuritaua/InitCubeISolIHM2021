#include "Lib.h"
#include "CubeEventServer.h"
#define ADRESSE "127.0.0.1"
#define PORT "9950"
using namespace std;

int main(){

	CubeEventServer evtServer = new CubeEventServer(ADRESSE,PORT);


	evtServer->transmettreEntete();

	while(1){
		evtServer->traiterEvenement();
	}
	

			
}