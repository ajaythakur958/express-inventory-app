import productModel from "../models/products.model.js";
import usersModel from "../models/users.model.js";

export default class UserController {
    getRegister(req, res) {
      res.render('register');
    }
    getLogin(req,res){
      res.render('login', {errorMessage: null});
    }
    postRegister(req,res){
      const{name,email, password} = req.body;
      usersModel.add(name, email, password);
      res.render('login', {errorMessage: null});
    }
    postLogin(req,res){
      const{email,password} = req.body;
      const user = usersModel.isValidUser(email,password)
      if (!user){
        res.render('login', {errorMessage: 'Invalid User'});
      }
      const products = productModel.get();
      res.render('products', {products});
    }
  }