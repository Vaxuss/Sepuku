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
                document.getElementById("pole").innerHTML += "<div onmouseover = "+"zmianaKoloru("+a+")" + " onclick=" + "zwiekszanieIndexu("+b+")" + " oncontextmenu = "+"zmniejszenieInedxu("+b+")" + " class = "+"plansza" + " id= " + a + " ><a class = " + "liczby" + " id=" + b + " >" + c + "</a></div>";                 
                a++;
                b++;
                c++;
            }
            else
            {
                c = 1;
                document.getElementById("pole").innerHTML += "<div onmouseover = "+"zmianaKoloru("+a+")" + " onclick=" + "zwiekszanieIndexu("+b+")" + " oncontextmenu = "+"zmniejszenieInedxu("+b+")" + " class = "+"plansza" + " id= " + a + " ><a class = " + "liczby" + " id=" + b + " >" + c + "</a></div>";                 
                a++;
                b++;
                c++;
            }
        }
    }  

    //te 3 fory są odpowiedzialne za kolorowanie planszy

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

function zmniejszenieInedxu(index){
    let pole = document.getElementById(index);
    let wartoscPola = +pole.textContent;
    console.log(wartoscPola);

    if(wartoscPola <= 1)
    {
        pole.innerHTML = 9;
    }
    else
    {
        pole.innerHTML = wartoscPola-1;
    }

    console.log("Zmniejszanie indexu");
    
}

//start gry
function start(){
    document.getElementById("start").onclick = null;
    let pole;
    let limit;
    const evt = new MouseEvent("click");
    //ustawienie poziomu trudności
    let poziomtrudnosci = new URLSearchParams(window.location.search).get("poziomtrudnosci");//nie, nie robimy tego.
    console.log(poziomtrudnosci);
    for(let i = 1; i < 82;i++){
        pole = document.getElementById(i);
        let wartoscPola = +pole.textContent;
        for(let j = wartoscPola; j < 10; j++){
            pole.dispatchEvent(evt);  
        }              
    }
    
    //
    let plansza = new Array();
    let kwadrat = new Array();
    for(let i = 1; i < 82; i++){
        if(i%3==0){
            plansza[i] = Math.floor((Math.random() * 5) + 1);
        }
        else{
            plansza[i] = Math.floor((Math.random() * 9) + 1);
        }   
    }
    for(let i = 1; i < 10; i++){
        kwadrat[i] = 0;
    }

    //losowe liczby bez powtorzen na planszy//nie dziala nie umiem matmy
    for(let i = 1; i < 82; i++){
        for(let j = 1; j < 10; j++){
            if(plansza[i] == plansza[i+(9*j)]){
                plansza[i+(9*j)] = 0;
            }else continue;
        }
        
        if(i%9 != 0){
            let modulo = i%9;
            for(let j = 1; j < modulo; j++){
                if(plansza[i] == plansza[i + j]){
                    plansza[i + j] = 0;
                }
            }
            for(let j = modulo; j > 0; j--){
                if(plansza[i] == plansza[i - j]){
                    plansza[i - j] = 0;
                }
            }
        }else{
            for(let j = 1; j < 9; j++){
                if(plansza[i] == plansza[i - j]){
                    plansza[i - j] = 0;
                }
            }
        }
        if(i>9){
            for(let j = 7; j <= 11; j++){
                if(plansza[i] == plansza [i-j])  plansza[i-j] = 0;//ujemna i dodatnia wersja jest po to by sprawdzić miejsca które nie sięga sprwadzanie w poziomie i pionie; 
                if(plansza[i] == plansza [i+j])  plansza[i+j] = 0;
            }
            if(plansza[i] == plansza [i+20])  plansza[i+20] = 0;
            if(plansza[i] == plansza [i+16])  plansza[i+16] = 0;
        }

        if(i>18){
            for(let j = 16; j <=20; j++){
                if(plansza[i] == plansza [i-j])  plansza[i-j] = 0;
                if(plansza[i] == plansza [i+j])  plansza[i+j] = 0;
            }
        }
    }

    for(let i = 1; i < 82; i++){
        if(plansza[i] != 0){
            let rand =  Math.floor((Math.random() * 2)+1);
            if(rand == 1){
                limit++;
                plansza[i] = 0;
            }
        }
        if(limit == 9) i = 83;
    }

    for(let i = 1; i < 82; i++){
        if(plansza[i] != 0){
            for(let j = 1; j <= plansza[i]; j++){
                document.getElementById(i).dispatchEvent(evt);  
            }
            document.getElementById(i).style.fontSize = "50px";
            document.getElementById(i).onclick = null;
        }
    } 
}      
    

function zmianaKoloru(index) {
    // document.getElementById(index).style.backgroundColor = "rgb(0, 255, 0)";
}
//Przejście do indexa wraz z informacją o poziomie trudności
function PrzejdzDoIndex() {
    poziomtrudnosci = document.getElementById("poziomtrudnosci").value;
    window.location = "index.html?poziomtrudnosci="+poziomtrudnosci;
}

//reset planszy
function restart(){
    location.reload();
}
