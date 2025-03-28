import db from '../models/index';
import CRUDService  from '../services/CRUDService';

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

let gettest = (req, res) => {
    return res.render('test/test.ejs')
}

let getCRUD =(req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud');
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('display-CRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if(userId){
        let userData = await CRUDService.getUserInfoId(userId);
        //let userData
        return res.render('edit-CRUD.ejs', {
            userData: userData
        })
    }
    else{
        return res.send('user not found ')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('display-CRUD.ejs', {
        dataTable: allUsers
    });
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if(id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete user succed')      
    }
    else{
        return res.send('User not found!')
    }
}

module.exports = {
    getHomePage: getHomePage,
    gettest: gettest,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}