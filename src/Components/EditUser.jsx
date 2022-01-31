

function EditUser() {

  return(
    <>
      <div className="adduser">
        <div className="adduser__header">
          <p className="birnima">Edit <span>user</span></p>
          <select 
            className="select">
            <option value={'null'} defaultValue={'sasmk'} disabled>Course</option>
            <option value={'web'}>Web Programming</option>
            <option value={'android'}>Android Programming</option>
            <option value={'graphic'}>Graphic designer</option>
            <option value={'smm'}>SMM</option>
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
                placeholder="Name"
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Surname
              </label>
              <input 
                placeholder="Surname" 
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Age
              </label>
              <input 
                placeholder="Age" 
                type="text" />
            </div>

            <div 
              className="nameInput">
              <label>Phone Number
              </label>
              <input 
                placeholder="Phone Number"
                type="text" />
            </div>
          </form>
          <button 
            onClick={e => console.log(e.target.value)}
            className="userAddbutton">
            Add user
            </button>
        </div>
    </>
  );
}

export default EditUser;