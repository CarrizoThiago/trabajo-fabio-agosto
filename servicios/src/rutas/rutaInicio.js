import express from "express";

const rinicio = express.Router();
rinicio.get('/', (pet, resp) => {
    resp.render('index');
})
export { rinicio }
