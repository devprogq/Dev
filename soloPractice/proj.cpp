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

/*
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
*/

// Const variable

/*
int main(){
    // The const keyword specifies that a variable's value is constant, tells the compiler to prevent anything from modifying it, so it's Read-only.

    double pi = 3.14159;
    double radius = 10;
    double circumference = 2 * pi * radius;

    const int LIGHT_SPEED = 299792458;
    const int WIDTH = 1920;
    const int HEIGHT = 1080;

    std::cout << circumference << " cm" << '\n';

    std::cout << "This is the speed of the light " << LIGHT_SPEED << '\n';

    return 0;
}
*/

// Namespaces

/*
namespace first {
    int x = 1;
}

int main(){
    // Provides a solution for preventing name conflicts in large projects. Each entity needs a unique name. This allows for identically named entities as long as the namespaces are different.

    // We can use aswell the using namespace std::string and std::cout to not type always the std:: before doing a action

    int x = 0;

    // if we don't specify the prefix namespace, we use the value locally (in this case 0)

    std::cout << x << '\n';

    // first version of the namespace with the name of the variable. (in this case 1)

    std::cout << first::x << '\n';

    return 0;
}
*/

// typedef

/*
#include <vector>

// typedef std::string text_t;
// typedef int number_t;

using text_t = std::string;
using number_t = int;

int main(){
    // reserved keyword to create and additional name for another data type, the new identifier for an existing type helps with readability and reduces typos.

    text_t firstName = "Lautaro";
    number_t number = 9;

    std::cout << firstName << '\n';
    std::cout << number << '\n';

    return 0;
}
*/

// arithmetic operators

/*
int main(){
    // Return the result of a specific arithmetic operation (+ - * /)

    // parenthesis first, multiplication & division second, lastly addition & subtraction

    int students = 20;

    // students = students + 1;
    // students+=1;
    // students++;

    // students = students - 1;
    // students-=1;
    // students--;

    // students = students * 2;
    // students*=2;

    // students = students / 2;
    // students/=2;

    // takes the remainder of the number 
    int remainder = students % 2;

    std::cout << students << '\n';
    std::cout << remainder << '\n';

    return 0;
}
*/
