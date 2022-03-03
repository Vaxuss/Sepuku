function tworzeniePlanszy() {
    let a = 1;
    for(let i = 0; i < 9 ; i++)
    {
        for(let l = 0; l < 9; l++)
        {
            document.getElementById("pole").innerHTML += "<div class = "+"plansza"+" id= " + a + " ><a class = " + "liczby" + ">" + a + "</a></div>";
            a++;
        }
    }
    
}