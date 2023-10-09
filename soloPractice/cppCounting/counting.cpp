#include <iostream>
#include <string>

using namespace std;

int main() {

    char op;
    int x;
    int y;
    int result;

    cout << "Insert your operator (x / + -): ";
    cin >> op;

    cout << "Insert your first number: ";
    cin >> x;

    cout << "Insert your second number: ";
    cin >> y;

    switch(op) {
        case 'x':
            result = x*y;
            cout << "Your result is " << result;
            break;
        case '/':
            result = x/y;
            cout << "Your result is " << result;
            break;
        case '+':
            result = x+y;
            cout << "Your result is " << result;
            break;
        case '-':
            result = x-y;
            cout << "Your result is " << result;
            break;
    }

    return 0;
}
