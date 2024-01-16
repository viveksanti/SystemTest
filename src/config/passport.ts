import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/user'; 

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user || !user.isValidPassword(password)) {
        return done(null, false, { message: 'Invalid username or password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(1);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
