/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Card from "./Card";

export default function List({ data, showDeleteButton, onDelete }) {
  return (
    <>
      <div className="con">
        {data.map((apt) => (
          <Card
            apt={apt}
            key={apt.id}
            showDeleteButton={showDeleteButton}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
