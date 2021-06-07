#include <cstdlib>
#include <iostream>

#include "CgiCommandeClient.h"

using namespace std;

int main(int argc, char** argv) {
    CgiCommandeClient * test = new CgiCommandeClient("127.0.0.1","9951");
    test->transmettreEntete();
    test->recupererCommande();
    test->transmettreCommande();
    delete test;
    return 0;
}

