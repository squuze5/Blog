import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

/* TODO: Add pagination */
/* TODO: Add validation all routers */

/* List Posts */
export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM posts');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}

/* Get Post by ID */
export const getPostbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    try {
        const response: QueryResult = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}

/* Create a Post */
export const createPost = async (req: Request, res: Response): Promise<Response> => {
    const { author, text } = req.body;

    try {
        await pool.query('INSERT INTO posts (author, text) VALUES ($1, $2)', [author, text]);
        return res.status(200).json({
            message: 'Post created successfully',
            body: {
                user: {
                    author,
                    text
                }
            }
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}

/* Update a Post */
export const updatePost = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const { author, text } = req.body;

    try {
        await pool.query('UPDATE posts SET author = $1, text = $2 WHERE id = $3', [author, text, id]);
        return res.status(200).json({
            message: `Post ${id} updated successfully`,
            body: {
                author,
                text
            }
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}

/* Delete a Post */
export const deletePost = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM posts WHERE id = $1', [id]);
        return res.status(200).json({
            message: `Post ${id} deleted successfully`
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}