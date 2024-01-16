import * as express from 'express';
import passport from '../config/passport';
import { User } from '../models/user';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    req.login(user, (err) => {
      if (err) throw err;
      res.status(200).json({
        status: true,
        message: "Registered successfully"
      })
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

export default router;
