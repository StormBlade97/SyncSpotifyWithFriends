const SpotifyUserAPI = require('./spotify-api/UserApi');

// RoomStore is an abstraction to provide data about users in "the room"
class RoomStore {
    constructor() {
        this.participants = [];
    }

    getParticapants() {
        return [...this.participants];
    }

    getHost() {
        return this.participants[0];
    }

    async addParticipant (accessToken, refreshToken) {
        // if there is a user in the store, throw Error
        if (this.participants.find((p) => p.accessToken === accessToken))
            throw new Error('This user already exist');
        // else add that user in the registry

        let user = { accessToken, refreshToken };
        const userAPI = new SpotifyUserAPI(accessToken, refreshToken);
        const rawProfile = await userAPI.getProfile();

        if (!rawProfile) throw new Error('Cannot fetch user API. Failed to create new user');

        user.name = rawProfile.display_name;
        user.email = rawProfile.email;
        user.id = rawProfile.id;
        user.image = rawProfile.images ? rawProfile.images[0] : '';

        this.participants.push(user);
        return user;
    };

    removeParticipant(accessToken) {
        // look up user by access token. If user is found, remove, otherwise do nothing
        const foundIndex = this.participants.findIndex((p) => p.accessToken === accessToken);
        if (foundIndex > -1) {
            delete this.participants.splice(foundIndex, 1);
        } else {
            console.log('Unable to delete user');
        }
    }
}

// In the future, RoomStore shouldn't need to be a singleton to have multiple rooms
module.exports = new RoomStore();