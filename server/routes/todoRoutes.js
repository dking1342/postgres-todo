import express from 'express';

const router = express.Router();
import { 
    deleteTodos, 
    getTodo, 
    getTodos, 
    postTodos, 
    updateTodos 
} from '../controllers/todoController.js';

router.get('/',(req,res)=>res.send('server is working'));
router.get('/todos',getTodos);
router.get('/todo/:id',getTodo);
router.post('/todo',postTodos);
router.put('/todo/:id',updateTodos);
router.delete('/todo/:id',deleteTodos);

export default router;