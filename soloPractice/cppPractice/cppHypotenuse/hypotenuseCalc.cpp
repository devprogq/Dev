#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() { 

    int a;
    int b;
    double c;

    cout << "First side value: ";
    cin >> a;

    cout << "Second side value: ";
    cin >> b;

    a = pow(a, 2);

    b = pow(b, 2);

    c = sqrt(a + b);

    cout << "The result of the third side is: " << c;

    return 0;
}