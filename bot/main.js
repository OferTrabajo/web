function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
}
}


window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);

};

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Estoy Listo!')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {
    // SALUDO
    "Hola": () => {
        voz("Hola!, espero que estes bien");
    },

    "preséntate": () => {
        voz("Hola a todos!, me llamo Ofer trax y soy un robot publicitario desarrollado por ofertrabajo");
    },

    "Qué es offer trabajo": () => {
        voz("Ofer Trabajo es una aplicacion movil la cual esta desarrollada para bajar la taza de desempleo en medellin");
    },

   

    // DESPEDIDA

    "Hasta mañana ofertas": () => {
        voz("Hasta mañana, la buena y se me va por la sombrita");
        annyang.abort()
    },

    "Hasta luego ofertas": () => {
        voz("vaya con dios");
        annyang.abort()
    },

    "Adios ofertas": () => {
        voz("Hasta luego, cristo te ama ");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, ya aplico la automoricion')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('son las ' + strTime + '. es tiempo de buscar trabajo ')
    },

    "quién te creo": () => {
        voz("fui creado por ofertrabajo, un  proyecto que busca ser lider en tecnologia e innovacion");
    },

    "qué eres": () => {
        voz("soy un robot publicitario que te ayudara a solucionar tus dudas sobre ofer trabajo");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es ofertax");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear + ",mira que alturas de la vida y aun no has descargado nuestra aplicacion"());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "cuéntame un chiste": () => {
        var chistes = ["¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
            "¡Estás obsesionado con la comida!, Nho sé a que te refieres croquetamente",
            "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
            "Hola, ¿está Agustín?, No, estoy incomodín",
            "¿Cuál es la fruta más divertida?, la naranja ja ja"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },


    "reiniciate": () => {
        voz("voy pa esa");
        location.reload();
    },


    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },


    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q="+ busqueda )
    },


     "abre nuestro twitter": busqueda => {
        voz("ok, ya la estoy abriendo");
        window.open("https://twitter.com/OferTrabaj0")
    },
    

    "quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },


    "pon en spotify *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://open.spotify.com/search/" + busqueda)
    },


    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },


    "di *frase": frase => {
        voz(frase);
    },


    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },




    // preguntas 
    "Qué significa offer trabajo": () => {
        voz("ofertrabajo quiere decir ofertas de trabajo");
    },


    "que significa la mochila ": () => {
        voz("la mochila es una insignia del trabajador");
    },
    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte, porque servir es reinar");
    },


    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo estes')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es ofertax, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "Ofertas": () => {
        voz("aquí estoy!");
    },

    "Hey": () => {
        voz("holaa");
    },

    "Hola": () => {
        voz("Hola!, espero que estes bien");
    },

    "Me puedes ayudar": () => {
        voz("yes, yes, yes, yes claro que yes");
    },


   


    // Bobadas

    "compañera": () => {
        voz("no soy tu compañera! soy tu compañere!");
    },





    "Dracukeo": () => {
        voz("el empalador");
    },


    "la q leo": () => {
        voz("un taladrador");
    },


    "le meto el dedo": () => {
        voz("dice porfavor");
    },


    "malparida piroba": () => {
        voz("uhhhh me la chupa me la soba, uhhhhhhhh y la leche me la roba");
    },


  "ulala": () => {
        voz('uyy esa parla')
    },


 "Oye": () => {
        voz("señorite, lenguaje inclusive porque soy un aliade feministe");
    },


 "Estás ahí": () => {
        voz("sisas mi pai");
    }
    
    

    

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;

    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    



    mensaje.voice = voices[2];
    window.speechSynthesis.speak(mensaje);
}