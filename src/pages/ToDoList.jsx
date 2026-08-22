import { useState } from "react"
import ToDoView from "../components/ToDoView";
import ToDoForm from "../components/ToDoForm";

function ToDoList() {
     const [counter, setCounter] = useState(0);
      
    const onClickCounter = () => {
        setCounter((counter) => counter + 1);
        setCounter((counter) => counter + 1);
    }

    return (
        <main className="w-full flex justify-center">
            <section className="max-w-6xl flex flex-col justify-center items-center gap-4">
                <header className="w-full flex border border-gray-100 shadow-sm rounded-lg px-6 py-4">
                    <h1 className="text-xl">Todos</h1>
                    <p className="ml-auto" onClick={onClickCounter}>
                    {counter}
                    </p>
                </header>
                <div className="grid grid-cols-[1fr_3fr] grid-rows-1 min-h-[calc(100vh-44px)] gap-4">
                    <ToDoForm />
                    <ToDoView />
                </div>
            </section>
        </main>
    )
}

export default ToDoList