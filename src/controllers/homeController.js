import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data : JSON.stringify(data)
        });
    }catch (e) {
        console.log(e)
    }
    
}

let getCRUD =(req,res) => {
    return res.render('crud.ejs')
}

let gettest = (req,res) => {
    return res.render('test/test.ejs')
}

let postCRUD = (req,res) => {
    console.log(req.body);
    return res.send('post crud');
}
module.exports = {
    getHomePage: getHomePage,
    gettest: gettest,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}