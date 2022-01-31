import { useState , useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Context} from './../Context/UsersContext'

function Add() {

  let {Users, setUsers} = useContext(Context)
  let navigate = useNavigate()
  
  const [course , setCourse] = useState(null)
  const [Name , setName] = useState(null)
  const [Age , setAge] = useState(null)
  const [SurName , setSurName] = useState(null)
  const [PhoneNumber , setPhoneNumber] = useState(null)

  let user ={
    name:Name,
    surname:SurName,
    age:Age,
    phone:PhoneNumber,
    course:course
  }
  // const [InputName , setInputName ] = useState('')

  

  function createUser() {
    
    console.log(Users)
    return(
      localStorage.setItem('Users',JSON.stringify(Users)),
      setUsers([ user , ...Users ]) 
    );
  }

  

  return(
    <>
      <div className="adduser">
        <div className="adduser__header">
          <p className="birnima" onClick={()=> navigate('/')}>Add <span>user</span></p>
          <select 
            className="select" 
            onChange={e =>setCourse(e.target.value)}>
            <option value={'null'} selected disabled>Course</option>
            <option value={'Web Programming'}>Web Programming</option>
            <option value={'Android Programming'}>Android Programming</option>
            <option value={'Graphic designer'}>Graphic designer</option>
            <option value={'SMM'}>SMM</option>
          </select>
        </div>
      </div>
        <div 
          className="create__section">
          <form>
            <div 
              className="nameInput">
              <label>Name
              </label>
              <input 
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Surname
              </label>
              <input 
                onChange={e => setSurName(e.target.value)}
                placeholder="Surname" 
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Age
              </label>
              <input 
                onChange={e => setAge(e.target.value)}
                placeholder="Age" 
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Phone Number
              </label>
              <input 
                onChange={e => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                type="text" />
            </div>
            
          </form>
          <button 
            onClick={e =>createUser()}
            className="userAddbutton">
            Add user
            </button>
        </div>
    </>
  );
}


export default Add;