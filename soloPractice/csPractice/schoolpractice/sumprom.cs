// 2. Crear un programa con tres nota para calcular la suma de las tres notas y sacar el promedio muestre si aprobó o no.

using System;

class Program
{
    static void main()
    {
        double nota1, nota2, nota3;
        double sum, prom;

        Console.WriteLine("Ingrese la primera nota: ");
        nota1 = double.Parse(Console.ReadLine());

        Console.WriteLine("Ingrese la segunda nota: ");
        nota2 = double.Parse(Console.ReadLine());

        Console.WriteLine("Ingrese la tercera nota: ");
        nota3 = double.Parse(Console.ReadLine());

        // Suma de las notas
        sum = nota1 + nota2 + nota3;

        // promedio
        prom = sum / 3;

        Console.WriteLine("El promedio es: " + prom);

        if (prom > 7)
        {
            Console.WriteLine("Aprobado");
        } else
        {
            Console.WriteLine("Desaprobado");
        }
    }
}