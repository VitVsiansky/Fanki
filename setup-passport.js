var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'oktavian.eu.auth0.com',
    clientID:     '9KjKDpa6q2RGJNRl8xVFhZw1sokWetyQ',
    clientSecret: 'LnGKqVCxvir_G714DJWha_zfFA6TA1aaWPfiOaUZZcX4f7r23fPabnUiAgo256KP',
    callbackURL:  '/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = strategy;