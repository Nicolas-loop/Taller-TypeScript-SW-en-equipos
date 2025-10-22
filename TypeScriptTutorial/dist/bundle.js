"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/models/Serie.ts
  var Serie;
  var init_Serie = __esm({
    "src/models/Serie.ts"() {
      "use strict";
      Serie = class {
        constructor(id, name, channel, seasons, description, url, imgUrl) {
          this.id = id;
          this.name = name;
          this.channel = channel;
          this.seasons = seasons;
          this.description = description;
          this.url = url;
          this.imgUrl = imgUrl;
        }
      };
    }
  });

  // src/data/data.ts
  var series;
  var init_data = __esm({
    "src/data/data.ts"() {
      "use strict";
      init_Serie();
      series = [
        new Serie(
          1,
          "Breaking Bad",
          "AMC",
          5,
          "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
          "https://www.amc.com/shows/breaking-bad",
          "https://i.imgur.com/GGje0vc.jpg"
        ),
        new Serie(
          2,
          "Orange Is the New Black",
          "Netflix",
          6,
          "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
          "https://www.netflix.com/co/title/70242311",
          "https://i.imgur.com/EvKe48G.jpg"
        ),
        new Serie(
          3,
          "Game of Thrones",
          "HBO",
          7,
          "American fantasy drama",
          "https://www.hbo.com/game-of-thrones",
          "https://i.imgur.com/TDCEV1S.jpg"
        ),
        new Serie(
          4,
          "The Big Bang Theory",
          "CBS",
          12,
          `Leonard and Sheldon are brilliant physicists\u2014geniuses in the laboratory but socially challenged everywhere else. 
Enter beautiful, street\u2011smart neighbor Penny, who aims to teach them a thing or two about life...`,
          "https://www.cbs.com/shows/big_bang_theory/about/",
          "https://i.imgur.com/uAEpVWk.jpg"
        ),
        new Serie(
          5,
          "Sherlock",
          "BBC",
          4,
          "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern\u2011day London.",
          "https://www.bbc.co.uk/programmes/b018ttws",
          "https://i.imgur.com/02B7qhj.jpg"
        ),
        new Serie(
          6,
          "A Very English Scandal",
          "BBC",
          2,
          "A Very English Scandal is a fact\u2011based three\u2011part British television comedy\u2011drama miniseries based on John Preston's book of the same name.",
          "https://www.bbc.co.uk/programmes/p065smy4",
          "https://i.imgur.com/D4y3DrQ.jpg"
        )
      ];
    }
  });

  // src/index.ts
  var require_index = __commonJS({
    "src/index.ts"() {
      init_data();
      function obtenerPromedio(seriesList) {
        if (seriesList.length === 0) return 0;
        const total = seriesList.reduce((s, serie) => s + serie.seasons, 0);
        return total / seriesList.length;
      }
      function renderizarTabla(lista) {
        const tbody = document.getElementById("series-body");
        if (!tbody) return;
        tbody.innerHTML = "";
        lista.forEach((serie) => {
          const tr = document.createElement("tr");
          tr.style.cursor = "pointer";
          const tdId = document.createElement("td");
          tdId.textContent = serie.id.toString();
          tr.appendChild(tdId);
          const tdName = document.createElement("td");
          const a = document.createElement("a");
          a.href = serie.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = serie.name;
          tdName.appendChild(a);
          tr.appendChild(tdName);
          const tdChannel = document.createElement("td");
          tdChannel.textContent = serie.channel;
          tr.appendChild(tdChannel);
          const tdSeasons = document.createElement("td");
          tdSeasons.textContent = serie.seasons.toString();
          tr.appendChild(tdSeasons);
          tr.addEventListener("click", () => mostrarDetalle(serie));
          tbody.appendChild(tr);
        });
      }
      function mostrarDetalle(serie) {
        const placeholder = document.getElementById("detail-placeholder");
        const card = document.getElementById("detail-card");
        placeholder.classList.add("d-none");
        card.classList.remove("d-none");
        document.getElementById("detail-img").src = serie.imgUrl;
        document.getElementById("detail-img").alt = `Poster de ${serie.name}`;
        document.getElementById("detail-title").textContent = serie.name;
        document.getElementById("detail-channel").innerHTML = `<strong>Canal:</strong> ${serie.channel}`;
        document.getElementById("detail-seasons").innerHTML = `<strong>Temporadas:</strong> ${serie.seasons}`;
        document.getElementById("detail-description").textContent = serie.description;
        const link = document.getElementById("detail-link");
        link.href = serie.url;
        link.textContent = "Visitar sitio oficial";
      }
      function renderizarPromedio(lista) {
        const cont = document.getElementById("promedio-container");
        if (!cont) return;
        const avg = obtenerPromedio(lista);
        cont.textContent = `\u{1F4CA} Promedio de temporadas: ${avg.toFixed(2)}`;
      }
      document.addEventListener("DOMContentLoaded", () => {
        renderizarTabla(series);
        renderizarPromedio(series);
      });
    }
  });
  require_index();
})();
