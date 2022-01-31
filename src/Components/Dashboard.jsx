import { useNavigate} from 'react-router-dom';
import './../Styles/Dashboard.scss';
import data from './../data';
import { useState} from 'react';
import Modal from './../Components/Modal';
import DataTable from './DataTable';
import DoneModal from './DoneModal';


function Dashboard() {

  let navigate = useNavigate()
  const [keyWord , setKeyWord] = useState(null)
  const [users , setUsers ] = useState(data)
  const [usersN , setUsersN ] = useState(data)

  console.log(users)
  function Search(e , data) {
    e.preventDefault()
      let filtered_user = data.filter(function(data){
      let keyword = data.name.toLowerCase();
      return keyword.indexOf(keyWord)> -1
    })
    console.log(filtered_user)
    setUsers(filtered_user)
    return(filtered_user);
  }

  const [openMOdal , setOpenModal] = useState(false)
  const [isDone , setDone] = useState(false)



 

  return(
    <>
      <div className="header">
        <div className="wrapper">
          <form className='form' onSubmit={ e=> Search(e)}>
            <input className='search' onChange={ e => setKeyWord(e.target.value)} placeholder='Search'/>
            <button type='submit' onClick={e => Search(e , data)}>Search</button>
          </form>
          <select className='select' onChange={(e)=> {
            return users.sort()
            console.log(users)

            if(e.target.value =='az'){
              setUsers(data.sort( (a,b) => {
                return a.localeCompare(b)
              }))
            }
          }}>
            <option value={'letter'} disabled selected>Sort by Alp</option>
            <option value={'az'}>A-z</option>
            <option value={'za'}>Z-a</option>
          </select>
          <select className='select'>
            <option value={'course'} disabled selected>Sort by Course</option>
            <option value={'web'}>Web programming</option>
            <option value={'android'}>Android programming</option>
            <option value={'graphic'}>Graphic designer</option>
            <option value={'smm'}>SMM</option>
          </select>
          <button className='add' onClick={ ()=> navigate('/add')}>Add new User</button>
          <button type="button" className='mode'><i className="fas fa-adjust"></i> </button>
        </div>
      </div>

      <DataTable prop={{users}}/>
      { openMOdal && <Modal closeModal={setOpenModal}/> }
      { isDone && <DoneModal okModal={setDone}/> }
    </>
  );
}

export default Dashboard;