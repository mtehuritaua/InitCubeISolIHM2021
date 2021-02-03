#include "Communication.h"
#ifndef CUBEEVENTSERVER_H
#define CUBEEVENTSERVER_H

class CubeEventServer { 
public:
    void transmettreEntete();
    void transmettreEtat(char* message);
    void traiterEvenement();
	void lancerInitCubeServeur();
    CubeEventServer(string adresse,string port);
    CubeEventServer(const CubeEventServer& orig);
    virtual ~CubeEventServer();
private:
    Communication* com ;
};

#endif /* CUBEEVENTSERVER_H */
