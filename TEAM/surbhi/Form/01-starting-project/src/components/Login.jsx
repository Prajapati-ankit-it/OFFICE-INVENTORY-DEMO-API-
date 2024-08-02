import { useRef } from "react";

export default function Login() {

  const email = useRef();
  const password = useRef();

  // const [enteredValues , setEnteredValues] = useState({
  //   email : '',
  //   password : '',
  // });

  // const [enteredEmail , setEnteredEmail] = useState('');
  
  // const [enteredPassword , setEnteredPassword] = useState ('');

  function handleSubmit(event){
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;   

    console.log ({enteredEmail , enteredPassword});
    
  }

  // function handleInputChange (identifier , value) {
  //   setEnteredValues (prevValues =>({
  //     ...prevValues,
  //     [identifier] : value
  //   }))
  // }

  // function handleChangeEmail(event){
  //   setEnteredEmail (event.target.value);
  // }

  // function handleChangePassword(event){
  //   setEnteredPassword (event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}
          //  onChange={(event) => handleInputChange('email',event.target.value)}
          //  value={enteredValues.email} 
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}
          //  onChange={(event) => handleInputChange('password',event.target.value)}
          //  value={enteredValues.password} 
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}