function tworzeniePlanszy() {
    let a = 1;
    for(let i = 0; i < 9 ; i++)
    {
        for(let l = 0; l < 9; l++)
        {
            document.body.innerHTML += "<div class = "+"plansza"+" id= " + a + " > " + a + "</div>";
            a++;
        }
    }
    
}