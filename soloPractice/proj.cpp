#include <iostream>

// this is my first code in c++

/* 
int main(){
    // std = standard :: CharacterOUT "<< to tell what to print" "text to print"
    std::cout << "I like pizza!" << '\n';
    // '\n is for create a new line, you can use std:endl aswell.'
    std::cout << "It's really good!" << '\n';
    return 0;
}
*/

// Declarations in C++

int main(){

    int x = 5; // Declaration for an integer (whole number)
    double y = 6.5; // Declaration for a double (number including decimal)
    char text = 'A'; // Declaration for a character (letter)
    bool student = true; // Declaration for a state in a variable (true = 1 / false = 0)
    std::string name = "Lautaro"; // Declaration for a string, in double quotes

    std::cout << x << '\n';
    std::cout << y << '\n';
    std::cout << text << '\n';
    std::cout << student << '\n';
    std::cout << name << '\n';
    std::cout << "Hello " << name << '\n';

    return 0;
}