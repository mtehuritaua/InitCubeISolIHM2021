/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   InitCubeServeur.cpp
 * Author: snir2g1
 * 
 * Created on 28 mars 2019, 10:34
 */

#include "InitCubeServeur.h"

#define NB_CLIENT_MAX 20

InitCubeServeur::InitCubeServeur() {
    ecoute.sin_port=htons(9927);//port d'écoute.
	ecoute.sin_addr.s_addr=inet_addr("127.0.0.1");
	ecoute.sin_family=AF_INET;
	canal=socket(AF_INET, SOCK_STREAM,0);//Création de la socket
	if(canal<0){
		close(canal);
		perror("Erreur de creation de la socket.");
		exit(0);
	}

	if(bind(canal,(struct sockaddr*)&ecoute, sizeof(ecoute))<0){//Attachement de la socket
		close(canal);
		perror("Erreur d'attachement de la socket.");
		exit(0);
	}
}
void InitCubeServeur::attendreConnexion(){
    if(listen(canal, NB_CLIENT_MAX)<0){//Ecoute du canal de la socket
		close(canal);
		perror("Erreur d'ecoute de la socket.");
		exit(0);
	}
    cout<<"En Attente De Connexion:"<<endl;
    socklen_t taille_ecoute = sizeof(ecoute);//Taille de la socket
    sockAccept=accept(canal,(struct sockaddr*)&ecoute, &taille_ecoute);//bloque l'attente de connexion.
    cout<<"Connexion du client:\r\n"<<endl;

    if(sockAccept<0){
            close(canal);
            perror("Erreur d'acceptation de la socket.");
            exit(0);
    }
    connexions.push_back(sockAccept);

}


void InitCubeServeur::trasmettre(char* message, int taille)
{
    for(int i=0; i<connexions.size(); i++)
    {
        int envoyer =send(connexions[i], message,taille,0);
        /*int reception = recv(connexions[i],taille, 0);
        if(reception==0)
        {
                close(connexions[i]);
                connexions.erase(connexions.begin()+i);
                i--;
        }*/
    }
}




InitCubeServeur::~InitCubeServeur() {
    close(canal);
}

