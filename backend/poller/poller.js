const store = require('./userStore');
const SpotifyUserApi = require('./spotifyApi');

module.exports = () => {
    let hostPaused;

    const pollHostPlayerStatus = async () => {
        if (store.getUserStore().length < 1) return;
        const host = store.getHost();
        const API = new SpotifyUserApi(host.accessToken, host.refreshToken);
        const player = await API.getPlayer();
        // TODO: might get into race condition
        const hostProgress = player.progress_ms;
        const hostTrackUri = player.item.uri;

        hostPaused = player.is_playing;

        store.getUserStore().forEach(async (user) => {
            if (user === store.getHost()) return; // if user is HOST, no-op
            const API = new SpotifyUserApi(user.accessToken, user.refreshToken);
            const userPlayer = await API.getPlayer();
            const userProgress = userPlayer.progress_ms;
            const userTrackUri = userPlayer.item.uri;
            if (Math.abs(userProgress - hostProgress) > 200 || userTrackUri !== hostTrackUri)
                await API.syncTrack(hostTrackUri, hostProgress + 75);
        });
    };

    setInterval(pollHostPlayerStatus, 3000);
};
