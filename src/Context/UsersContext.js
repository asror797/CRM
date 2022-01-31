import { createContext, useState } from "react";


let Context = createContext()

function Provider({children}) {
  
  
    
  const [Users , setUsers ] = useState(JSON.parse(localStorage.getItem('Users')) ? JSON.parse(localStorage.getItem('Users')) : [])

  return(
    <Context.Provider value={{Users,setUsers}}>{children}</Context.Provider>
  );
}

export {Provider , Context};