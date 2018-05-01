// const SpotifyWebApi = require('spotify-web-api-node')
// const spotify = new SpotifyWebApi({
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     redirectUri: 'http://u.ngrok.io/loggedin'
// })

const fetch = require('node-fetch');

class SpotifyUserAPI {
    constructor(accessToken, refreshToken) {
        this.ACCESS_TOKEN = accessToken;
        this.REFRESH_TOKEN = refreshToken;
        this.HEADERS = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        };
    }

    async getProfile() {
        const data = await fetch('https://api.spotify.com/v1/me', { headers: this.HEADERS });
        return data.json();
    }

    async getPlayer() {
        const data = await fetch('https://api.spotify.com/v1/me/player', { headers: this.HEADERS });
        return data.json();
    }

    async syncTrack(trackUri, position_ms) {
        // set the track
        await fetch('https://api.spotify.com/v1/me/player/play', {
            headers: this.HEADERS,
            method: 'PUT',
            body: JSON.stringify({
                uris: [trackUri],
            }),
        });
        // sync time
        await fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position_ms}`, {
            headers: this.HEADERS,
            method: 'PUT',
        });
    }
}

module.exports = SpotifyUserAPI;
