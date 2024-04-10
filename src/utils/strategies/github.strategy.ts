import passport from 'passport';
import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import { authService, userService } from '../ioc/services.ioc';
import { AuthDto } from '../dtos/auth/auth.dto';

const GITHUB_CLIENT_ID: string = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET: string = process.env.GITHUB_CLIENT_SECRET || '';
const GITHUB_CALLBACK_URL: string = process.env.GITHUB_CALLBACK_URL || '';

// Configure the Github strategy for use by Passport.
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    async function (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      cb: any,
    ) {
      const email: string = profile.username || '';
      const user: AuthDto = await authService.findOrCreate(
        { name: email, email, sub: profile.id, provider: 'github' },
        email,
        'github',
      );
      return cb(null, user);
    },
  ),
);

passport.serializeUser((res: any, done) => {
  done(null, res.user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userService.findOne(parseInt(id + ''));
  console.log(user);
  done(null, user);
});
