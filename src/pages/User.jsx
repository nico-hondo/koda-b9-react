import {useState, useContext} from "react";
import UserContext from "../context/user/context.js";
// import { useNavigate } from 'react-router';
import {useNavigate} from 'react-router'

function User() {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);

  const [user] = state.users;
  const data = state.login;

  console.log(user.imageUrl);
  console.log(data);

    const [photo, setPhoto] = useState({
      file: null,
      objectURL: null,
    });
    const [fullname, setFullname] = useState({
      value: "",
      isError: false,
    });

  return (
    <>
      {data === "" ? navigate('profile') :
       <main className="w-full flex-1 flex justify-center items-center">
            <div className="max-w-xl flex-1 grid gap-10 text-center">
                <p className="text-2xl font-bold">Profile Anda</p>
                <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const data = {
                        photo: photo.value,
                        fullname: fullname.value,
                      };
                      dispatch({type: 'UPDATE_IMAGE', 
                        payload:{
                          id: user.id,
                          username: fullname.value,
                          imageUrl: photo.value,
                        }
                      });
                      console.log(data);
                    }}
                
                className="flex flex-col gap-3">
                  <div className="flex flex-col items-center">
                  <label htmlFor="photo">
                    <div className="h-30 w-30 rounded-full overflow-hidden">
                      <img
                        src={user.imageUrl}
                        alt="profile photo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </label>
          
                </div>
                    <div className="grid grid-cols-2 gap-3 w-8/10 items-center">
                      <label htmlFor="name">Ganti Username</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="p-1"
                        // value={user.username}
                        onChange={(e) => {
                          setFullname((prevState) => {
                            const newFullname = e.target.value;
                            return {
                              ...prevState,
                              value: newFullname,
                              isError: newFullname.length < 5 ? true : false,
                            };
                          });
                        }}
                      />
                      <p
                        className={`${fullname.isError ? "text-red-600" : "opacity-0"} col-[1/3]`}
                      >
                        Nama Lengkap harus lebih dari 5 karakter
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-8/10 items-center">
                      <label htmlFor="foto">Ganti Foto</label>
                      <input
                        type="text"
                        name="foto"
                        id="foto"
                        className="p-1"
                        // value={user.imageUrl}
                        onChange={(e) => {
                          setPhoto((prevState) => {
                            const newFoto = e.target.value;
                            return {
                              ...prevState,
                              value: newFoto,
                              isError: newFoto.length < 5 ? true : false,
                            };
                          });
                        }}
                      />
                      <p
                        className={`${fullname.isError ? "text-red-600" : "opacity-0"} col-[1/3]`}
                      >
                        Nama Lengkap harus lebih dari 5 karakter
                      </p>
                    </div>
                 <button type="submit">Submit</button>
                </form>


                <p>Username Anda: {user.username}</p>
            </div>
        </main> 
      }
    </>
  )
}

export default User