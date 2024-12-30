import React, { useState } from "react";
import "./Filter.css";

const FilterComponent = ({ onFilterChange, handleformState }) => {
  const [filters, setFilters] = useState({
    priceRange: { max: "" },
    numBedrooms: "",
    numBathrooms: "",
    hasWifi: false,
    hasFurniture: false,
    hasElectricity: false,
    hasParking: false,
    hasSecurity: false,
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (name === "maxPrice") {
      setFilters((prev) => ({
        ...prev,
        priceRange: {
          ...prev.priceRange,
          max: value,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
    onFilterChange(filters);
    handleformState();
  };

  return (
    <div className="property-filter-container">
      <form onSubmit={handleSubmit} className="property-filter-form">
        <div className="property-filter-section">
          <h3>Price Range</h3>
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
          <div>
            <label className="property-filter-label">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.priceRange.max}
              onChange={handleInputChange}
              className="property-filter-input"
              placeholder="Max rent"
            />
          </div>
        </div>

        <div className="property-filter-section">
          <h3>Property Details</h3>
          <div>
            <label className="property-filter-label">Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              className="property-filter-input"
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="property-filter-label">Bedrooms</label>
            <select
              name="numBedrooms"
              value={filters.numBedrooms}
              onChange={handleInputChange}
              className="property-filter-select"
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          <div>
            <label className="property-filter-label">Bathrooms</label>
            <select
              name="numBathrooms"
              value={filters.numBathrooms}
              onChange={handleInputChange}
              className="property-filter-select"
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="property-filter-section">
          <h3>Amenities</h3>
          <div className="property-filter-checkbox-group">
            <label className="property-filter-checkbox-label">
              <input
                type="checkbox"
                name="hasWifi"
                checked={filters.hasWifi}
                onChange={handleInputChange}
              />
              WiFi
            </label>

            <label className="property-filter-checkbox-label">
              <input
                type="checkbox"
                name="hasFurniture"
                checked={filters.hasFurniture}
                onChange={handleInputChange}
              />
              Furnished
            </label>

            <label className="property-filter-checkbox-label">
              <input
                type="checkbox"
                name="hasElectricity"
                checked={filters.hasElectricity}
                onChange={handleInputChange}
              />
              Electricity
            </label>

            <label className="property-filter-checkbox-label">
              <input
                type="checkbox"
                name="hasParking"
                checked={filters.hasParking}
                onChange={handleInputChange}
              />
              Parking
            </label>

            <label className="property-filter-checkbox-label">
              <input
                type="checkbox"
                name="hasSecurity"
                checked={filters.hasSecurity}
                onChange={handleInputChange}
              />
              Security
            </label>
          </div>
        </div>

        <button type="submit" className="property-filter-button">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default FilterComponent;
