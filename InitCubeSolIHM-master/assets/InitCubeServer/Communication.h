#ifndef COMMUNICATION_H  
#define COMMUNICATION_H
#include "Lib.h"

using namespace std;

class Communication {
public:
    Communication(string adresse,string port);
    virtual ~Communication();
    int connexion();
    void lancerInitCubeServeur();
    void envoieMessage(const char* m);
    int recevoirDonnees();
    char* getBuffer();
private:
    int socket_id;
    string adresse;
    string port;
    char buffer[2000];
    struct addrinfo hints, *res;
};

#endif /* COMMUNICATION_H */
