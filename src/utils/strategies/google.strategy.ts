import passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { authService, userService } from '../ioc/services.ioc';
import { AuthDto } from '../dtos/auth/auth.dto';

const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || '';
const GOOGLE_CALLBACK_URL: string =
  'http://localhost:3000/auth/google/redirect';

// Configure the Google strategy for use by Passport.
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile: Profile, cb) {
      const user: AuthDto = await authService.findOrCreate(profile);
      return cb(null, user);
    },
  ),
);

passport.serializeUser((res: any, done) => {
  done(null, res.user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userService.findOne(parseInt(id + '')); // Replace with your function to retrieve user by ID
  done(null, user);
});
