export default class productModel {
    constructor(_id, _desc, _name, _price, _img){
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.img = _img
    }

    static get(){
        return products;
    }

    static add(productObj){
      let newProduct = new productModel(
        products.length +1, 
        productObj.name,
        productObj.desc,
        productObj.price,
        productObj.imgurl
      )
      products.push(newProduct);

    }
}

const products = [
    new productModel(
      1,
      'The Psychology Of Money',
      'Timeless lessons on wealth, greed, and happiness doing well with money',
      239,
      'https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg',
    ),
    new productModel(
      2,
      'How to Win Friends and Influence People',
      'You can learn to expand your social circle, polish your skill set, find ways to put forward your thoughts more clearly, and build mental strength to counter all hurdles that you may come across on the path to success.',
      306,
      'https://m.media-amazon.com/images/I/618XGVFYlwL._SL1360_.jpg',
    ),
    new productModel(
      3,
      'The Power of Your Subconscious Mind',
      'The book explains how by understanding and learning to control our subconscious mind, we can welcome a world of prosperity, happiness and success.',
      104,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
  ]