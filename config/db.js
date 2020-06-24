const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDb Connected.');
  } catch (error) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
