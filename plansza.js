function tworzeniePlanszy() {
    let a = 1;
    let b = 1;

    for(let i = 0; i < 9 ; i++)
    {
        for(let l = 0; l < 9; l++)
        {
            document.getElementById("pole").innerHTML += "<div class = "+"plansza"+" id= " + a + " ><a class = " + "liczby" + ">" + a + "</a></div>";
            document.getElementById(a).addEventListener("click" , zwiekszanieIndexu(a));                        
            a++;
        }      
        
    } 

       
    for(let j = 1 ; j <= 9; j++){
        for(let i = 1; i <= 9; i++){
            document.getElementById(j).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+9).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+18).style.backgroundColor = "rgb(77, 33, 33)";               
        } 
        if(j == 3){
            j = 6;
        }
    }    

    for(let j = 31 ; j <= 33; j++){
        for(let i = 1; i <= 9; i++){
            document.getElementById(j).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+9).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+18).style.backgroundColor = "rgb(77, 33, 33)"; 
        }      
    }    

    for(let j = 55 ; j <= 63; j++){
        for(let i = 1; i <= 9; i++){
            document.getElementById(j).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+9).style.backgroundColor = "rgb(77, 33, 33)"; 
            document.getElementById(j+18).style.backgroundColor = "rgb(77, 33, 33)";          
        } 
        if(j == 57){
            j = 60;
        }
    }    
}

function zwiekszanieIndexu(index){
    let pole = document.getElementById(index);
    let wartoscPola = +pole.textContent;
    console.log(wartoscPola);

    if(wartoscPola == 9)
    {
        pole.innerHTML = "";
    }
    else
    {
        pole.innerHTML = wartoscPola+1;
    }

    console.log("Zwiekszanie indexu");
}