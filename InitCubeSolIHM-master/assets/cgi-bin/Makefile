CFLAGS=-W -Wall -ansi -pedantic

all: cubeEventServer.cgi

cubeEventServer.cgi : eventPrincipale.o
		g++ -lpthread -o cubeEventServer.cgi eventPrincipale.o $(CFLAGS)
eventPrincipale.o : eventPrincipale.cpp
		g++ -lpthread -o eventPrincipale.o -c eventPrincipale.cpp $(CFLAGS)
clean : 
		rm -rf *.o
mrproper: clean
		rm -rf InitCubeServeur

