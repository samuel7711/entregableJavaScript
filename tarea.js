
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
let numeros = [23,56,79,400,100,44,67,24]
const sumArray = numeros.reduce((numero1,numero2)=> {
    suma = numero1+numero2;
  });
  console.log(sumArray);    
  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original

  const filterEvenNumbers = numeros.filter(numero => {
    if (numero/2 == 0){
        par = numero
    }
    console.log(numero);
  });
  
  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  const findMaxNumber = numeros.find(numero => {
    if (numero>=0){
        max=numero
    }
    return numero
  });
  console.log(findMaxNumber);
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
  let cadena = ["maria","juan","carro","perro"]
  const toUpperCaseStrings = cadena.toUpperCaseStrings(palabra => {
    return palabra
  });
  console.log(cadena);

  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
  const calculateAverage = (numeros) => {
    if (numeros.length === 0) {
        return 0;
      }
    
      const sum = numeros.reduce((acc, val) => acc + val, 0);
      return sum / numeros.length;
    };
  
  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
  const sortNumbersAscending = (numeros) => {
    return numeros.slice().sort((a, b) => a - b);
  };
  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
  const findFirstElement = (numeros) => {
    for (let element of numeros) {
        if (condition(element)) {
          return element;
        }
      }
      return undefined;
  };
  
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
  const countElements = (numeros) => {
    let tamaño = numeros.length();
    return tamaño
  };
  console.log(countElements);

  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
  const concatenateArrays = (numeros,cadena) => {
    let array= numeros.concat(cadena);
    return array;
  };
  console.log(array);
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
  const squareNumbers = (numeros) => {
    let cuadrado= numeros.map( num = numero^2)
    return cuadrado;
  };
  console.log(squareNumbers);

  // Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
    /*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
    */
    if (!jugador.habilidades) {
        jugador.habilidades = [];
    }

    // Verifica si la nueva habilidad ya existe en el arreglo de habilidades
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        // Agrega la nueva habilidad al arreglo de habilidades del jugador
        jugador.habilidades.push(nuevaHabilidad);
    }

    // Retorna el objeto jugador modificado con la nueva habilidad agregada
    return jugador;
   
};

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
let duraciontotal = 0;
const peliculas= [
    {titulo: "El Rey León",duracion: 118,genero:"animacion",puntaje:5,año:"1994"},
    {titulo: "La Sirenita",duracion: 83,genero:"animacion",puntaje:4,año:"1995"},
    { titulo: "Toy Story", duracion: 81,genero:"animacion",puntaje:4,año:"1989"},
    {titulo: "Frozen",duracion: 102,genero:"animacion",puntaje:3,año:"2013"},
    {titulo: "Moana",duracion: 107,genero:"animacion",puntaje:5,año:"2016"}
];
const calcularDuracionTotal = (peliculas) => {
    peliculas.forEach(pelicula => {
        // Sumar la duración de cada película a la duración total
        duracionTotal += pelicula.duracion;
    });
    
    // Retornar la duración total
    return duracionTotal;
};
console.log(calcularDuracionTotal);


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
    peliculas.filter(pelicula => {
        pelicula.titulo.includes(titulo.toLowerCase()) && pelicula.genero.toLowerCase("animacion") === genero.toLowerCase("animacion");
    })
    return
};
console.log(buscarPeliculas);

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
    let prom=peliculas.puntaje.reduce(acu+val)/2;
   return prom;
};
console.log(prom);

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    let año = peliculas.año.filter("20")
    return año;
};
console.log(filtrarPorAño);

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    // Filtrar las películas por género.
    let gene = peliculas.filter(genero.toLowerCase(animacion)===genero.toLowerCase("animacion"));
    let sum = gene.reduce(acu+val);
    let prom = sum/peliculas.gene.length();
    return prom;    
};
console.log(calcularPromedioDuracionPorGenero);

// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
    constructor(marca,modelo,año){
        this.marca = "nissan";
        this.modelo = "gtr-35";
        this.año = 2019;
    };

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return console.log("el vehiculo es de la marca "+this.marca+" y es modelo "+this.modelo+" y del año "+this.año)
    }
}


// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */
    constructor(marca,modelo,año,color,cilindrada,potencia,numPuertas,numAsientos,tipoTransmision){
        this.marca="nissan";
        this.modelo="gtr-35";
        this.año=2019;
        this.color="color";
        this.cilindrada=3000;
        this.potencia=350;
        this.numPuertas=2;
        this.numAsientos=2;
        this.tipoTransmision="automatica";
    }

    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        console.log("el vehiculo es de la marca "+this.marca+" y es modelo "+this.modelo+" y del año "+this.año+"tiene caracteristicas como "+
        this.color+",nuumero de puertas "+this.numPuertas+" cantidad de asientos"+this.numAsientos+" con una cilindrada de "+this.cilindrada+
        " con una potencia de "+ this.potencia+" con el tipo de transmision"+this.tipoTransmision);
    }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */
    constructor(marca,modelo,año,color,cilindrada,potencia,numRuedas,tipo){
        this.modelo="s1000rr";
        this.año=2023;
        this.color="blanca";
        this.marca="bmw";
        this.numRuedas=2;
        this.tipo="deportiva";
        this.cilindrada=1000;
        this.potencia=205;
    }

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        console.log("la moto es de la marca "+this.marca+" y es modelo "+this.modelo+" y del año "+this.año+"tiene caracteristicas como "+
        this.color+",nuumero de puertas "+this.numPuertas+" cantidad de asientos"+this.numAsientos+" con una cilindrada de "+this.cilindrada+
        " con una potencia de "+ this.potencia+" con el tipo de transmision"+this.tipoTransmision);
    }
}

// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
     */
   

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
     */
  

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  