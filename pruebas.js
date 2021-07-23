        //cuadrado 
        let lado = 3;

        //triangulo 
        let lado1 = 3;
        let lado2 = 5;
        let lado3 = 6;

        //circulo
        let radio = 4.5;

        let fig = new figurasGeometricas();
        console.group('cuadrado');
        console.log(`area del cuadrado ${fig.areaCuadrado(lado)} cm^2`)
        console.log(`perimetro del cuadrado ${fig.perimetroCuadrado(lado)} cm`)
        console.groupEnd()


        console.group('triangulo');
        console.log(`area del triangulo ${fig.areaTriangulo(3, 45)} cm^2`)
        console.log(`perimetro del triangulo ${fig.perimetroTriangulo(lado1, lado2, lado3)} cm`)
        console.groupEnd()


        console.group('circulo');
        console.log(`area del circulo ${fig.areaCirculo(radio)} cm^2`)
        console.log(`perimetro del circulo ${fig.perimetroCirculo(radio)} cm`)
        console.groupEnd()