#include "Lib.h"
#include "InitCubeServeur.h"


void* ThreadConnexion(void *);
void* ThreadEnvoyerTrame(void *);

using namespace std;

/*Variables globales*/
 InitCubeServeur* serveur= new InitCubeServeur();

int main()
{
	pthread_t threadConnexion;
	pthread_t threadEnvoyerTrame;
	int err_threadConnexion;
	int err_threadEnvoyerTrame;
	err_threadConnexion = pthread_create(&threadConnexion,NULL,ThreadConnexion,NULL);
	err_threadEnvoyerTrame = pthread_create(&threadEnvoyerTrame,NULL,ThreadEnvoyerTrame,NULL);
	pthread_join(threadConnexion, NULL);
   	pthread_join(threadEnvoyerTrame, NULL);
	return 0;
}

/*Thread d'attente de connexion*/
void* ThreadConnexion(void *){
	while(1)//Appel la methode d'écoute du serveur en boucle
		serveur -> attendreConnexion();
}


/*Thread de mise en forme des trames*/
void* ThreadEnvoyerTrame(void *){
	while(1) {
		//génération de la fausse trame d'état		
		std::string fakeTrameEtat = serveur->genFakeStateFrame()+"\r\n";
		//Envoi de la fausse trame
		serveur->transmettre((char*)fakeTrameEtat.c_str(), fakeTrameEtat.length());
		//temporisation
		usleep (1000000);
  
		//génération de la fausse trame de mesure instrument		
		std::string fakeTrameMatrice = serveur->genFakeMatriceFrame()+"\r\n";
		//Envoi de la fausse trame
		serveur->transmettre((char*)fakeTrameMatrice.c_str(), fakeTrameMatrice.length());
		//temporisation
		usleep (1000000);
		
		//génération de la fausse trame de mesure instrument            
                std::string fakeTrameMagneto = serveur->genFakeMagnetoFrame()+"\r\n";
                serveur->transmettre((char*)fakeTrameMagneto.c_str(), fakeTrameMagneto.length());
                usleep (1000000);


		//génération de la fausse trame d'état          
                fakeTrameEtat = serveur->genFakeStateFrame()+"\r\n";
                //Envoi de la fausse trame
                serveur->transmettre((char*)fakeTrameEtat.c_str(), fakeTrameEtat.length());
                //temporisation
                usleep (1000000);

		//génération de la fausse trame de mesure instrument            
                fakeTrameMatrice = serveur->genFakeHotMatriceFrame()+"\r\n";
                //Envoi de la fausse trame
                serveur->transmettre((char*)fakeTrameMatrice.c_str(), fakeTrameMatrice.length());
                //temporisation
                usleep (1000000);
		//génération de la fausse trame de mesure instrument            
		fakeTrameMagneto = serveur->genFakeMagnetoFrame()+"\r\n";
		serveur->transmettre((char*)fakeTrameMagneto.c_str(), fakeTrameMagneto.length());
		usleep (1000000);

		//génération de la fausse trame d'état          
                fakeTrameEtat = serveur->genFakeStateFrame()+"\r\n";
                //Envoi de la fausse trame
                serveur->transmettre((char*)fakeTrameEtat.c_str(), fakeTrameEtat.length());
                //temporisation
                usleep (1000000);

                //génération de la fausse trame de mesure instrument            
                fakeTrameMatrice = serveur->genFakeColdMatriceFrame()+"\r\n";
                //Envoi de la fausse trame
                serveur->transmettre((char*)fakeTrameMatrice.c_str(), fakeTrameMatrice.length());
                //temporisation
                usleep (1000000);
                //génération de la fausse trame de mesure instrument            
                fakeTrameMagneto = serveur->genFakeMagnetoFrame()+"\r\n";
                serveur->transmettre((char*)fakeTrameMagneto.c_str(), fakeTrameMagneto.length());
                usleep (1000000);



	}
}
