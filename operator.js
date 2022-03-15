function Suma(...brojevi){
    var suma = 0;
    brojevi.forEach(
        function(value){
            suma+=value;
        }
        
        )
        return suma;
}

suma(4,5,6,0,-3);