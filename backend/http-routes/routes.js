const router = require('express').Router();
const fetch = require('node-fetch');
const userStore = require('./userStore');
const URLSearchParams = require('url').URLSearchParams;
const apiHelper = require('../spotify-api/api-helpers');

const REDIRECT_URI = `${process.env.APP_HOST_LOCATION}/loggedin`;

router.get('/', (req, res) => {
    res.redirect('/login');
});
router.get('/login', (req, res) => {
    res.redirect(apiHelper.getAuthURL());
});

router.get('/loggedin', async (req, res) => {
    if (req.query.error === 'access_denied') {
        res.send('Access denied'); // placeholder
        return;
    }
    // now get access token
    try {
        const responseJson = await fetch(apiHelper.getAccessTokenURL(req.query.code), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        });
        const responseData = await responseJson.json();
        // if success, register this user into the store
        userStore.createUser(responseData.access_token, responseData.refresh_token); // TODO worry about expires_in
    } catch (e) {
        // if failed to get token or cannot register user, log the error
        console.error(e);
    }
    // /app is where the front-end is hosted
    res.redirect('/app');
});

router.get('/logout', async (req, res) => {
    try {
        await userStore.removeUser(req.query.code);
        res.send('Logged out');
    } catch (error) {
        console.error(error);
        res.status(402).send('Cannot logout');
    }
});

module.exports = router;
