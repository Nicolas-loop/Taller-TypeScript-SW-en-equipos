// src/index.ts
import { series } from './data/data';
/* ---------- Cálculo del promedio de temporadas ---------- */
function calcularPromedio(seriesList) {
    if (seriesList.length === 0)
        return 0;
    var total = seriesList.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    return total / seriesList.length;
}
/* ---------- Renderizado de la tabla ---------- */
function renderTable(seriesList) {
    var tbody = document.getElementById('series-body');
    if (!tbody)
        return;
    tbody.innerHTML = ''; // limpiar
    seriesList.forEach(function (s) {
        var tr = document.createElement('tr');
        // id
        var tdId = document.createElement('td');
        tdId.textContent = s.id.toString();
        tr.appendChild(tdId);
        // name (con link a la página oficial)
        var tdName = document.createElement('td');
        var a = document.createElement('a');
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = s.name;
        tdName.appendChild(a);
        tr.appendChild(tdName);
        // channel
        var tdChannel = document.createElement('td');
        tdChannel.textContent = s.channel;
        tr.appendChild(tdChannel);
        // seasons
        var tdSeasons = document.createElement('td');
        tdSeasons.textContent = s.seasons.toString();
        tr.appendChild(tdSeasons);
        tbody.appendChild(tr);
    });
}
/* ---------- Insertar el promedio bajo la tabla ---------- */
function renderPromedio(seriesList) {
    var container = document.getElementById('promedio-container');
    if (!container)
        return;
    var avg = calcularPromedio(seriesList);
    container.textContent = "\uD83D\uDCCA Promedio de temporadas: ".concat(avg.toFixed(2));
}
/* ---------- Inicialización ---------- */
document.addEventListener('DOMContentLoaded', function () {
    renderTable(series);
    renderPromedio(series);
});
