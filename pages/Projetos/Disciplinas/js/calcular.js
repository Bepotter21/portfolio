function calcular()
{
    cont = 1;
    soma = 0;

    while(cont <= disciplinas)
    {
        iddisc = "disciplina"+cont;
        soma = soma + parseFloat(document.getElementById(iddisc).value);

        cont++;
    }
    media = soma / disciplinas;
    document.getElementById("resultado").innerHTML = "Coeficiente de Rendimento: "+media.toFixed(2)+" "; 
}