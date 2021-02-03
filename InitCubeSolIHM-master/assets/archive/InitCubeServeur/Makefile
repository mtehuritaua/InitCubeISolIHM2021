all: InitCubeServeur

InitCubeServeur : InitCubeServeur.o main.o ThreadEnvoyerTrame.o
		g++ -lpthread -o InitCubeServeur InitCubeServeur.o main.o ThreadEnvoyerTrame.o
InitCubeServeur.o : InitCubeServeur.cpp
		g++ -lpthread -o InitCubeServeur.o -c InitCubeServeur.cpp -W -Wall -ansi -pedantic
main.o : main.cpp
		g++ -lpthread -o main.o -c main.cpp -W -Wall -ansi -pedantic
ThreadEnvoyerTrame.o : ThreadEnvoyerTrame.cpp
		g++ -lpthread -o ThreadEnvoyerTrame.o -c ThreadEnvoyerTrame.cpp
clean : 
		rm -rf *.o
mrproper: clean
		rm -rf InitCubeServeur

