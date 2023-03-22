import { useEffect, useState } from "react";
import SignUp from "./SignUp";



export default function AccountsState () {
    

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:4000/accounts')
     .then(res => setAccounts(res.accounts))
     .catch(err => console.log(err))
 
   }, [setAccounts])

    const addAccount = (data) => {
      // const account = accounts.map((account) => {
      //   if(account.email === data.email){
      //     alert('Email already exsist please try signing In')
      //   }else{
        const account = axios.post('http://localhost:4000/accounts', data)
          .then(res => {
           console.log(res);
          })
          .catch(err => {
           console.log(err);
          })
      //   }
      // })
      setAccounts(account)
    }
    

      <SignUp 
      addAccount={addAccount} 
       />
}

