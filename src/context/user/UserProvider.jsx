import { useReducer } from "react";

import UserContext from "./context";

const initialState = {
    users: [
        {id:1, username:'nico-hondo', imageUrl:'../../../public/wanita.jpg'},
    ],
    login: "",
};

export default function UserProvider({children}){

    // action
    // type => mendeskripsikan apa yg terjadi
    // payload => data yg dibawa
    // edit profile -> username, ganti image

    const [state, dispatch]= useReducer((prevState, {type, payload}) => {
        switch(type){
            case "LOGIN":
                return{
                    ...prevState,
                    login: payload.login,
                };
            case "UPDATE_IMAGE":
            return{
                ...prevState,
                users: prevState.users.map((user) => {
                    if(user.id === payload.id){
                        return{
                            ...user,
                            username: payload.username,
                            imageUrl: payload.imageUrl,
                        };
                    }
                    return user;
                }), 
            };
            default:
                return prevState;
        }
    }, initialState)

    return (
        <UserContext.Provider 
            value={{state, dispatch}}
            >
            {children}
        </UserContext.Provider>
    )
}