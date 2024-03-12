const connectToMongo = require('./db');
const cors = require('cors');
const express = require('express');

// routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


// connected to database
connectToMongo();


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })