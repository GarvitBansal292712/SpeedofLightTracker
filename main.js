document.getElementById("convert").addEventListener('submit', function(event){
    event.preventDefault();


    const time = document.getElementById('years').value
/*     const choice = document.getElementById('unit').value*/   
     const answer = document.getElementById('answer')
     
     //CHECK WHAT IS BEING SELECTED 
     
     if(time){
        const speedoOfLightinVaccum = 299792458  ; //In kilometers Per Second 
        const numberOfSeconds = time *  31536000;
        const converttodistance = speedoOfLightinVaccum * numberOfSeconds ;
        answer.innerHTML = `The Calculated Distance Travelled by Light in ${time} Year is : ${converttodistance} Kilometeres`;

    }
    else{
        answer.innerHTML = `Please Enter A Value!`;

    }
    
    /*         const speedoflightinmiles = 671000000; //In Miles Per Hour
            const converttomiles = time /speedoflightinmiles; */
//NOW CALCULATE THE DISTANCE 

/* if(choice === "KILOMETERS"){
    result = converttokm;
    result.innerHTML = `The Calculated Distance Travelled by Light in ${time} Year is : ${result}`;
}
else{
    result = converttomiles;
    result.innerHTML = `The Calculated Distance Travelled by Light in ${time} Year is : ${result}`;
} */


});