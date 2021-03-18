#ifndef CGICOMMANDECLIENT_H
#define CGICOMMANDECLIENT_H

#include <string.h>
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <cstdlib>
#include "Communication.h"

using namespace std;

class CgiCommandeClient {
public:
    CgiCommandeClient();
    CgiCommandeClient(string adresse, string port);
    virtual ~CgiCommandeClient();
    void transmettreEntete();
    void recupererCommande();
    void transmettreCommande();
    
    
private:
    Communication* com;
    string commande;
    bool attendreAck();
};

#endif /* CGICOMMANDECLIENT_H */

