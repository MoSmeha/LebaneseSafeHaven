import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Add from "./Add";
import { useEffect } from "react";
import Notfound from "./Notfound";
import { useState } from "react";
import AptDetails from "./AptDetails";
import Apartments from "./Apartments";
import ReserveForm from "./ReserveForm";

// Your existing data array
const initialData = [
  {
    id: Date.now().toString(),
    name: "Baalbeck",
    rent: 200,
    location: "Baalbeck, this street",
    description: "It is a nice thing and has nice things",
    numBathrooms: 2,
    numBedrooms: 5,
    pictures: [
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    ],
    hasWifi: true,
    hasFurniture: true,
    hasElectricity: true,
    phoneNumber: 71123456,
    hasParking: true,
    hasSecurity: true,
  },
  {
    id: (Date.now() + 1).toString(),
    name: "Zahle",
    rent: 50,
    location: "Zahle, this street",
    description: "It is a things",
    numBathrooms: 1,
    numBedrooms: 1,
    pictures: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    ],
    hasWifi: false,
    hasFurniture: false,
    hasElectricity: false,
    phoneNumber: 71123456,
    hasParking: true,
    hasSecurity: true,
  },
  {
    id: (Date.now() + 2).toString(),
    name: "Tripoli",
    rent: 120,
    location: "Tripoli, main avenue",
    description: "A cozy apartment with a beautiful sea view",
    numBathrooms: 1,
    numBedrooms: 2,
    pictures: [
      "https://images.pexels.com/photos/276727/pexels-photo-276727.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg",
    ],
    hasWifi: true,
    hasFurniture: true,
    hasElectricity: true,
    phoneNumber: 70123456,
    hasParking: false,
    hasSecurity: false,
  },
  {
    id: (Date.now() + 3).toString(),
    name: "Byblos",
    rent: 300,
    location: "Byblos, seaside boulevard",
    description: "Modern apartment with all amenities and a great location",
    numBathrooms: 2,
    numBedrooms: 3,
    pictures: [
      "https://images.pexels.com/photos/210558/pexels-photo-210558.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/276726/pexels-photo-276726.jpeg",
    ],
    hasWifi: true,
    hasFurniture: true,
    hasElectricity: true,
    phoneNumber: 70123457,
    hasParking: true,
    hasSecurity: true,
  },
  {
    id: (Date.now() + 4).toString(),
    name: "Sidon",
    rent: 100,
    location: "Sidon, old city",
    description: "A charming old-style house with historical features",
    numBathrooms: 1,
    numBedrooms: 2,
    pictures: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/210558/pexels-photo-210558.jpeg",
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg",
    ],
    hasWifi: false,
    hasFurniture: true,
    hasElectricity: true,
    phoneNumber: 71123457,
    hasParking: false,
    hasSecurity: false,
  },
  {
    id: (Date.now() + 5).toString(),
    name: "Beirut Downtown",
    rent: 500,
    location: "Beirut, central district",
    description: "Luxurious apartment in the heart of Beirut with a great view",
    numBathrooms: 3,
    numBedrooms: 4,
    pictures: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg",
    ],
    hasWifi: true,
    hasFurniture: true,
    hasElectricity: true,
    phoneNumber: 76123456,
    hasParking: true,
    hasSecurity: true,
  },
];

function App() {
  const [houses, setHouses] = useState(() => {
    // Try to get data from localStorage
    const savedHouses = localStorage.getItem("houses");
    if (savedHouses) {
      const parsedHouses = JSON.parse(savedHouses);

      // Create a Set of existing IDs for quick lookup
      const existingIds = new Set(parsedHouses.map((house) => house.id));

      // Filter initialData to only include items not already present
      const missingInitialData = initialData.filter(
        (house) => !existingIds.has(house.id)
      );

      // Combine existing localStorage data with any missing initial data
      return [...parsedHouses, ...missingInitialData];
    }
    // If no saved data, use the initial data array
    return initialData;
  });

  const [mydata, setMydata] = useState(() => {
    const savedMyData = localStorage.getItem("mydata");
    return savedMyData ? JSON.parse(savedMyData) : [];
  });

  // Add a one-time effect to ensure initialData is present
  useEffect(() => {
    setHouses((currentHouses) => {
      const existingIds = new Set(currentHouses.map((house) => house.id));
      const missingInitialData = initialData.filter(
        (house) => !existingIds.has(house.id)
      );

      if (missingInitialData.length > 0) {
        return [...currentHouses, ...missingInitialData];
      }
      return currentHouses;
    });
  }, []); // Run once on mount

  // Save to localStorage whenever houses or mydata changes
  useEffect(() => {
    localStorage.setItem("houses", JSON.stringify(houses));
  }, [houses]);

  useEffect(() => {
    localStorage.setItem("mydata", JSON.stringify(mydata));
  }, [mydata]);

  function onDelete(id) {
    // Don't allow deletion of initial data items
    if (initialData.some((house) => house.id === id)) {
      alert("Default properties cannot be deleted");
      return;
    }
    setHouses((prev) => prev.filter((item) => item.id !== id));
    setMydata((prev) => prev.filter((item) => item.id !== id));
  }

  function AddingOwnItems(item) {
    setMydata((prev) => [...prev, item]);
  }

  function AppendArray(item) {
    setHouses((prev) => [...prev, item]);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments data={houses} />} />
        <Route
          path="/add"
          element={
            <Add
              onDelete={onDelete}
              AppendArray={AppendArray}
              AddingOwnItems={AddingOwnItems}
              mydata={mydata}
            />
          }
        />
        <Route path="/contact" element={<AboutUs />} />
        <Route path="/apartments/:id" element={<AptDetails apt={houses} />} />
        <Route
          path="/apartments/:id/Req2Reserve"
          element={<ReserveForm apt={houses} />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
