const URLSearchParams = require('url').URLSearchParams;

const REDIRECT_URI = `${process.env.APP_HOST_LOCATION}/api/loggedin`;
class SpotifyAPIUtilities {
    constructor() {
        this.scopes = [
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-modify-playback-state',
            'user-read-private',
            'user-read-email',
            'user-read-birthdate',
        ];
    }
    getAuthURL() {
        const queryParams = new URLSearchParams({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: this.scopes.join(' '),
            redirect_uri: REDIRECT_URI,
            show_dialog: true,
        });
        return process.env.SPOTIFY_AUTH_BASE_URL + '?' + queryParams.toString();
    }
    getAccessTokenURL(code) {
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        });
        return process.env.SPOTIFY_TOKEN_BASE_URL + '?' + params.toString();
    }
}

module.exports = new SpotifyAPIUtilities();
