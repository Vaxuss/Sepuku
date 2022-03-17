function sprawdzaniePol(){
    let wyniki = [];
    let liczby = [];
    let a = 101;
    let k = 0;
    let h = 9;
    let b = 74;
    let powtorzenie = false;
    for(let i = 0 ; i < 81; i++)
    {
        wyniki[i] =  +document.getElementById(a).textContent;
        a++;
    }

    for(let i = 0 ; i < 10; i++)
    {
        liczby[i] = 0;
    }

    //Sprawdzanie w poziomie
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
                //alert("Liczby są powtórzone w poziomie");
                console.log("Powtorzenie w poziomie");
                powtorzenie = true;
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

    //Zerowanie wartosci
    k = 0;
    for(let i = 0 ; i < 10; i++)
    {
        liczby[i] = 0;
    }

    //Sprawdzanie w pionie
    for(let i = 0 ; i < 9; i++)
    {
        while(k < b)
        { 
            if(liczby[wyniki[k]] == 0)
            {
                liczby[wyniki[k]]++;
                k = k + 9;
                console.log("Bez powtorzen w pionie");
            }
            else
            {
                //alert("Liczby są powtórzone w pionie");
                console.log("Powtorzenie w pionie");
                powtorzenie = true;
                break; 
            }
        }
        for(let i = 0 ; i < 10; i++)
        {
            liczby[i] = 0;
        }
        b++;
        k = i+1; 
    }

    //Sprawdzanie w kwadracie
    a = 0;
    numerliczby = 0;
    for (h = 0; h<3; h++)
    {
        for (i = 0; i<3; i++)
        {
            for(let i = 0 ; i < 10; i++)    liczby[i] = 0;
            for(j = 0; j<3; j++)
            {
                for(k = 0; k<3; k++)
                {
                    liczby[numerliczby] = wyniki[a];
                    a++;
                    console.log("siemano" + liczby[numerliczby]);
                    numerliczby++;
                }
                a=a+6; //na nową linię
            }
            numerliczby = 0;
            a = a - 24;
        }
        a = a + 18;
    }
    /*for(k = 0; k < b ; k++)
    {
        if(liczby[wyniki[k]] == 0)
        {
            liczby[wyniki[k]]++;
            console.log("Bez powtorzen w kwadracie");
        }
        else
        {
            alert("Liczby są powtórzone kwadracie");
            console.log("Powtorzenie kwadracie");
            break; 
        }
    }
    b+=9;
    for(k+=7; k < b ; k++)
    {
        if(liczby[wyniki[k]] == 0)
        {
            liczby[wyniki[k]]++;
            console.log("Bez powtorzen w kwadracie");
        }
        else
        {
            alert("Liczby są powtórzone kwadracie");
            console.log("Powtorzenie kwadracie");
            break; 
        }
    }
    b+=9;
    for(k+=7; k < b ; k++)
    {
        if(liczby[wyniki[k]] == 0)
        {
            liczby[wyniki[k]]++;
            console.log("Bez powtorzen w kwadracie");
        }
        else
        {
            alert("Liczby są powtórzone w kwadracie");
            console.log("Powtorzenie kwadracie");
            break; 
        }
    }*/


    // for(let i = 0 ; i < 9; i++)
    // {
    //     k = 3*i;
    //     b = k + 2;
    //     for(k +=0; k < b ; k++)
    //     {
    //         if(liczby[wyniki[k]] == 0)
    //         {
    //             liczby[wyniki[k]]++;
    //             console.log("Bez powtorzen w kwadracie");
    //         }
    //         else
    //         {
    //             //alert("Liczby są powtórzone kwadracie");
    //             console.log("Powtorzenie kwadracie");
    //             powtorzenie = true;
    //             //break; 
    //         }
    //     }
    //     b+=9;
    //     for(k+=6; k < b ; k++)
    //     {
    //         if(liczby[wyniki[k]] == 0)
    //         {
    //             liczby[wyniki[k]]++;
    //             console.log("Bez powtorzen w kwadracie");
    //         }
    //         else
    //         {
    //             //alert("Liczby są powtórzone kwadracie");
    //             console.log("Powtorzenie kwadracie");
    //             powtorzenie = true;
    //             //break; 
    //         }
    //     }
    //     b+=9;
    //     for(k+=6; k < b ; k++)
    //     {
    //         if(liczby[wyniki[k]] == 0)
    //         {   
    //             liczby[wyniki[k]]++;
    //             console.log("Bez powtorzen w kwadracie");
    //         }
    //         else
    //         {
    //             //alert("Liczby są powtórzone w kwadracie");
    //             console.log("Powtorzenie kwadracie");
    //             powtorzenie = true;
    //             //break; 
    //         }
    //     }
    // }

    if(powtorzenie)
    {
        alert("Gdzieś jest powtórzona liczba!!!");
    }
    else{
        alert('WYGRANKO!!!');
    }

}