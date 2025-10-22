export class Serie {
  id: number;

  name: string;

  channel: string;

  seasons: number;

  description: string;

  url: string;

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