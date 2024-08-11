<script>
    import { fly } from "svelte/transition";

    export let data;
    let todos = data.todos;
</script>

<main>
    <form class="addForm" method="POST" action="?/add">
        <input
            class="add"
            name="task"
            type="text"
            placeholder="Ingresa tu Tarea..."
            required
            autocomplete="off"
        />
        <button type="submit">Agregar</button>
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
        color-scheme: light dark;
        accent-color: cyan;
    }

    * {
        box-sizing: border-box;
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
        background-color: light-dark(#e8e8e8, #333);
    }

    .underlined {
        text-decoration-line: line-through;
    }

    .addForm {
        display: flex;
        gap: 0.5rem;
    }

    .add {
        flex-grow: 1;
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
