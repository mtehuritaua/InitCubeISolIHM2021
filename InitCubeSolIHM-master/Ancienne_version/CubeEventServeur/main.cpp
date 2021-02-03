#include <iostream>
#include <unistd.h>
#include "Communication.h"
#include "CubeEventServer.h"
#include <cstdlib>

#define ADRESSE "127.0.0.1"
#define PORT "9927"

using namespace std;

int main()
{
    CubeEventServer* cubeserver = new CubeEventServer(ADRESSE,PORT);
    cubeserver->transmettreEntete();
    while (1)
    {
        cubeserver->traiterEvenement();
    }
    return 0;
}
