import path from 'path';
import productModel from '../models/products.model.js'
export default class productController{
    
    getProducts(req, res){
        let products = productModel.get(); 

        res.render("products", {products:products}) // rendering products.ejs to index.js
    }

    getAddForm(req, res){
        let errors =[];
        return res.render('new-product', {errorMessage:errors[0]})
    }

    addNewProduct(req,res){
        productModel.add(req.body); //adding new product to products
        let products = productModel.get();
        res.render('products', {products: products})
    }

    getUpdateProductView(req,res,next){
        // if product exist then return view to update
        const id = req.params.id;
        const productFound = productModel.getById(id);
        if (productFound){
            res.render('update-product', {product:productFound, errorMessage:null})
        } 
        // else return with product not found
        else {
            res.status(401).send('product not found');
        }

    }

    postUpdateProduct (req,res,next){
        productModel.update(req.body); //adding updated details to specific product to updated
        let products = productModel.get();
        console.log(products[products.length - 1]);
        res.render('products', {products: products})
    }


}
