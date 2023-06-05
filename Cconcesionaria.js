const { log } = require('console');

const autos = require('./autos.json');

require('colors');

let titulo = 'LISTA DE AUTOS';

const concesionaria = {                         
    listar : function(){
        log("\n*********************************************************************************".blue, titulo.yellow, "*******************************************************************************\n".blue);
        autos.forEach((auto,i) => {
          
          log(` ${i+1}`.yellow, ' - '.yellow,
           'Marca : '.blue, `${auto.marca}`, ' - '.yellow,
           'Modelo : '.blue, `${auto.modelo}`, ' - '.yellow,
           'Color : '.blue, `${auto.color}`, ' - '.yellow, 
           'Año : '.blue, `${auto.anio}`, ' - '.yellow, 
           'Km : '.blue, `${auto.km}`, ' - '.yellow, 
           '$ '.green, `${auto.precio}`.green, ' - '.yellow, 
           'Cuotas : '.blue, `${auto.cuotas}`, ' - '.yellow, 
           'Patente : '.blue,  `${auto.patente}`, ' - '.yellow, 
           'Vendido : '.blue, `${auto.vendido}`);
          log("\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n".blue);   
      });
          log("\n*******************************************************************************************************************************************************************************\n".blue);
    },    
    buscarAuto : function(patente)  {    //ETAPA 1
       return this.autos.find((auto) => auto.patente === patente) || null;  //ETAPA 2
    },
    venderAuto: function(patente){              //ETAPA 3
        let auto = this.buscarAuto(patente)
    
        auto && (auto.vendido = true)  
    },
    autosParaLaVenta: function(){
        return this.autos.filter(auto => auto.vendido = !auto.vendido)  //ETAPA 4
    },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(auto => auto.km < 100)    //ETAPA 5
    },
    listaDeVentas : function() {
        return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)   // ETAPA 6
    },
    totalDeVentas : function (){
        return this.listaDeVentas().reduce((total,precio) => total + precio, 0) // ETAPA 7
    },
    puedeComprar : function (auto, persona){        // ETAPA 8
        
        return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas
    },
    autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(autosDisp => this.puedeComprar(autosDisp, persona));  //ETAPA 9
     }
};

log(concesionaria.listar());