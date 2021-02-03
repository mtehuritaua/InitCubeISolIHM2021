#include <iostream>
#include <unistd.h>
#include <stdlib.h>
#include <ctime>
#include "Serial.h"

using namespace std;

//=================================================================================
// corps du CGI
//=================================================================================
int main() {
    cout << "Content-type: text/html\n\n";
    char* data = getenv("QUERY_STRING");    // récupération de la requete GET dans stdin
    string dt = (string)data;               // conversion en string
    size_t pos = dt.find("cmd=");
    string cmd = dt.substr (pos + 4, dt.length()-4);
    string message;
    Serial maLiaisonSerie("/dev/ttyAMA0", 9600);
    maLiaisonSerie.writeString(cmd+"\n \r");
    //calcul de la date actuelle
    time_t now = time(0); 
    // convertion de la date en chaîne de caractère
    char* date = ctime(&now);
    cout <<  cmd << " | " << date << endl;
    return 0;
}
//=================================================================================



