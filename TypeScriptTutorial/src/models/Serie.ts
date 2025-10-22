// src/models/Serie.ts
export class Serie {
  /** Identificador numérico */
  id: number;

  /** Título de la serie */
  name: string;

  /** Canal/plataforma donde se emite */
  channel: string;

  /** Cantidad de temporadas */
  seasons: number;

  /** Descripción breve (texto libre) */
  description: string;

  /** URL a la página oficial de la serie */
  url: string;

  /** URL a una imagen (poster) */
  imgUrl: string;

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    url: string,
    imgUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.url = url;
    this.imgUrl = imgUrl;
  }
}