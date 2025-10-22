// src/index.ts
import { series } from './data/data';
import { Serie } from './models/Serie';

/* ---------- Función para obtener el promedio ---------- */
function obtenerPromedioTemporadas(lista: Serie[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acum, s) => acum + s.seasons, 0);
  return suma / lista.length;
}

/* ---------- Renderizado de la tabla ---------- */
function renderizarTabla(lista: Serie[]) {
  const tbody = document.getElementById('series-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  lista.forEach(s => {
    const tr = document.createElement('tr');

    // id
    const tdId = document.createElement('td');
    tdId.textContent = s.id.toString();
    tr.appendChild(tdId);

    // name (enlace a la página oficial)
    const tdName = document.createElement('td');
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = s.name;
    tdName.appendChild(a);
    tr.appendChild(tdName);

    // channel
    const tdChannel = document.createElement('td');
    tdChannel.textContent = s.channel;
    tr.appendChild(tdChannel);

    // seasons
    const tdSeasons = document.createElement('td');
    tdSeasons.textContent = s.seasons.toString();
    tr.appendChild(tdSeasons);

    tbody.appendChild(tr);
  });
}

/* ---------- Insertar el promedio bajo la tabla ---------- */
function renderizarPromedio(lista: Serie[]) {
  const cont = document.getElementById('promedio-container');
  if (!cont) return;

  const promedio = obtenerPromedioTemporadas(lista);
  // Mostramos con 2 decimales
  cont.textContent = `📊 Promedio de temporadas: ${promedio.toFixed(2)}`;
}

/* ---------- Inicialización ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderizarTabla(series);
  renderizarPromedio(series);
});