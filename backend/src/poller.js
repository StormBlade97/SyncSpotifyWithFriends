const RoomStore = require('./RoomStore');
const SpotifyUserApi = require('./spotify-api/UserApi');

module.exports = () => {
    let hostPaused;

    const pollHostPlayerStatus = async () => {
        try {
            if (RoomStore.getParticipants().length < 1) return;
            
            const host = RoomStore.getHost();
            const API = new SpotifyUserApi(host.accessToken, host.refreshToken);
            const player = await API.getPlayer(); // FIXME: potential error if no spotify client open
            // TODO: might get into race condition
            const hostProgress = player.progress_ms;
            const hostTrackUri = player.item.uri;

            hostPaused = player.is_playing;

            RoomStore.getParticipants().forEach(async (user) => {
                if (user === RoomStore.getHost()) return; // if user is HOST, no-op
                const API = new SpotifyUserApi(user.accessToken, user.refreshToken);
                const userPlayer = await API.getPlayer(); // FIXME: potential error if no spotify client open
                const userProgress = userPlayer.progress_ms;
                const userTrackUri = userPlayer.item.uri;
                if (Math.abs(userProgress - hostProgress) > 200 || userTrackUri !== hostTrackUri)
                    await API.syncTrack(hostTrackUri, hostProgress + 75);
            });
        } catch (e) {
            console.error(e);
        }
    };

    setInterval(pollHostPlayerStatus, 3000);
};
