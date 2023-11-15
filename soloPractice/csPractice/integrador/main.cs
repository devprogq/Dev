// 1. 2. 3. 5.

// un codigo que imprima un mensaje en pantalla

// ingrese la edad nombre apodo y comida favorita

// pregunte usuario cual es su banda favortia y como se llama su mascota, que se guarde en una var

// ingresar un numero cualquiera y muestre solucion de la tabla de multiplicar en pantalla

// 1 un codigo que imprima un mensaje en pantalla

using System;

class Program0
{
    static void main()
    {
        Console.WriteLine("Este es un mensaje");
    }
}

// 2 ingrese la edad nombre apodo y comida favorita

using System;

class Program1
{
    static void main()
    {

        Console.WriteLine("Ingrese su edad: ");
        edad = int.Parse(Console.ReadLine());

        Console.WriteLine("Ingrese su nombre: ");
        string nombre = Console.ReadLine();

        Console.WriteLine("Ingrese su apodo: ");
        string apodo = Console.ReadLine();

        Console.WriteLine("Ingrese su comida favorita: ");
        string comida = Console.ReadLine();
    }
}

// 3 pregunte usuario cual es su banda favortia y como se llama su mascota, que se guarde en una var

using System;

class Program2
{
    static void main()
    {
        Console.WriteLine("Ingrese el nombre de su banda favorita: ");
        string bandaFavorita = Console.ReadLine();

        Console.WriteLine("Ingrese el nombre de su mascota: ");
        string nombreMascota = Console.ReadLine();
    }
}

//5 ingresar un numero cualquiera y muestre solucion de la tabla de multiplicar en pantalla

using System;

class Program3
{
    static void main()
    {
        Console.WriteLine("Ingrese un numero del 1 al 10");
        num = int.Parse(Console.ReadLine());

        if (num >= 1 && num <= 10)
        { 
        Console.WriteLine(num * 1);
        Console.WriteLine(num * 2);
        Console.WriteLine(num * 3);
        Console.WriteLine(num * 4);
        Console.WriteLine(num * 5);
        Console.WriteLine(num * 6);
        Console.WriteLine(num * 7);
        Console.WriteLine(num * 8);
        Console.WriteLine(num * 9);
        Console.WriteLine(num * 10);
        } else
        {
            Console.WriteLine("No ingreso un valor valido")
        }

    }
}