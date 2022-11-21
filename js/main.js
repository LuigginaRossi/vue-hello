// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const {createApp} = Vue;

createApp({
    data(){     
        return{  
            user: {
                firstName: "Salvador",
                lastName: "Dali",
            },
            profilePhoto: "img/salvador-dali.jpg",
            imgClass: "w-50",
        }
    },
    // methods :{
    //     setTimer : setTimeout(function(){
    //         profilePhoto = "img/user.jpg";
    //     }, 3000)
    // }
}).mount("#app")



// setTimeout(pastapronta, 1000);


// function pastapronta () {
// 	alert("seconda funzione nominale!");
// }

// setTimeout(function){
// 	alert("la pasta è pronnta!");
// }, seconds * 3000);