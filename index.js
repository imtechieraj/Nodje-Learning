const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");

const app = express();

const port = 3000;

// Body parcer

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* User Module Routes Start */

app.use('/user', userRoutes)

/* User Module Routes End */

/* Product Module Start */

app.use('/product', productRoutes)


/* Product Module End */



app.listen(port, () => {
    console.log("=------ server running----=")
})