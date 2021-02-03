
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
	srand((unsigned)time(NULL));
	int premiereValeurMagneto=(rand() % (4800 - (-4800) + 1)) - 4800;
	int deuxiemeValeurMagneto=(rand() % (4800 - (-4800) + 1)) - 4800;
	int troisiemeValeurMagneto=(rand() % (4800 - (-4800) + 1)) - 4800;

	while(1){

		// Ouverture de l'objet stockage dans le JSON
		flux <<"{\"stockage\": { "

				// Stockage libre en Mo(Valeur comprise entre 0 et 100) 
				<<"\"stockLibreMo\" :"<<rand()%101 << ","				

				//Stockage libre en pourcentage(Valeur comprise entre 0 et 100)
				<<"\"stockLibreEnP\" :"<<rand()%101 << "},"			


			//Ouverture de l'objet batterie dans le JSON
			<<"\"batterie\" : {"

				//Le niveau de charge de la batterie en pourcentage(Valeur comprise entre 0 et 100)
				<<"\"niveauDeCharge\" : "<<rand()%101<<","				

				//La tension de sortie de la batterie (Valeur comprise entre 0 et 100)
				<<"\"tension\" : "<<rand()%101<<","				

				//Le courant en sortie de batterie(Valeur comprise entre 0 et 100)
				<<"\"courant\" : "<<rand()%101
				<<"},"


			//Ouverture de l'objet memoire
			<<"\"memoire\" : { "

				//RAM disponible en Mo(Valeur comprise entre 0 et 100) 
				<<"\"memoireDispoMo\" : " 
				<<rand()%101<<","

				//Occupation de la RAM en pourcentage(Valeur comprise entre 0 et 100)
				<<"\"occupMemoire\" : "
				<<rand()%101<<"},"

			//Ouverture de l'objet magneto dans le JSON
			<<"\"magneto\" : {"

				//Le niveau de charge de la batterie en pourcentage(Valeur comprise entre 0 et 100)
				//Magnetomètre
            <<"\"ValeurMagnetoBX\":"
            <<premiereValeurMagneto<<","

            //Magnetomètre
            <<"\"ValeurMagnetoBY\":"
            <<deuxiemeValeurMagneto<<","

            //Magnetomètre
            <<"\"ValeurMagnetoBZ\":"
            <<troisiemeValeurMagneto<<"},"

				//Ouverture de l'objet camera
			<<"\"camera\" : { "

				<<"\"InfoCamera1\" : "<<rand()%101<<","

            	//Caméra
            	<<"\"InfoCamera2\" : "<<rand()%101
            	<<"},"

			//température0
			<< "\"temp\":"
			<< rand()%61<<","

			//température1
			<<"\"temp1\":"
			<<rand()%61<<","

			//température2
			<<"\"temp2\":"
			<<rand()%61<<","

			//temperature3
			<<"\"temp3\":"
			<<rand()%61<<","

			//temperature4
			<<"\"temp4\":"
			<<rand()%61<<","

			//camera
			<<"\"cameraIR\":"
			<<rand()%2

     << "}"<<endl;
			

/****************************Envoi d'une trame**************************/
		serveur->trasmettre((char*)flux.str().c_str(), flux.str().size());
		flux.str("");
		usleep (5000000);  	
	}
}
