import * as Yup from 'yup';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class AuthController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required()
        .email(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password incorret' });
    }

    const { name, id, organizer } = user;

    res.json({
      user: { email, name, id, organizer },
      token: jwt.sign({ id, organizer }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new AuthController();
