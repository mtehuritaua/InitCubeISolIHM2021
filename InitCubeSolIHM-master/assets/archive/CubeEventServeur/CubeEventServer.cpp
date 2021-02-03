#include <iostream>
#include <unistd.h>
#include "CubeEventServer.h"

using namespace std ;

CubeEventServer::CubeEventServer(string adresse,string port){
	com = new Communication(adresse,port); 
}
 
CubeEventServer::CubeEventServer(const CubeEventServer& orig) {
}

CubeEventServer::~CubeEventServer() {
	delete com;
}

void CubeEventServer::transmettreEntete()
{
	cout << "Content-Type: text/event-stream\r\n";
	cout << "Cache-Control: no-cache\r\n";
}

void CubeEventServer::transmettreEtat(char* message)
{
	     /*  	cout << "Event: etat\r\n\r\n";
			//Format JSON*/ 
		cout << "data:" << message <<"\r\n" << endl ;
}

void CubeEventServer::traiterEvenement()
{
	//Si le serveur répond, on transmet les données reçues    
	if (com->recevoirDonnees() > 0) 
    	this->transmettreEtat(com->getBuffer());
	//sinon, on relance le serveur	
	else 
	{
		com->lancerInitCubeServeur();
		usleep (2000000);	
		com->connexion();
	}
}
