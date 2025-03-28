import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/test', homeController.gettest);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);      
    router.get('/get-crud',homeController.displayCRUD);
    router.get('/edit-crud',homeController.getEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);
    //rest api  


    return app.use("/",router);
}

module.exports = initWebRoutes;