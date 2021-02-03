#include <iostream>
#include <stdlib.h>
using namespace std;

const string ENV[ 1 ] = {"QUERY_STRING"};   

int main () {
   cout << "Content-type:text/html\r\n\r\n";
   cout << "<html>\n";
   cout << "<head>\n";
   cout << "<title>Envoie de commande au cubsat</title>\n";
   cout << "</head>\n";
   cout << "<body>\n";
   cout << "<table border = \"0\" cellspacing = \"2\">";

   for ( int i = 0; i < 1; i++ ) {
      // on choisie la variable d'environnement
      char *value = getenv( ENV[ i ].c_str() );  
      if ( value != 0 ) {
         cout << "Commande envoyee";                                 
      }
      cout << "</td></tr>\n";
   }
   
   cout << "</table><\n";
   cout << "</body>\n";
   cout << "</html>\n";
   
   return 0;
}
