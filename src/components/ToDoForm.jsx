import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/slice/todoThunk";

function ToDoForm() {
  const dispatch = useDispatch();
    const [form, setForm] = useState({
      title: "",
      desc: "",
    });
    const onSubmitHandler = (e) => {
      e.preventDefault();

      dispatch(addTodoAsync(form));

      setForm({
          title: "",
          desc: "",
      });
    };
    const onChangeHandler = (e) => {
      setForm((prevForm) => {
        return {
          ...prevForm,
          [e.target.name]: e.target.value,
        };
      });
    };
  return (
    <section className="border border-gray-100 rounded-xl shadow-lg p-4">
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-sans focus:outline-none" value={form.title} onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Deskripsi</label>
          <textarea name="desc" id="desc" className="w-full h-30 border border-gray-200 px-3 py-2 rounded-lg resize-none focus:outline-none" value={form.desc} onChange={onChangeHandler}
          ></textarea>
        </div>
        <button type="submit" className="w-full h-10 bg-green-600 text-gray-100 font-medium cursor-pointer rounded-lg">
          Create
        </button>
      </form>
    </section>
  )
}

export default ToDoForm