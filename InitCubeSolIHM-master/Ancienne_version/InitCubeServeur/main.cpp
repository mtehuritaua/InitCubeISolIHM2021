/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   main.cpp
 * Author: snir2g1
 *
 * Created on 28 mars 2019, 10:34
 */

#include <cstdlib>
#include "InitCubeServeur.h"
void* ThreadConnexion(void*);
void* ThreadEnvoyerTrame(void*);


using namespace std;

/*
 *
 */
int main(int argc, char** argv) {
	/*******************Déclaration des Threads**********************************/
	pthread_t threadConnexion, threadEnvoyerTrame;//Déclaration du thread de connexion et de lecture 
	int err_threadConnexion, err_threadEnvoyerTrame;//entier pour récupérer les erreurs des threads
/*******************Ouverture port série***********************************/
	err_threadConnexion = pthread_create( &threadConnexion, NULL, ThreadConnexion, NULL);//Création du thread d'attente de connexion
	err_threadEnvoyerTrame = pthread_create( &threadEnvoyerTrame, NULL, ThreadEnvoyerTrame, NULL);//Création du thread de lecture et d'envoi
	pthread_join(threadConnexion, NULL);
   	pthread_join(threadEnvoyerTrame, NULL);
	return 0;
        
    
}

