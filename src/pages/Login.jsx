import {useContext} from "react";
import UserContext from "../context/user/context.js";
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);

  const [data] = state.users;

  console.log(data.username);
  return (
    <main className="w-full min-h-100 flex justify-center items-center">
        <div className="max-w-3xl h-full flex-1 flex flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl font-medium">Silahkan Login</h1>
            <form className="flex flex-col gap-2"
              onSubmit = {(e) => {
                e.preventDefault();

                const uname = e.target.uname.value;

                if(data.username !== uname){
                  console.log("Masukkan username yang benar!")
                }else{
                  dispatch({type: 'LOGIN', 
                    payload:{
                      login: data.username,
                    }
                  });
                  navigate('detail');
                }
                
              }}
            >
                <input type="text" name="uname" placeholder="Masukkan Username mu" className="border border-gray-200 w-70 h-12 p-3 rounded-lg"/>
                <button type="submit" className="bg-blue-600 text-white p-4 rounded-lg border border-gray-200 cursor-pointer text-md">Masuk</button>
            </form>
        </div>
    </main>
  )
}

export default Login