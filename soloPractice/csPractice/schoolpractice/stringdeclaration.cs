// 3. Realizar un programa que le pida al usuario que ingrese: el nombre y el lugar para, ir de vacaciones y que el mensaje se muestre por pantalla

using System;

class Program
{
    static void main()
    {
        Console.WriteLine("Ingrese su nombre: ");
        string nombre = Console.ReadLine();

        Console.WriteLine("A donde le gustaria viajar?: ");
        string viaje = Console.ReadLine();

        Console.WriteLine("Hola " + nombre ", Vas a ir a viajar a " + viaje)
    }
}