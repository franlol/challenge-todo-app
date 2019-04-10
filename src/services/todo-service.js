import axios from 'axios';

class ToDoService {

    constructor() {
        this.todo = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_URL,
            withCredentials: true
        });
    }

    async add(todo) {
        const newToDo = await this.todo.post(`/api/v1/`, { todo });
        return newToDo;
    }

    async get() {
        const allTodos = await this.todo.get(`/api/v1/todos`);
        return allTodos;
    }

}

const todoService = new ToDoService();

export default todoService;

