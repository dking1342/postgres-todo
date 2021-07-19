import pool from "../config/pg.js";

export const getTodos = async (req,res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo");

        if(todos) return res.status(200).json({success:true,count:todos.rowCount,payload:todos.rows});
    } catch (error) {
        res.status(400).json({success:false,payload:'Bad Request'});
    }
}

export const getTodo = async (req,res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
        todo && res.status(200).json({success:true,payload:todo.rows[0]});
    } catch (error) {
        res.status(400).json({success:false,payload:'Bad Request'});        
    }
}

export const postTodos = async (req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);        

        if(newTodo) {
            res.status(201).json({success:true,payload:newTodo.rows[0]});
        } else {
            res.status(400).json({success:false,payload:'database entry fail'});
        }
    } catch (error) {
        res.status(400).json({success:true,payload:'Bad Request'});
    }
}

export const updateTodos = async (req,res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        console.log('des',description)
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
        
        if(updateTodo){
            let updatedTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
            updatedTodo && res.status(200).json({success:true,payload:updatedTodo.rows[0]});
        }
    } catch (error) {
        res.status(400).json({success:true,payload:'Bad Request'});        
    }
}

export const deleteTodos = async (req,res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        deleteTodo && res.status(200).json({success:true,payload:'todo deleted'});
    } catch (error) {
        res.status(400).json({success:true,payload:'Bad Request'});
    }
}