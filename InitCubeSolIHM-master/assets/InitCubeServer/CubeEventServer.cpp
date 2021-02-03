#include <iostream>
#include <unistd.h>
#include "CubeEventServer.h"

using namespace std ;

CubeEventServer::CubeEventServer(string adresse,string port){
	com = new Communication(adresse,port);
	trameEtat = "-1";
	trameInstru = "-1"; 
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

void CubeEventServer::transmettreJSON(char* evt){
	switch(evt){
		case 'etat':
			cout << "event: etat"<<"\n";
			cout << "data: "<< trameEtat;
			// com->envoieMessage(trameEtat);
			break;
		case 'instrument' :
			cout << "event: instrument"<<"\n";
			cout << "data: "<< trameInstru;
			// com->envoieMessage(trameInstru);
			break;
		default :
			cout << "error: aucune trame"
			// com->envoieMessage('-1');
			break;
	}
}

void CubeEventServer::traiterEvenement()
{
	//Si le serveur répond, on transmet les données reçues    
	if (com->recevoirDonnees() > 0){
		string message(com->recevoirDonnees());
		identifierEvt(message);
		transmettreJSON('etat');
		transmettreJSON('instrument');
		transmettreJSON('Measure');
	} 
    	// this->transmettreEtat(com->getBuffer());
    	
	//sinon, on relance le serveur	
	else 
	{
		com->lancerInitCubeServeur();
		usleep (2000000);	
		com->connexion();
	}
}

void CubeEventServer::identifierEvt(string message){
	long posRepaire = static_cast<long>(message.find("kohngdvbe"));

	//find la chaine de caractere correspondante a la trame etat
	long posEtat = static_cast<long>(message.find("etat")-1);
	size_t tailleEtat = static_cast<size_t>(posEtat - posRepaire);


	//find la chaine de caractere correspondante a la trame instrument
	long posInstru = static_cast<long>(meesage.find("instrument")-1); 
	size_t tailleInstru = message.length() - static_cast<size_t>(posInstru);




	trameEtat = message.substr(posEtat, tailleEtat).c_str();
	trameInstru = message.substr(posInstru, tailleInstru).c_str();
}


