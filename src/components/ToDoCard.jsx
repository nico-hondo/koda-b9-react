import { useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { IoTrashOutline } from "react-icons/io5";
import { removeTodo, toggleTodo } from "../redux/slice/todo";

function ToDoCard({todo}) {
  const dispatch = useDispatch();
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  }
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }
  return (
    <>
      <article className="flex flex-col gap-4 shadow-lg px-5 py-3 rounded-lg">
        <header className="flex justify-between items-center pb-2 font-bold text-lg capitalize border-b border-gray-200">
          <h2 className="line-clamp-1">{todo.title}</h2>
          <div className="flex gap-3">
            {todo.isFinish ? 
              (<GiCrossMark className="cursor-pointer hover:text-green-600" alt="check" height={20} width={20} onClick={() => handleToggleTodo(todo.id)}/>)
            :
              (<FaCheck className="cursor-pointer hover:text-green-600" alt="check" height={20} width={20} onClick={() => handleToggleTodo(todo.id)}/>)
            }
            
            <IoTrashOutline className="cursor-pointer hover:text-red-500" alt="trash-can" width={20} height={20} onClick={() => handleRemoveTodo(todo.id)}
            />
          </div>
        </header>
        <p className="text-sm text-gray-400">{todo.desc}</p>
      </article>
    </>
  )
}

export default ToDoCard