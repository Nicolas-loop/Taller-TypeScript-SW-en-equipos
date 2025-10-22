import { series } from './data/data';
import { Serie } from './models/Serie';

function obtenerPromedio(seriesList: Serie[]): number {
  if (seriesList.length === 0) return 0;
  const total = seriesList.reduce((s, serie) => s + serie.seasons, 0);
  return total / seriesList.length;
}

function renderizarTabla(lista: Serie[]) {
  const tbody = document.getElementById('series-body');
  if (!tbody) return;

  tbody.innerHTML = '';

  lista.forEach(serie => {
    const tr = document.createElement('tr');
    tr.style.cursor = 'pointer';             

    const tdId = document.createElement('td');
    tdId.textContent = serie.id.toString();
    tr.appendChild(tdId);

    const tdName = document.createElement('td');
    const a = document.createElement('a');
    a.href = serie.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = serie.name;
    tdName.appendChild(a);
    tr.appendChild(tdName);

    const tdChannel = document.createElement('td');
    tdChannel.textContent = serie.channel;
    tr.appendChild(tdChannel);

    const tdSeasons = document.createElement('td');
    tdSeasons.textContent = serie.seasons.toString();
    tr.appendChild(tdSeasons);

    tr.addEventListener('click', () => mostrarDetalle(serie));
    tbody.appendChild(tr);
  });
}

function mostrarDetalle(serie: Serie) {
  const placeholder = document.getElementById('detail-placeholder')!;
  const card = document.getElementById('detail-card')!;

  placeholder.classList.add('d-none');
  card.classList.remove('d-none');

  (document.getElementById('detail-img') as HTMLImageElement).src = serie.imgUrl;
  (document.getElementById('detail-img') as HTMLImageElement).alt = `Poster de ${serie.name}`;

  (document.getElementById('detail-title') as HTMLElement).textContent = serie.name;
  (document.getElementById('detail-channel') as HTMLElement).innerHTML =
    `<strong>Canal:</strong> ${serie.channel}`;
  (document.getElementById('detail-seasons') as HTMLElement).innerHTML =
    `<strong>Temporadas:</strong> ${serie.seasons}`;
  (document.getElementById('detail-description') as HTMLElement).textContent =
    serie.description;

  const link = document.getElementById('detail-link') as HTMLAnchorElement;
  link.href = serie.url;
  link.textContent = 'Visitar sitio oficial';
}

function renderizarPromedio(lista: Serie[]) {
  const cont = document.getElementById('promedio-container');
  if (!cont) return;
  const avg = obtenerPromedio(lista);
  cont.textContent = `📊 Promedio de temporadas: ${avg.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarTabla(series);
  renderizarPromedio(series);
});