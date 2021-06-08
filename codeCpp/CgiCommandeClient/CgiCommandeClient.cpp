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
    cout << "Content-Type: text/html" << endl << endl;
    //cout << "Cache-Control: no-cache\r\n\r\n";
}

void CgiCommandeClient::recupererCommande() {
    //commande = getenv("QUERY_STRING");
    getline(cin, commande);
}

void CgiCommandeClient::transmettreCommande(){
    com->envoyerMessage(commande);
    if(attendreAck() == true){
        cout << "ACK" ;

    }
    else{
        cout << "NACK";
    }
}

bool CgiCommandeClient::attendreAck(){
    com->recevoirDonnees();
    string test = com->getBuffer();
    if(test == "ACK" ){
       
        return true;
    }
    else{
        return false;
    }
}
