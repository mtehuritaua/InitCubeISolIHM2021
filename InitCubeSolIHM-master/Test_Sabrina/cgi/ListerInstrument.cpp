#include <iostream>

int main() {
    std::cout << "Content-Type: text/html" << std::endl << std::endl;

    std::cout << R"({ "nom": "Thermomètre","identifiant":"THE","ref":"Thermometre","adresse":"0x54","role":"Mesurer la température","listeTypesMesure":[{"nom":"Température","code":"TC","description":"Mesurer la température","unite":"°C","valMax":"200","valMin":"-200"}]})" << std::endl;

    std::cout << R"({"nom":"Camera infrarouge","identifiant":"123BCD","ref":"CamInfra","adresse":"0x69","role":"mesurer une temperature","listeTypesMesure":[{"nom":"temperature","code":"TC","description":"Température de l'objet mesuré","unite":"°C","valMax":"90","valMin":"-40"},{"nom":"matrice","code":"PIX","description":"Matrice d'une température de l'objet mesuré","unite":"°C","valMax":"90","valMin":"-40"}]})" << std::endl;

    std::cout << R"({"nom":"Magnétomètre","identifiant":"124BCD","ref":"Magnetometre","adresse":"0x0C","role":"Mesurer un champ magnétique","listeTypesMesure":[{"nom":"BX","code":"BX","description":"Champ magnetique suivant X","unite":"μT","valMax":"100","valMin":"0"},{"nom":"BY","code":"BY","description":"Champ magnetique suivant Y","unite":"μT","valMax":"100","valMin":"0"},{"nom":"BZ","code":"BZ","description":"Champ magnetique suivant Z","unite":"μT","valMax":"100","valMin":"0"}]})";
}