const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

//Connect Database
connectDB();

//init middleware
app.use(cors());
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>
  res.json({ msg: 'Wellcome to the Contact Keeper API ... ' })
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
