import express from 'express';
import indexRoutes from './routes/index';

const PORT = 3002;

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(indexRoutes);

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);    
});