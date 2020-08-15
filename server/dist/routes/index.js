"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const router = express_1.Router();
/* Post routers */
router.get('/posts', post_1.getPosts);
router.get('/posts/:id', post_1.getPostbyId);
router.post('/posts', post_1.createPost);
router.put('/posts/:id', post_1.updatePost);
router.delete('/posts/:id', post_1.deletePost);
exports.default = router;
