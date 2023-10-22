import { body, validationResult } from "express-validator"
// const validatingData = (
//     req,
//     res,
//     next
// ) => {


//     const { name, price, imgurl } = req.body; // validating if client have entered details valid or not 
//     let errors = [];
//     if (!name || name.trim() == '') {
//         errors.push('name is invalid')
//     }
//     if (!price || price < 1) {
//         errors.push('price is invalid')
//     }
//     try {
//         const validurl = new URL(imgurl);
//     } catch {
//         errors.push('invalid URL')
//     }

//     if (errors.length > 0) {  // sending response if error shows for invalid data from client
//         return res.render('new-product', { errorMessage: errors })
//     }
// }

// export default validatingData;



//middleware for validation using express-validator
const validatingData = async (
    req,
    res,
    next
) => {
    console.log(req.body);
    // first setup rules for express-validator
    const rules = [
        body('name').isEmpty().withMessage('Name is required'),
        body('price').isFloat({ gt: 0 }).withMessage('invalid price'),
        body('imgurl').isURL().withMessage('invalidURL')
    ];

    // second step is to run rules
    await Promise.all(rules.map(rule => rule.run(req)))

    // check if there any errors after running rules 
    const errors = validationResult(req);
    console.log(errors);


    if (!errors.isEmpty()) {  // sending response if error shows for invalid data from client
        return res.render('new-product', { errorMessage: errors.array()[0].msg })
    }

    next()
}

export default validatingData;