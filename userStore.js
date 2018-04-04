const SpotifyUserAPI = require('./spotifyApi');

const userStore = [];

const createUser = async (accessToken, refreshToken) => {
  let user = { accessToken, refreshToken }
  const userAPI = new SpotifyUserAPI(accessToken, refreshToken)
  const rawProfile = await userAPI.getProfile()
  
  user.name = rawProfile.display_name
  user.email = rawProfile.email
  user.id = rawProfile.id
  user.image = rawProfile.images[0]
  
  userStore.push(user)
  return user
};

module.exports = {
  getUserStore() {
    return [...userStore]
  },
  createUser,
  getHost() {
    return userStore[0]
  }
};
