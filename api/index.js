import express from 'express';
import cors from 'cors';
import players from '../api/db/rugbyPlayers.js';
import { getTop5Players } from './handler/getTop5Players.js';
import { validate } from './handler/validate.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/players', async (req, res) => {
  res.json({ data: getTop5Players(players) });
});

app.post('/player', async (req, res) => {
  const user = req.body;

  const error = validate(req.body);
  if (error) {
    res.status(400);
    res.send(error);
    return;
  }

  players.push(user);
  // Send a response to client that will show that the request was successful.
  res.send({
    message: 'New user was added to the list',
  });
});
app.listen(5000, () => {
  console.log('leeetsa go');
});
