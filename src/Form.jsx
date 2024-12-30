/* eslint-disable react/prop-types */
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

export default function Form({ AppendArray, AddingOwnItems, handleformState }) {
  const initialFormData = {
    name: "",
    rent: "",
    location: "",
    description: "",
    numBathrooms: "",
    numBedrooms: "",
    pictures: [],
    hasWifi: false,
    hasFurniture: false,
    hasElectricity: false,
    phoneNumber: "",
    hasParking: false,
    hasSecurity: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCheckboxChange = (name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Convert image to base64 string for localStorage
        const base64String = await convertImageToBase64(file);
        setFormData((prev) => {
          const updatedPictures = [...prev.pictures];
          updatedPictures[index] = base64String;
          return { ...prev, pictures: updatedPictures };
        });
        if (errors[`image${index + 1}`]) {
          setErrors((prev) => ({
            ...prev,
            [`image${index + 1}`]: "",
            // Clear the general images error if all three slots are now filled
            images:
              formData.pictures.filter((pic) => pic).length === 3
                ? ""
                : "Please upload exactly 3 images",
          }));
        }
      } catch (error) {
        console.error("Error converting image:", error);
      }
    }
  };

  // Helper function to convert image to base64
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      // Limit file size ( 5MB)
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (file.size > MAX_FILE_SIZE) {
        reject(new Error("File is too large. Maximum size is 5MB."));
        return;
      }

      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = "Property name is required";
    if (!formData.rent) newErrors.rent = "Rent amount is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.numBathrooms)
      newErrors.numBathrooms = "Number of bathrooms is required";
    if (!formData.numBedrooms)
      newErrors.numBedrooms = "Number of bedrooms is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";

    // Strict image validation
    const validImages = formData.pictures.filter((pic) => pic).length;
    if (validImages !== 3) {
      newErrors.images = "Please upload exactly 3 images";
      // Add specific errors for each image input if needed
      Array.from({ length: 3 }).forEach((_, index) => {
        if (!formData.pictures[index]) {
          newErrors[`image${index + 1}`] = `Image ${index + 1} is required`;
        }
      });
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // hon ma btezbat 8ayr hayk aw betsir bte5la2on kolon nafs l id
    const newItem = { ...formData, id: uuidv4() };
    AddingOwnItems(newItem);
    AppendArray(newItem);
    handleformState();
    setFormData(initialFormData);
  };

  return (
    <div className="form-container">
      <h2>Add New Rental Property</h2>
      <svg
        onClick={handleformState}
        className="heart-icon"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <linearGradient
          id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1"
          x1="9.858"
          x2="38.142"
          y1="9.858"
          y2="38.142"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f44f5a"></stop>
          <stop offset=".443" stopColor="#ee3d4a"></stop>
          <stop offset="1" stopColor="#e52030"></stop>
        </linearGradient>
        <path
          fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)"
          d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
        ></path>
        <path
          d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z"
          opacity=".05"
        ></path>
        <path
          d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z"
          opacity=".07"
        ></path>
        <path
          fill="#fff"
          d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"
        ></path>
        <path
          fill="#fff"
          d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"
        ></path>
      </svg>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Property Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="rent">Monthly Rent ($)</label>
          <input
            type="number"
            id="rent"
            name="rent"
            value={formData.rent}
            onChange={handleInputChange}
            className={errors.rent ? "error" : ""}
          />
          {errors.rent && <span className="error-message">{errors.rent}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="numBedrooms">Number of Bedrooms</label>
          <select
            id="numBedrooms"
            name="numBedrooms"
            value={formData.numBedrooms}
            onChange={handleInputChange}
            className={errors.numBedrooms ? "error" : ""}
          >
            <option value="">Select number of bedrooms</option>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Bedroom" : "Bedrooms"}
              </option>
            ))}
          </select>
          {errors.numBedrooms && (
            <span className="error-message">{errors.numBedrooms}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="numBathrooms">Number of Bathrooms</label>
          <select
            id="numBathrooms"
            name="numBathrooms"
            value={formData.numBathrooms}
            onChange={handleInputChange}
            className={errors.numBathrooms ? "error" : ""}
          >
            <option value="">Select number of bathrooms</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Bathroom" : "Bathrooms"}
              </option>
            ))}
          </select>
          {errors.numBathrooms && (
            <span className="error-message">{errors.numBathrooms}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={errors.location ? "error" : ""}
          />
          {errors.location && (
            <span className="error-message">{errors.location}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={errors.description ? "error" : ""}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={errors.phoneNumber ? "error" : ""}
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="form-group">
          <h3>Property Images</h3>
          <div className="image-upload-container">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="image-input" key={index}>
                <label htmlFor={`image${index + 1}`}>Image {index + 1}</label>
                <input
                  type="file"
                  id={`image${index + 1}`}
                  onChange={(e) => handleImageUpload(e, index)}
                  className={errors[`image${index + 1}`] ? "error" : ""}
                />
                {errors[`image${index + 1}`] && (
                  <span className="error-message">
                    {errors[`image${index + 1}`]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="amenities-section">
          <h3>Amenities</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasWifi}
                onChange={() => handleCheckboxChange("hasWifi")}
              />
              WiFi Available
            </label>

            <label>
              <input
                type="checkbox"
                checked={formData.hasFurniture}
                onChange={() => handleCheckboxChange("hasFurniture")}
              />
              Furnished
            </label>

            <label>
              <input
                type="checkbox"
                checked={formData.hasElectricity}
                onChange={() => handleCheckboxChange("hasElectricity")}
              />
              Electricity
            </label>

            <label>
              <input
                type="checkbox"
                checked={formData.hasParking}
                onChange={() => handleCheckboxChange("hasParking")}
              />
              Parking Available
            </label>

            <label>
              <input
                type="checkbox"
                checked={formData.hasSecurity}
                onChange={() => handleCheckboxChange("hasSecurity")}
              />
              Security
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Add Property
        </button>
      </form>
    </div>
  );
}
