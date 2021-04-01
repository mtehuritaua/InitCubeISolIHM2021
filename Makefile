CXX		  := g++
CXX_FLAGS := -Wall -Wextra -std=c++17 -ggdb

CGIHC 	:= codeCpp/CgiHistoriqueCommande
BIN		:= $(CGIHC)/bin
SRC		:= $(CGIHC)/src
INCLUDE	:= $(CGIHC)/include
LIB		:= $(CGIHC)/lib

LIBRARIES	:=
EXECUTABLE	:= main


all: $(BIN)/$(EXECUTABLE)

run: clean all
	clear
	./$(BIN)/$(EXECUTABLE)

$(BIN)/$(EXECUTABLE): $(SRC)/*.cpp
	$(CXX) $(CXX_FLAGS) -I$(INCLUDE) -L$(LIB) $^ -o $@ $(LIBRARIES)

clean:
	-rm $(BIN)/*
