import { Router } from 'express';
import { getPosts, getPostbyId, createPost, deletePost, updatePost } from '../controllers/post';

const router = Router();

/* Post routers */
router.get('/posts', getPosts);
router.get('/posts/:id', getPostbyId);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
