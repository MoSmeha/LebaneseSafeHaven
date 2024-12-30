/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterComponent from "./Filter";
import List from "./List";
import SearchBar from "./SearchBar";
import { SlidersHorizontal } from "lucide-react";

const FilteredApartments = ({ data, showDeleteButton, onDelete }) => {
  //hayde hook men react router betdol 3al url
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  // Check for initial search term from navigation state
  //hayde lama na3mel search bel home page bte5odna 3ala l apts page ok i used ai
  useEffect(() => {
    const state = location.state;
    console.log(state);
    if (state && state.initialSearch) {
      setSearchQuery(state.initialSearch);
      applyFiltersAndSearch(state.initialSearch);

      // Clear the navigation state to prevent repeated searches
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFiltersAndSearch(query);
  };

  const applyFiltersAndSearch = (search, filters = null) => {
    //hayde lal search bar
    const filtered = data.filter((apt) => {
      // Search filter
      if (search) {
        const searchTerm = search.toLowerCase();
        const matchesSearch =
          apt.name.toLowerCase().includes(searchTerm) ||
          apt.location.toLowerCase().includes(searchTerm) ||
          apt.description.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // If no filters are provided, only apply search
      if (!filters) return true;

      // Price filter
      if (
        filters.priceRange.max &&
        apt.rent > parseInt(filters.priceRange.max)
      ) {
        return false;
      }

      // Location filter
      if (
        filters.location &&
        !apt.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Bedrooms filter
      if (
        filters.numBedrooms &&
        apt.numBedrooms !== parseInt(filters.numBedrooms)
      ) {
        return false;
      }

      // Bathrooms filter
      if (
        filters.numBathrooms &&
        apt.numBathrooms !== parseInt(filters.numBathrooms)
      ) {
        return false;
      }

      // Amenities filters
      if (filters.hasWifi && !apt.hasWifi) return false;
      if (filters.hasFurniture && !apt.hasFurniture) return false;
      if (filters.hasElectricity && !apt.hasElectricity) return false;
      if (filters.hasParking && !apt.hasParking) return false;
      if (filters.hasSecurity && !apt.hasSecurity) return false;

      return true;
    });

    setFilteredData(filtered);
  };

  const handleFilterChange = (filters) => {
    applyFiltersAndSearch(searchQuery, filters);
  };

  const handleFormState = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="filtered-apartments">
      <div className="con Apt-header">
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
        <button onClick={handleFormState} className="filter-btn">
          <SlidersHorizontal size={16} />
          Filter
        </button>
      </div>
      <div className={`overlay ${showFilter ? "active" : ""}`} />

      {showFilter && (
        <div className="filter-modal">
          <FilterComponent
            onFilterChange={handleFilterChange}
            handleformState={handleFormState}
          />
        </div>
      )}

      <List
        data={filteredData}
        showDeleteButton={showDeleteButton}
        onDelete={onDelete}
      />
    </div>
  );
};

export default FilteredApartments;
