const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const path = require('path');

dotenv.config();
app.use(express.json()); // to can send json
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('Connected to mongoDB'))
  .catch((err) => console.log(err));

// ceate storage for images
const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, 'images'); // null for errors
  },
  filename: (req, file, callb) => {
    callb(null, req.body.name);
  },
});

// method for upload
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen('5000', () => {
  console.log('Backend is running');
});

// to listening our app install nodemon
