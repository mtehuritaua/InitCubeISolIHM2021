#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
	cout << "Content-type: text/html\r\n\r\n";

	cout << getenv("QUERY_STRING");
}
