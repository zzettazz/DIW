function trolear() {
    // Obtén una referencia al elemento "botondiv"
    var botonDiv = document.getElementById("botondiv");

    // Elimina cualquier contenido existente en "botondiv"
    botonDiv.innerHTML = '';

    // Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    var numeroAleatorio = Math.random();

    // Escala y redondea el número al rango deseado (20 a 80)
    var numeroEnRango = Math.round(numeroAleatorio * (50 - 30) + 20);

    var top = numeroEnRango;

    // Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    var numeroAleatorio = Math.random();

    // Escala y redondea el número al rango deseado (20 a 80)
    var numeroEnRango = Math.round(numeroAleatorio * (50 - 30) + 20);

    var left = numeroEnRango

    var texto =
        "<input type=\"button\" class=\"botoncss\" onclick=\"trolear()\" style=\"margin-top: " + top + "%;margin-left: " + left + "%;\" value=\"SI\"/>";

    // Agrega el nuevo botón al elemento "botondiv"
    botonDiv.innerHTML = texto;
}
