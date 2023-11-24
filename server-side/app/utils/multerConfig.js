'use strict'
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".png");
    },
});

const fileFilter = function (req, file, cb) {
    const allowedExtensions = [".jpeg", ".jpg", ".png"];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
        return cb(new Error("Only jpeg, jpg, and png are allowed!"));
    }

    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;
