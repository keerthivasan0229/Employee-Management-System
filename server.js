
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employees');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_crud_employees';
mongoose.connect(MONGODB_URI)
  .then(()=> app.listen(PORT, ()=> console.log('Server running on', PORT)))
  .catch(err=> console.error(err));
