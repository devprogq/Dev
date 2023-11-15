// 4 Sofia tiene que hacer un relevamiento de las personas que pueden votar , para ello hizo cuatro categorías la primera es bebes de dias a dos años la segunda categoria niños es de 3 años a 12 años, la tercera categoria de 16 a 18es optativo, cuarta categoría seria adultos 19 a 69 años y la quinta y última categoria de 70 opcional votar si o no Se le pide al señior usuario: que ingrese su edad , nombre apellido y numero de documento para ver en que categoría entran y saber si son mayores o menores de edad

using System;

class Program
{
    static void main() 
    {
        Console.WriteLine("Ingrese su nombre:");
        string nombre = Console.ReadLine();

        Console.WriteLine("Ingrese su edad:");
        string edad = int.Parse(Console.ReadLine());

        Console.WriteLine("Ingrese su documento:");
        string dni = Console.ReadLine();

        string categoria = "";
        string esMayor = "";

        if (edad >= 0 && edad <=2)
        {
            categoria = "Bebe";
        } else if (edad >=3 && edad <= 12)
        {
            categoria = "Ninio";
        } else if( edad >= 16 && <= 18)
        {
            categoria = "Opcional";
        } else if(edad >= 19 && <= 69)
        {
            categoria = "Adulto";
        } else if (edad >= 18)
        {
            esMayor = "Mayor de edad";
        } else
        {
            esMayor = "Menor de edad";
        }

        Console.WriteLine("Nombre: " + nombre);
        Console.WriteLine("DNI: " + dni);
        Console.WriteLine("Edad: " + edad);
        Console.WriteLine("Categoria: " + categoria);
        Console.WriteLine("Estado de votacion: " + esMayor);

    }
}