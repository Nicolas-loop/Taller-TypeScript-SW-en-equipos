import { series } from './data/data';
import { Serie } from './models/Serie';

function obtenerPromedioTemporadas(lista: Serie[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acum, s) => acum + s.seasons, 0);
  return suma / lista.length;
}

function renderizarTabla(lista: Serie[]) {
  const tbody = document.getElementById('series-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  lista.forEach(s => {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = s.id.toString();
    tr.appendChild(tdId);

    const tdName = document.createElement('td');
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = s.name;
    tdName.appendChild(a);
    tr.appendChild(tdName);

    const tdChannel = document.createElement('td');
    tdChannel.textContent = s.channel;
    tr.appendChild(tdChannel);

    const tdSeasons = document.createElement('td');
    tdSeasons.textContent = s.seasons.toString();
    tr.appendChild(tdSeasons);

    tbody.appendChild(tr);
  });
}

function renderizarPromedio(lista: Serie[]) {
  const cont = document.getElementById('promedio-container');
  if (!cont) return;

  const promedio = obtenerPromedioTemporadas(lista);
  cont.textContent = `📊 Promedio de temporadas: ${promedio.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarTabla(series);
  renderizarPromedio(series);
});