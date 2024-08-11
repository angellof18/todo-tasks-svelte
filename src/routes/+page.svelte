<script>
    import { fly } from "svelte/transition";

    export let data;
    let todos = data.todos;
</script>

<main>
    <h1>To-Do</h1>
    <form class="addForm" method="POST" action="?/add">
        <!-- svelte-ignore a11y-autofocus -->
        <input
            class="add"
            name="task"
            type="text"
            placeholder="Ingresa tu Tarea..."
            required
            autofocus
            autocomplete="off"
        />
        <button class="addBtn" type="submit"><i class="bi bi-plus-lg" /></button
        >
    </form>

    {#if todos}
        {#each todos as todo}
            <article transition:fly>
                <input
                    class="checkbox"
                    type="checkbox"
                    bind:checked={todo.done}
                />
                <p class={todo.done ? "underlined" : ""}>{todo.text}</p>
                <form
                    class="delete"
                    method="post"
                    action={`?/delete&id=${todo.id}`}
                >
                    <button type="submit">
                        <i class="bi bi-trash" />
                    </button>
                </form>
            </article>
        {/each}
    {/if}
</main>

<style>
    :root {
        accent-color: #0f67b1;
    }

    * {
        box-sizing: border-box;
    }

    .addBtn {
        border-radius: 50%;
        padding: 0.5rem 0.75rem;
        background: #0f67b1;
        color: white;
    }

    .checkbox {
        grid-area: check;
    }

    p {
        grid-area: texto;
        width: 100%;
        margin: 0 0;
    }

    .delete {
        grid-area: delete;
    }

    article {
        width: 100%;
        display: grid;
        grid-template:
            "check texto delete" 30px
            "check texto delete" auto/
            30px auto 76px;
        padding: 1rem;
        gap: 0.5rem;
        border-radius: 10px;
        box-shadow: 5px 0px 15px rgba(0, 0, 0, 0.08);
    }

    .underlined {
        text-decoration-line: line-through;
    }

    .addForm {
        width: 70%;
        display: flex;
        gap: 0.5rem;
    }

    .add {
        flex-grow: 1;
        min-width: 75px;
    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
</style>
