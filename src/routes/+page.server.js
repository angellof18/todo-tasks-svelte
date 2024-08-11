export function load({ cookies }) {
    let todos = JSON.parse(cookies.get("todos") || "[]");
    return {
        todos
    };
}


export const actions = {
    add: async ({ cookies, request }) => {
        const form = await request.formData()
        const task = form.get('task')
        let todos = JSON.parse(cookies.get("todos") || "[]");
        todos = [
            ...todos,
            {
                id: Date.now().toString(30),
                text: task,
                done: false,
            },
        ];
        cookies.set("todos", JSON.stringify(todos), { path: '/' });
    },
    delete: async ({ cookies, url }) => {
        const id = url.searchParams.get('id');
        let todos = JSON.parse(cookies.get("todos"));
        todos = todos.filter(todo => todo.id !== id);
        cookies.set("todos", JSON.stringify(todos), { path: '/' });
    }
} 