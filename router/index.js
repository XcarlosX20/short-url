const express = require("express");
const router = express.Router();
const urlController = require("../controller/urlController");

module.exports = () => {
    router.get('/', urlController.home);
    router.post('/', urlController.addUrl);
    router.get("/:url", urlController.redirectUrl);
    return router;
}