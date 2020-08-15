"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostbyId = exports.getPosts = void 0;
const database_1 = require("../database");
/* TODO: Add pagination */
/* TODO: Add validation all routers */
/* List Posts */
exports.getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM posts');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
/* Get Post by ID */
exports.getPostbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield database_1.pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
/* Create a Post */
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { author, text } = req.body;
    try {
        yield database_1.pool.query('INSERT INTO posts (author, text) VALUES ($1, $2)', [author, text]);
        return res.status(200).json({
            message: 'Post created successfully',
            body: {
                user: {
                    author,
                    text
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
/* Update a Post */
exports.updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { author, text } = req.body;
    try {
        yield database_1.pool.query('UPDATE posts SET author = $1, text = $2 WHERE id = $3', [author, text, id]);
        return res.status(200).json({
            message: `Post ${id} updated successfully`,
            body: {
                author,
                text
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
/* Delete a Post */
exports.deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield database_1.pool.query('DELETE FROM posts WHERE id = $1', [id]);
        return res.status(200).json({
            message: `Post ${id} deleted successfully`
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
