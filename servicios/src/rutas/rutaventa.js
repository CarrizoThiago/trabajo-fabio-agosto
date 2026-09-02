import express from "express";

const rven = express.Router();
rven.get('/', (pet, resp) => {
    resp.render('ven/menuventa');
})
export { rven }