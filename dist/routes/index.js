"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("./auth");
const router = express.Router();
router.use('/auth', auth_1.default);
exports.default = router;
