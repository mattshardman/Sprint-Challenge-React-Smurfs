const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 0,
    image: 'http://pngimg.com/uploads/smurf/smurf_PNG33.png',
    name: 'Brainey Smurf',
    age: 200,
    height: '8cm'
  },
  {
    id: 1,
    image: 'https://vignette.wikia.nocookie.net/sonypicturesanimation/images/0/04/Clumsy_smurfs_2_2017.png/revision/latest?cb=20170717001650',
    name: 'Happy Smurf',
    age: 100,
    height: '12cm'
  },
  {
    id: 2,
    image: 'https://cdn1.iconfinder.com/data/icons/smurfs/512/grouchy-smurf-icon.png',
    name: 'Grumpy Smurf',
    age: 400,
    height: '6cm'
  },
  {
    id: 3,
    image: 'http://pngimg.com/uploads/smurf/smurf_PNG46.png',
    name: 'Papa Smurf',
    age: 220,
    height: '3cm'
  }
];

server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});

let smurfId = 1;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
