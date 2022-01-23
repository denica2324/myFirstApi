import React from "react";


const AddUser = ({ onAdd }) => {

    // eslint-disable-next-line no-unused-vars
    const handleOnSubmit = (e) => {
      e.preventDefault();
     // console.log(e.target.name.value,'saad') 
       onAdd(e.target.name.value,e.target.email.value);
        // e.target.name.value ="";
         //e.target.email.value ="";
    }

    
    return(
        <div className="list">
        {/* <form onSubmit={handleOnSubmit}>
            <h3> Add User</h3>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <button onSubmit={handleOnSubmit}>Add</button>
            <hr />
        </form> */}
        </div>
    );
};

export default AddUser;