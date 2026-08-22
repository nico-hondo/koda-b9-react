import { useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";

function ToDoView() {
    const todoState = useSelector((state) => state.todoState);

    return (
        <section className="grid auto-rows-25 grid-cols-2 gap-2 p-2">
            {todoState.todo.length > 0 ? (
                todoState.todo.map((todo) => (
                    <ToDoCard
                        key={todo.id}
                        todo={todo}
                    />
                ))
            ) : (
                <p>No Todos Available</p>
            )}
        </section>
    );
}

export default ToDoView;