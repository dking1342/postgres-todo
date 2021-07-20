import express from 'express';

const router = express.Router();
import { 
    deleteAllTodos,
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
router.delete('/todos',deleteAllTodos);

export default router;