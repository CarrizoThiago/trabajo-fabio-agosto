import express from "express";

const rcli = express.Router();

rcli.get('/', (pet, resp) => {
    resp.render('cli/menuclientes');
})

export { rcli }