#include <iostream>
#include <string>
using namespace std;

int main() {

    string usernameStorage;
    string passwordStorage;

    string username;
    string password;

    cout << "Create your username: ";
    cin >> usernameStorage;

    cout << "Create your password: ";
    cin >> passwordStorage;

    cout << "Insert your username: ";
    cin >> username;

    cout << "Insert your password: ";
    cin >> password;

    if(password == passwordStorage && username == usernameStorage) {
        cout << '\n' << "Logging in.";
    } else {
        cout << '\n' << "Try again.";
    }

    return 0;
}