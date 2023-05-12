import { Link } from 'react-router-dom';
import './App.css'

function App() {
 

  // handle Create Users Form
  const handleCreateUsersForm = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const createUser = {name, email}
    console.log(createUser)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(createUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     if(data.insertedId){
      form.reset();
      alert('User Added successfully')
     }

    })
  }
  

  return (
    <div>
      <h1>Add users in Mongodb</h1>
      <form onSubmit={handleCreateUsersForm}>
        <input type="text" name="name" placeholder='type your name' /><br />
        <input type="email" name="email" placeholder='type your email' /><br />
        <button>Submit</button>
        <br />
        <Link to='/users'><button>Next</button></Link>
      </form>
    </div>    
  )
}

export default App;
