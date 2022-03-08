function tworzeniePlanszy() {
    let a = 1;
    let b = 1;

    for(let i = 0; i < 9 ; i++)
    {
        for(let l = 0; l < 9; l++)
        {
            document.getElementById("pole").innerHTML += "<div class = "+"plansza"+" id= " + a + " ><a class = " + "liczby" + ">" + a + "</a></div>";                        
            document.getElementById(a).addEventListener("click", tworzenieFormularza(a));
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

function tworzenieFormularza(index)
{
    let pole = document.getElementById(index);
    let formularze = document.getElementById("formularze");

    formularze.innerHTML = "<input type=" + "number" +  "name=" + "liczba" + "id=" +"liczba" + "><br> <button id=" + "wykonaj" + ">Wpisz</button>";

    document.getElementById("liczba").addEventListener("click", wypelnianiePol(index));
    console.log("Tworzenie Formularzy");
}

function wypelnianiePol(index)
{
    //let wartosc = +document.getElementById("liczba").value;
    //let wartoscKomorki = document.getElementById(index).innerHTML = wartosc;
    console.log("wypelnianiePol");
}