let usa = document.getElementById("usa");
let uk = document.getElementById("uk");
let ind = document.getElementById("ind");
let jap = document.getElementById("jap");

ind.addEventListener("input",function (){
    let value = this.value ;
    let usaValue= value*0.012;
    if(!Number.isInteger(usaValue)){
       usaValue = usaValue.toFixed(4);
    }
    usa.value = usaValue;


    let japValue = value*1.60;
    if(!Number.isInteger(japValue)){
        japValue = japValue.toFixed(4);
     }
    jap.value = japValue;

    let ukValue = value*0.010;
    if(!Number.isInteger(ukValue)){
        ukValue = ukValue.toFixed(4);
     }
    uk.value = ukValue;




    
})

usa.addEventListener("input",function (){
    let value = this.value ;
    let indValue= value*82.2;
    if(!Number.isInteger(indValue)){
       indValue = indValue.toFixed(4);
    }
    ind.value = indValue;


    let japValue = value*132.79;
    if(!Number.isInteger(japValue)){
        japValue = japValue.toFixed(4);
     }
    jap.value = japValue;

    let ukValue = value*0.83;
    if(!Number.isInteger(ukValue)){
        ukValue = ukValue.toFixed(4);
     }
    uk.value = ukValue;




    
})

uk.addEventListener("input",function (){
    let value = this.value ;
    let indValue= value*99.82;
    if(!Number.isInteger(indValue)){
       indValue = indValue.toFixed(4);
    }
    ind.value = indValue;


    let japValue = value*160.21;
    if(!Number.isInteger(japValue)){
        japValue = japValue.toFixed(4);
     }
    jap.value = japValue;

    let usaValue = value*1.21;
    if(!Number.isInteger(usaValue)){
        usaValue = usaValue.toFixed(4);
     }
    usa.value = usaValue;

    
})


jap.addEventListener("input",function (){
    let value = this.value ;
    let indValue= value*0.62;
    if(!Number.isInteger(indValue)){
       indValue = indValue.toFixed(4);
    }
    ind.value = indValue;


    let ukValue = value*0.0062;
    if(!Number.isInteger(ukValue)){
        ukValue = ukValue.toFixed(4);
     }
    uk.value = ukValue;

    let usaValue = value*0.0075;
    if(!Number.isInteger(usaValue)){
        usaValue = usaValue.toFixed(4);
     }
    usa.value = usaValue;

})