/* eslint-disable react/prop-types */
import "./Form.css";
import Navbar from "./Navbar";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import "./Add.css";
export default function Add({ AppendArray, AddingOwnItems, mydata, onDelete }) {
  const [open, setOpen] = useState(false);
  function handleformState() {
    setOpen((open) => !open);
  }
  return (
    <>
      <div className={`overlay ${open ? "active" : ""}`} />

      {open && (
        <div className="form-modal">
          <Form
            AppendArray={AppendArray}
            AddingOwnItems={AddingOwnItems}
            handleformState={handleformState}
          />
        </div>
      )}
      <div className="Add-con">
        <AddingHeader handleformState={handleformState} />
        <List data={mydata} showDeleteButton={true} onDelete={onDelete} />
      </div>
    </>
  );
}
function AddingHeader({ handleformState }) {
  return (
    <div className="Header-con">
      <h1>Add a Rental property</h1>
      <button className="addApt-button" onClick={handleformState}>
        <PlusCircle size={20} />
        Add a new rental property
      </button>
    </div>
  );
}
