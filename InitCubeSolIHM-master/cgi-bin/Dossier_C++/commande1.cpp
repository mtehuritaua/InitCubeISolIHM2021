#include <iostream>
#include <stdio.h>
#include <errno.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <arpa/inet.h>
#include <netinet/in.h>
#include <strings.h>
#include "CubeCommandeServer.h"

<<<<<<< HEAD
#define CHEMIN = "/var/www/InitCubeCommande/"
=======
#define CHEMIN = "/var/www/InitCubeCommande"
>>>>>>> b6ad2021fd05f1fb80df6195bc5fb49c703fa2a9
#define ADRESSE "127.0.0.1"
#define PORT "9925"

using namespace std;

//=================================================================================
// corps du CGI
//=================================================================================
int main(){


	CubeCommandeServer* comServeur = new CubeCommandeServer(ADRESSE, PORT);
	comServeur->transmettreEnTete();
	char data[4096];
	strcpy(data, getenv("QUERY_STRING"));
	usleep(1000000);
	if (data != NULL){
		comServeur->envoieMessage(data);
	}else {
		comServeur->envoieMessage("erreur");
	}
	// comServeur->envoieMessage("Bonjour")
	
	// comServeur->traiterEvenement();
	
    return 0;
    
}
//=================================================================================

// string adresse = "127.0.0.1";
	// const char *c = adresse.c_str();

	// int fd, tcp_port, i, ret;	
	// struct sockaddr_in dest;
	// char buf[1024] = "Bonjour";
	// char* data;	


	// //creation du socket
	// fd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	// if(fd < 0){
	// 	cout << "C'est un échec"<<endl;
	// 	return 0;
	// }
	// bzero(&dest, sizeof(dest));
	// dest.sin_family = AF_INET;
	// tcp_port = 9925;
	// dest.sin_port = htons(tcp_port);
	// inet_aton(c, &dest.sin_addr);

	// // Connection au serveur
	// for(i = 0; i < 3; i++){
	// 	ret = connect(fd, (struct sockaddr*)&dest, sizeof(dest));
	// 	cout << "tentative " << i <<endl;
	// 	if(ret == 0){
	// 		cout << "connection ok frere" <<endl;
	// 		break;
	// 	}
	// }

	// if (i == 3){
	// 	cout << "connection refuser"<<endl;
	// }

	// //Envoi des données 
	// while(1){
	// 	cout << "Content-Type: text/html\r\n\r\n";
	// 	send(fd, buf, sizeof(buf), 0);
	// 	cout << "Si tout va bien, tu l'as envoyer bg. La donne est la suivante : " << buf << endl;
	
	// cout << "Content-Type: text/html\r\n\r\n";
 //    char* data = getenv("QUERY_STRING");    // récupération de la requete GET dans stdin
 //    string dt = (string)data;               // conversion en string
 //    sendto(socket, dt, dt.size(), );

    //size_t pos = dt.find("cmd=");			
    //string cmd = dt.substr (pos + 4,dt.length() -4 );
    // cout<< data << "" << endl;


