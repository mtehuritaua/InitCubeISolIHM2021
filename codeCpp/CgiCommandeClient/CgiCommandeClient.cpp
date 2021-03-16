#include <iostream>
#include <unistd.h>
#include "CgiCommandeClient.h"

CgiCommandeClient::CgiCommandeClient() {
}

CgiCommandeClient::CgiCommandeClient(string adresse, string port) {
    com = new Communication(adresse, port);
    com->connexion();
}

CgiCommandeClient::~CgiCommandeClient() {
    delete com;
}

void CgiCommandeClient::transmettreEntete() {
    cout << "Content-Type: text/html\r\n\r\n";
    cout << "Cache-Control: no-cache\r\n\r\n";
}

void CgiCommandeClient::recupererCommande() {
    commande = getenv("QUERY_STRING");
}

void CgiCommandeClient::transmettreCommande(){
    com->envoyerMessage(commande);
    if(attendreAck() == true){
        cout << "ACK" << endl;
    }
    else{
        cout << "NACK" << endl;
    }
}

bool CgiCommandeClient::attendreAck(){
    com->recevoirDonnees();
    if(com->getBuffer() == "ACK" ){
        return true;
    }
    else{
        return false;
    }
}
