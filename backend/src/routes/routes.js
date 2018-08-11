const router = require('express').Router();
const fetch = require('node-fetch');
const RoomStore = require('../RoomStore');
const URLSearchParams = require('url').URLSearchParams;
const apiHelper = require('../spotify-api/ApiHelpers');

const REDIRECT_URI = `${process.env.APP_HOST_LOCATION}/loggedin`;

// router.get('/', (req, res) => {
//     res.redirect('/login');
// });
router.get('/login', (req, res) => {
    res.redirect(apiHelper.getAuthURL());
});

router.get('/loggedin', async (req, res) => {
    if (req.query.error === 'access_denied') {
        res.send('Access denied'); // placeholder
        return;
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
        RoomStore.addParticipant(responseData.access_token, responseData.refresh_token); // TODO worry about expires_in
        accessToken = responseData.access_token;
    } catch (e) {
        // if failed to get token or cannot register user, log the error
        console.error(e);
    }
    // /app is where the front-end is hosted
    res.cookie('usertoken', accessToken);
    res.redirect('back');
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
