const apiHelper = require('./ApiHelpers');
const dotenv = require('dotenv');

beforeAll(() => {
    dotenv.config();
});

it('generates correct auth path', () => {
    const authPath = apiHelper.getAuthURL();
    const parsedQueryParams = authPath
        .split('?')[1]
        .split('&')
        .reduce((accumulate, currQuery) => {
            const splitQuery = currQuery.split('=');
            accumulate[splitQuery[0]] = splitQuery[1];
            return accumulate;
        }, {});

    const scopes = [
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-modify-playback-state',
        'user-read-private',
        'user-read-email',
        'user-read-birthdate',
    ].join('%2B');

    expect(parsedQueryParams.response_type).toBe('code');
    expect(parsedQueryParams.scope).toBe(scopes);
    expect(parsedQueryParams.redirect_uri).toBeTruthy();
    expect(parsedQueryParams.client_id).toBeDefined();
});

it('generates correct token query path', () => {
    const authPath = apiHelper.getAccessTokenURL('THECODEISHEREHAHAHA');
    const parsedQueryParams = authPath
        .split('?')[1]
        .split('&')
        .reduce((accumulate, currQuery) => {
            const splitQuery = currQuery.split('=');
            accumulate[splitQuery[0]] = splitQuery[1];
            return accumulate;
        }, {});

    expect(parsedQueryParams.grant_type).toBe('authorization_code');
    expect(parsedQueryParams.client_id).not.toBe('');
    expect(parsedQueryParams.client_secret).not.toBe('');
});
