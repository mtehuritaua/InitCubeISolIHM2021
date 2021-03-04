CFLAGS=-W -Wall -ansi -pedantic -std=c++11

all: InitCubeServeur

InitCubeServeur: InitCubeServeur.o
		g++ -lpthread -o InitCubeServeur InitCubeServeur.o $(CFLAGS)
InitCubeServeur.o: InitCubeServeur.cpp Communication.cpp
		g++ -lpthread -o InitCubeServeur.o -c InitCubeServeur.cpp  $(CFLAGS)
CubeEventServer.o: CubeEventServer.cpp Communication.cpp
		g++ -lpthread -o CubeEventServer.o -c CubeEventServer.cpp  $(CFLAGS)
Communication.o: Communication.cpp 
		g++ -lpthread -o Communication.o -c Communication.cpp $(CFLAGS)
clean: 
		rm -rf *.o
mrproper: clean
		rm -rf InitCubeServeur

