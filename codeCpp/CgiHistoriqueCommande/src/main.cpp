#include <iostream>

int main() {
    std::cout << "Content-Type: text/html" << std::endl << std::endl;
    std::cout << R"({ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"TC","dateEnvoi":"2021/04/25 15:17:19", "reponse":{"mesure": {"code":"TC", "donnees":["36.7"], "type":"normal", "unite":"°C"}}} })" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"PIX" ,"dateEnvoi":"2021/03/25 10:58:21", "reponse":"non" } })" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite":"1", "typeCommande":"STATUS" ,"dateEnvoi":"2021/03/25 10:58:21", "reponse":{"status": {"batterie": {"Charge":"OUI", "CourantmA":"1295", "NiveauCharge%":"96", "Temperature":"38.0", "TensionV":"4.1" }, "bord": {"Date/heureBord":"2021/03/31 15:00:07", "OccupationRAM%":"4", "StockageSDLibreMo":"6152068", "Temperature":"51.5" }, "cube": {"Temperature":"197.4" }, "instrument": {"Marche":"ON", "Mode":"NORMAL", "Temperature":"28.8", "erreur":"NON"}}} } })" << std::endl;
    std::cout << R"({ "CMD": { "idSatellite":"1", "typeCommande":"MEASURE", "refInstrument":"CamInfra", "code":"TC" ,"dateEnvoi":"2021/06/12 08:47:05", "reponse":{"mesure": {"code":"TC", "donnees":["25.9"], "type":"normal", "unite":"°C"}} } })";
}