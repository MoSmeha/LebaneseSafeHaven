// import List from "./List";
// import Filter from "./Filter";
// import SearchBar from "./SearchBar";
// import { useState } from "react";
// function Apartments({ data }) {
//   const [open, setOpen] = useState(false);
//   function handleformState() {
//     setOpen((open) => !open);
//   }
//   return (
//     <>
//       <div className={`overlay ${open ? "active" : ""}`} />
//       <ApartmentsHeader handleformState={handleformState} />
//       {open && <Filter handleformState={handleformState} />}

//       <List data={data} />
//     </>
//   );
// }

// export default Apartments;
import FilteredApartments from "./FilteredApartments";

export default function Apartments({ data, query }) {
  return (
    <FilteredApartments data={data} showDeleteButton={false} query={query} />
  );
}
