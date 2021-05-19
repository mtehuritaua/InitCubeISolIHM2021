#include <iostream>
#include <unistd.h>
#include "CubeCommandeServer.h"

using namespace std ;

CubeCommandeServer::CubeCommandeServer(string adresse,string port){
	com = new Communication(adresse,port); 
}

CubeCommandeServer::~CubeCommandeServer(){

}

void CubeCommandeServer::transmettreEnTete(){
	cout << "Content-Type: text/html\r\n";
	cout << "Cache-Control: no-cache\r\n\n";
}

void CubeCommandeServer::traiterEvenement(){
	//Si le serveur répond, on transmet les données reçues

	this->envoieMessage(getenv("QUERY_STRING"));
	
	//sinon, on relance le serveur	
	// else 
	// {
	// 	com->lancerInitCubeServeur();
	// 	usleep (2000000);	
	// 	com->connexion();
	// }
}

void CubeCommandeServer::envoieMessage(const char* m){
	com->envoieMessage(m);
}

