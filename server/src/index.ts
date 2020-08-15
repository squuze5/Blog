import express from 'express';

const PORT = 4001;

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);    
});