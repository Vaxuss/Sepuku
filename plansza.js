function tworzeniePlanszy() {
    let a = 1;
    let b = 101;
    let c = 1;



    for(let i = 0; i < 9 ; i++)
    {
        for(let l = 0; l < 9; l++)
        {
            if(c < 10)
            {
                document.getElementById("pole").innerHTML += "<div onmouseover = "+"zmianaKoloru("+a+")" + " onclick=" + "zwiekszanieIndexu("+b+")" + " class = "+"plansza" + " id= " + a + " ><a class = " + "liczby" + " id=" + b + " >" + c + "</a></div>";                 
                a++;
                b++;
                c++;
            }
            else
            {
                c = 1;
                document.getElementById("pole").innerHTML += "<div onmouseover = "+"zmianaKoloru("+a+")" + " onclick=" + "zwiekszanieIndexu("+b+")" + " class = "+"plansza" + " id= " + a + " ><a class = " + "liczby" + " id=" + b + " >" + c + "</a></div>";                 
                a++;
                b++;
                c++;
            }
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

    if(wartoscPola >= 9)
    {
        pole.innerHTML = "";
    }
    else
    {
        pole.innerHTML = wartoscPola+1;
    }

    console.log("Zwiekszanie indexu");
    
}

function start(){
    let diff;
    let pole;
    const evt = new MouseEvent("click");

    for(let i = 1; i < 82;i++){
        pole = document.getElementById(i);
        let wartoscPola = +pole.textContent;
        for(let j = wartoscPola; j < 10; j++){
            document.getElementById(i).dispatchEvent(evt);   
        }              
    }
}

function zmianaKoloru(index) {
    // document.getElementById(index).style.backgroundColor = "rgb(0, 255, 0)";
}
