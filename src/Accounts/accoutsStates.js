import { useEffect, useState } from "react";



export default function AccountsState () {
    

    const [accounts, setAccounts] = useState([])


    useEffect(() => {
      axios.get('http://localhost:4000/accounts')
      .then(res => setAccounts(res.accounts))
      .catch(err => console.log(err))
    }, [])

    const AddAccounts=(data)=>{
        const currentAccount = [data, ...accounts]
        console.log(currentTodo);
        setAccounts(currentTodo) 
        localStorage.setItem("SignUp", JSON.stringify(currentAccount))
      }

}

