function ampliarImagem()
{
    var entidade = document.getElementById('imagem');

    var fator_lupa = 3.5;

    entidade.onclick = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };

    entidade.onclick = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };
}
