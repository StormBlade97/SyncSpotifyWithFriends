const router = require('express').Router();
const fetch = require('node-fetch');
const RoomStore = require('../RoomStore');
const URLSearchParams = require('url').URLSearchParams;
const apiHelper = require('../spotify-api/ApiHelpers');

router.get('/login', (req, res) => {
    res.redirect(apiHelper.getAuthURL());
});

router.get('/loggedin', async (req, res) => {
    if (req.query.error === 'access_denied') {
        res.send('Access denied'); // placeholder
        return;
    }
    if (!req.query.code) {
        throw "Authorization code not found";
    }

    let accessToken = null;

    try {
        const responseJson = await fetch(apiHelper.getAccessTokenURL(req.query.code), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        });
        const responseData = await responseJson.json();
        // if success, register this user into the store
        await RoomStore.addParticipant(responseData.access_token, responseData.refresh_token); // TODO worry about expires_in
        accessToken = responseData.access_token;
        console.log(`User logged in with access token:\n${accessToken}`);
    } catch (e) {
        // if failed to get token or cannot register user, log the error
        console.error(e);
    }
    // /app is where the front-end is hosted
    res.cookie('usertoken', accessToken);
    res.redirect('/');
});

router.get('/logout', async (req, res) => {
    try {
        await RoomStore.removeParticipant(req.query.code);
        res.send('Logged out');
    } catch (error) {
        console.error(error);
        res.status(402).send('Cannot logout');
    }
});

module.exports = router;
