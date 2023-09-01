import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  deleteData,
  updateData

} from "../Redux_comp/LoginReducer";
import { useState } from "react";
// import "/Users/shafiyafareena/Documents/redux-practice/my-redux/src/App.css"

const DisplayForm = () => {
  const[updateName,setupdateName]=useState("")
  const[updateMail,setupdateMail]=useState("")
  const [editIndex,setEditIndex] =useState('')
  const details = useSelector(state => state?.form?.details);
const dispatch =useDispatch()

const handleDelete=(name)=>{
  console.log("deleting");
  let arr=details?.filter((item)=>item?.Uname!==name)
  dispatch(deleteData(arr));
}
const handleUpdate = (index) => {
  console.log("updating");
  setupdateName(details[index]?.Uname || " ");
  setupdateMail(details[index]?.mail || " ");
  setEditIndex(index);
  // setEditIndex(index);
  // const Details=[{
  //   Uname:updateName,
  //   mail:updateMail
  // }];

  // dispatch(updateData(Details))
};
const handleSave = (e) => {
  console.log("saving");
  e.preventDefault();
  const updatedRow = {
    Uname: updateName,
    mail: updateMail,
  };
  const updatedDetails = [...details];
  updatedDetails[editIndex] = updatedRow;
  dispatch(updateData(updatedDetails));
  setEditIndex(null);
};

  return (
    <div>
      <table className="loginTable">
        <thead>
          <th>UserName </th>
          <th>email-Id </th>
          <th>Update </th>
          <th>Delete </th>
        </thead>
        {details?.map((data, index) => 
          <tr key={index}>
            <td>{data?.Uname}</td>
            <td>{data?.mail}</td>
            <td>
              {editIndex===index ?(
                <>
                <input type="text" placeholder="update userName "   value = {updateName} onChange={(e)=>setupdateName(e.target.value)}></input>
                <input type="email" placeholder= "update user mailId" value = {updateMail} onChange={(e)=>setupdateMail(e.target.value)}></input>
                <button onClick={(e)=>handleSave(e)}>save</button>
                </>
              ):(
           
            <td> <button onClick={()=>handleUpdate(index)}>update</button></td>
            )}
               </td>
            <td><button onClick={()=>handleDelete(data?.Uname)}>Delete</button></td>
          </tr>
        )}
      </table>
    </div>
  );
};
export default DisplayForm;
