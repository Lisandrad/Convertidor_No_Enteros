let numero = 1561;
    let milesimas = parseInt(numero / 1000);
    // let milQueLeDi = ;
    let centenas = parseInt(numero / 100);
    let decenas = parseInt((numero % 100) / 10);
    let unidades = parseInt((numero % 100) % 10);
    console.log("cantidades: ", milesimas, centenas, decenas, unidades);

    const Romano = {
      1    : "I",
      4    : "IV",
      5    : "V" ,
      9    : "IX",
      10   :  "X" ,
      40   :  "XL",
      50   :  "L" ,
      90   :  "XC",
      100  :  "C" ,
      400  :  "CD",
      500  :  "D" ,
      900  :  "CM",
      1000 :  "M",
    };

    let finalResult = '';
    let x = Romano[1000] +  Romano[1000] +  Romano[400] + Romano[90] + Romano[9]
    console.log(x);

    function hamborguesa() {
      finalResult = finalResult + x;

    }
 