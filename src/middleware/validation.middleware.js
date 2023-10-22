const validatingData = (
    req,
    res,
    next
) => {

    const { name, price, imgurl } = req.body; // validating if client have entered details valid or not 
    let errors = [];
    if (!name || name.trim() == '') {
        errors.push('name is invalid')
    }
    if (!price || price < 1) {
        errors.push('price is invalid')
    }
    try {
        const validurl = new URL(imgurl);
    } catch {
        errors.push('invalid URL')
    }

    if (errors.length > 0) {  // sending response if error shows for invalid data from client
        return res.render('new-product', { errorMessage: errors })
    }
}

export default validatingData;