const GitHubStrategy = require("passport-github2").Strategy
const passport = require("passport");


GITHUB_CLIENT_ID = "b52e5943913914381fc4"
GITHUB_CLIENT_SECRET = "2977a0d6673608f7e378c4384056b379f2b06f4e"
passport.use(
    new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done){
            done(null, profile)
        }
    )
)
passport.serializeUser((user,done) => {
    done(null, user)
})
passport.deserializeUser((user,done) => {
    done(null, user)
})
