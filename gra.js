function sprawdzaniePol(){
    let wyniki = [];
    let liczby = [];
    let a = 101;
    let k = 0;
    let h = 9;
    for(let i = 0 ; i < 81; i++)
    {
        wyniki[i] =  +document.getElementById(a).textContent;
        a++;
    }

    for(let i = 0 ; i < 81; i++)
    {
        console.log(wyniki[i]);
    }

    for(let i = 0 ; i < 10; i++)
    {
        liczby[i] = 0;
    }

    for(let i = 0 ; i < 9; i++)
    {
        while(k < h)
        { 
            if(liczby[wyniki[k]] == 0)
            {
                liczby[wyniki[k]]++
                k++;
                console.log("Bez powtorzen w poziomie");
            }
            else
            {
                alert("Liczby są powtórzone w poziomie");
                break;
            }
        }
        for(let i = 0 ; i < 10; i++)
        {
            liczby[i] = 0;
        }
        k = h;
        h = h + 9;
    }
    
    
    k = 0;

    for(let i = 0 ; i < 10; i++)
    {
        liczby[i] = 0;
    }

    while(k < 74)
    { 
        if(liczby[wyniki[k]] == 0)
        {
            liczby[wyniki[k]]++;
            k = k + 9;
            console.log("Bez powtorzen w pionie");
        }
        else
        {
            alert("Liczby są powtórzone w pionie");
            break;
            
        }
    }

}
