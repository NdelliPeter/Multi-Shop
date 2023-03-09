import { useState } from "react";



export default function AccountsState () {
    

    const [accounts, setAccounts] = useState()


    const AddAccounts=(data)=>{
        const currentAccount = [data, ...accounts]
        console.log(currentTodo);
        setAccounts(currentTodo) 
        localStorage.setItem("SignUp", JSON.stringify(currentAccount))
      }

}

