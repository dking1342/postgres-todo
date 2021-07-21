import pool from '../../config/pg.js';

const todos = {
    Query:{
        getTodos: async (_,__) => {
            try {
                const todos = await pool.query("SELECT * FROM todo");
                return todos.rows;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        getTodo: async (_,{ id }) => {
            try {
                const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
                return todo.rows[0]
            } catch (error) {
                throw new Error(error.message);
            }
        }
    },
    Mutation:{
        postTodo: async (_,{ description }) => {
            try {
                const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
                if(newTodo) {
                    let newTodos = await pool.query("SELECT * FROM todo");
                    return newTodos.rows;
                } else {
                    throw new Error('could not fetch new list of todos');
                }
            } catch (error) {
                throw new Error(error.message);
            }
        },
        updateTodo: async (_,{ id, description }) => {
            try {
                const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
                if(updateTodo){
                    let updatedTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
                    if(updatedTodo){
                        let newTodos = await pool.query("SELECT * FROM todo");
                        return newTodos.rows;
                    }
                }
            } catch (error) {
                throw new Error(message.error);
            }
        },
        deleteTodo: async (_,{ id }) => {
            try {
                const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
                if(deleteTodo){
                    let newTodos = await pool.query("SELECT * FROM todo");
                    return newTodos.rows;
                }
            } catch (error) {
                throw new Error(error.message);
            }
        },
        deleteTodos: async () => {
            try {
                const deleteTodos = await pool.query("DELETE FROM todo");
                if(deleteTodos){
                    let newTodos = await pool.query("SELECT * FROM todo");
                    return newTodos.rows;
                }
            } catch (error) {
                throw new Error(error.message);
            }
        }
    }
};

export default todos;