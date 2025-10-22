// src/models/Serie.ts
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, url, imgUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.imgUrl = imgUrl;
    }
    return Serie;
}());
export { Serie };
