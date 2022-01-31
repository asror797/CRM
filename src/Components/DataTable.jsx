import {useNavigate} from 'react-router-dom';
import { useState , useContext } from 'react';
import data from './../data';
import {Context} from './../Context/UsersContext'

function DataTable(prop) {

  console.log(prop)
  // console.log(prop.users)

  // const [usersme , setUsersMe] = useState(data)
  let {Users} = useContext(Context)
  console.log(Users)

  

  let navigate = useNavigate()
  return(
    <>
      <div className="content">
        <div className="content__itm">
          <table>
            <tbody>
            <tr key={45}>
              <th className='name'>Name</th>
              <th className='age'>Age</th>
              <th className='surname'>Surname</th>
              <th className='course'>Course</th>
              <th className='phone'>Phone Number</th>
            </tr>
            {


            Users.map(m=>{
                return(
                  <tr>
                  <td className='name' >{m.name}</td>
                  <td >{m.age}</td>
                  <td>{m.surname}</td>
                  <td>{m.course}</td>
                  <td className='delete'>{m.phone} <div><button className='editBtn' onClick={e => navigate('/edit')}>Edit</button> <button className='delBtn' onClick={e=>{console.log(JSON.parse(localStorage.getItem('Users')))}}>Del</button></div></td>
                </tr>

                );
              })
            }

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


export default DataTable;