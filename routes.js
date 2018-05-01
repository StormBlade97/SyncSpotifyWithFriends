const router = require("express").Router();
const fetch = require("node-fetch");
const spotify = require("./spotifyApi");
const userStore = require("./userStore");
const URLSearchParams = require("url").URLSearchParams;

const REDIRECT_URI = "http://91dc379d.ngrok.io/loggedin";
router.get("/", (req, res) => {
    res.send("Christian is a poopoo head");
});
router.get("/login", (req, res) => {
    const spotifyScopes = [
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-modify-playback-state",
        "user-read-private",
        "user-read-email",
        "user-read-birthdate"
    ];
    const spotifyAuthURL =
        "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        process.env.CLIENT_ID +
        "&scope=" +
        spotifyScopes.join("+") +
        "&redirect_uri=" +
        REDIRECT_URI;

    res.redirect(spotifyAuthURL);
});

router.get("/loggedin", async (req, res) => {
    console.log("HELLOS");
    if (req.query.error === "access_denied") {
        res.send("Access denied"); // placeholder
        return;
    }
    // now get access token
    try {
        const params = new URLSearchParams({
            grant_type: "authorization_code",
            code: req.query.code,
            redirect_uri: REDIRECT_URI,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        });
        const responseJson = await fetch("https://accounts.spotify.com/api/token?" + params.toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        });
        const responseData = await responseJson.json();
        userStore.createUser(responseData.access_token, responseData.refresh_token); // TODO worry about expires_in
    } catch (e) {
        console.error(e);
    }
    res.redirect("/");
});

router.get("/logout", async (req, res) => {
    // await userStore.createUser(req.query.code)
    // res.send("okay!")
    // res.redirect("/")
});

module.exports = router;
