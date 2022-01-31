

function Modal({ closeModal} ) {
  

  return(
    <>
      <div className="modalBackground" >
        <div className="modalBox">
          <h3>Are You sure ?</h3>
          <div className="modalBtn">
            <button className="blue">Yes</button>
            <button className="red" onClick={ e => closeModal(false)}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;