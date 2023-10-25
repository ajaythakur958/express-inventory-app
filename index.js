import express from 'express';
import productController from './src/controllers/products.controller.js';
import path from 'path';
import ejsLayout from 'express-ejs-layouts';
import validatingData from './src/middleware/validation.middleware.js';
import { uploadFile } from './src/middleware/file-upload.middleware.js';

const server = express();

server.use(ejsLayout); // using ejs as global middleware

server.use(express.urlencoded({extended: true})); // added middleware to parse from data in post req by submit new product

// creating productController instance
const productControllers = new productController();

server.use(express.static('public')) // exposing public folder staticly so js files can be directly accessable for views

server.set("view engine", "ejs");     // sets view engine ejs in header
server.set("views", path.join(path.resolve(),'src','views'))

//routes
server.get('/', productControllers.getProducts); // getting products at /
server.get('/new', productControllers.getAddForm);
server.get('/update-product/:id', productControllers.getUpdateProductView);
server.post('/', uploadFile.single('imgurl'), validatingData,  productControllers.addNewProduct);
server.post('/update-product', productControllers.postUpdateProduct);
server.post('/delete-product/:id', productControllers.postDeleteProduct);

server.use(express.static('src/views')); 

server.listen(3200, ()=>(console.log("server started at 3200")));