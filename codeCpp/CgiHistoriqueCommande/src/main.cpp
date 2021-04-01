#include <iostream>

int main() {
    std::cout << "Content-Type: text/html" << std::endl << std::endl;
    std::cout << R"({ "CMD": { "ID": "1", "TYPE": "MEASURE", "TYPEMEASURE": "PIX", "DATE": "2021/03/25 10:58:21" }})" << std::endl;
    std::cout << R"({ "CMD": { "ID": "2", "TYPE": "MISSION", "TYPEMEASURE": "PIX", "DATE": "2021/03/10 15:55:23" }})" << std::endl;
    std::cout << R"({ "CMD": { "ID": "2", "TYPE": "MEASURE", "TYPEMEASURE": "PIX", "DATE": "2021/04/10 15:36:46" }})" << std::endl;
    std::cout << R"({ "CMD": { "ID": "1", "TYPE": "STATUS", "TYPEMEASURE": "PIX", "DATE": "2021/03/09 09:45:00" }})" << std::endl;
}