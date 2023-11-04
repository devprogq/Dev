// Crear un programa con el cual podamos almacenar los títulos y los autores de diferentes libros. El usuario es el encargado de suministrar la información de cada libro, así entonces, dado que es el usuario quien lo hace, nosotros no tenemos manera alguna de saber cuántos libros va querer él ingresar por medio de nuestro programa. El caso principal es que queremos almacenar en la memoria el titulo y el autor de TODOS y cada uno de los libros.

#include <iostream>
#include <string>
using namespace std;

int main() {

    string titulos[2];
    string autores[2];
    cout << "Ingrese la siguiente informacion de los Libros: \n";
    for(int i = 0; i < 2; i++) 
    {
        cout << "\nLibro " << i + 1 <<":\n";
        cout << "Titulo: ";
        // cin >> titulos[i];
        getline(cin, titulos[i]);
        cout << "Autor: ";
        // cin >> autores[i];
        getline(cin, autores[i]);

        cout << "\nEl nombre del libro numero " << i + 1 << " es " << titulos[i] << '\n';
        cout << "El autor del libro numero " << i + 1 << " es " << autores[i] << '\n';
    }

    return 0;
}