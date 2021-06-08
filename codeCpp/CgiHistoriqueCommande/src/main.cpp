#include <iostream>

int main()
{
    std::cout << "Content-Type: text/html" << std::endl;
    

    std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MEASURE", "code": "TC" ,"dateEnvoi": "2021/03/25 10:58:21", "reponse":"non" }})" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MEASURE", "code": "PIX" ,"dateEnvoi": "2021/03/25 10:58:21", "reponse":"non"}})" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "STATUS" ,"dateEnvoi": "2021/03/25 10:58:21", "reponse":"non" }})" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MEASURE", "code": "PIX" ,"dateEnvoi": "2021/03/25 10:58:21", "reponse":"non"}})";


    //std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MEASURE", "refInstrument": "CamInfra", "code": "TC", "dateEnvoi": "2021/06/15 09:48:04", "reponse": { "mesure": { "code": "TC", "donnee": ["25.8"], "nom": "temperature", "unite": "°C" }}}})" << std::endl;
    //std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "STATUS", "options": { "periodicite": "10", "duree": "120",	"BORD": "true", "INST": "true", "BATT": "true", "REBOOT": "true", "CUBE": "true",}, "refInstrument": "CamInfra", "code":"TC", "dateEnvoi": "2021/05/18 18:37:48", {"status": {"batterie": {"Charge": "OUI", "CourantmA": "1295", "NiveauCharge%": "96", "Temperature": "38.0", "TensionV": "4.1"}, "bord": {"Date/heureBord": "2021/03/31 15:00:07", "OccupationRAM%":"4", "StockageSDLibreMo":"6152068", "Temperature": "51.5"}, "cube": { "Temperature": "197.4"}, "instrument": { "Marche": "ON", "Mode": "NORMAL", "Temperature": "28.8", "erreur": "NON" }}}}})" << std::endl;
    //std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MEASURE", "refInstrument": "CamInfra", "code": "TC", "dateEnvoi": "2021/02/01 15:26:17", "reponse": { "mesure": { "code": "TC", "donnee": ["36.7"], "nom": "temperature", "unite": "°C" }}}})" << std::endl;
    //std::cout << R"({ "CMD": { "idSatellite": "1", "typeCommande": "MISSION", "options" : {"dateExec": "2021/06/04 12:10:13", "periodicite": "10", duree": "120", save": "true"}, "refInstrument": "CamInfra", "code": "TC", "dateEnvoi": "0000/00/00 00:00:00", "reponse": {"mission": {"code": "TC", "donnees": [{"date": "2021/03/31 15:00:07", "donnee": "36.7"}, {"date": "2021/03/31 15:10:07", "donnee": "53.5"}], "type": "normal", "unite": "°C"}}}})";
}