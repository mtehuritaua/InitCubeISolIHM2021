#include "Lib.h"
#include "InitCubeServeur.h"

void* ThreadConnexion(void *);
void* ThreadEnvoyerTrame(void *);

using namespace std;

/*Variables globales*/
 InitCubeServeur* serveur= new InitCubeServeur();

/*Thread d'attente de connexion*/
void* ThreadConnexion(void *){
/***********************Création de la socket pour la communication avec le CGI****************************/
		cout<<"Connexion : "<<endl;
		
	while(1)//Appel la methode d'écoute du serveur en boucle
		serveur -> attendreConnexion();
}


/*Thread de lecture du port série et de mise en forme des trames*/
void* ThreadEnvoyerTrame(void *){
	int value =10;
	ostringstream flux;
	
	cout<<"Connexion client"<<endl;
	//char message[1024]; 

		//tranformation du flux en chaîne de caractère et affichage
		cout << "Chaine : " << flux.str() << endl; 
	

	 //"{\"etat\":2,\"batterie\":8,\"memoire\": 11, \"temp\": 32}\r\n"; 
	time_t now;
	tm* ltm ;
	while(1){
		now=time(0);
		ltm = localtime(&now);
		flux << "{\"date\":\""
			<< ltm->tm_hour
			<<":"
			<< ltm->tm_min
			<< ":"
			<< ltm->tm_sec
			<<"\",\"etat\":"
		//état : 0 ou 1 
			<< rand()%2 
			<< ",\"batterie\":"
		//batterie : valeur aléatoire comprise entre 0 et 100 %
			<< rand()%101
			<< ",\"memoire\":"
		//mémoire : valeur aléatoire comprise entre 0 et 100%
			<< rand()%101
			<< ",\"temp\":"
		//température
			<< rand()%61
			<<",\"temp1\":"
		//temperature1
			<<rand()%61
			<<",\"temp2\":"
			<<rand()%61
		//temperature2
			<<",\"temp3\":"
			<<rand()%61
		//temperature3
			<< "}"<<endl;
			

/****************************Envoi d'une trame**************************/
		serveur->trasmettre((char*)flux.str().c_str(), flux.str().size());
		flux.str("");
		usleep (5000000);  
	
	}
}
