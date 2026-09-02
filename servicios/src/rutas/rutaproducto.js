import express from "express";

const rpro = express.Router();
rpro.get('/', (pet, resp) => {
    resp.render('pro/menuproducto');
})
export { rpro }