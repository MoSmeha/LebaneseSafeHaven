/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Shield,
  LampDesk,
  Sofa,
  Phone,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const AptDetails = ({ apt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id: aptId } = useParams(); //faced issues with this, tele3 bade a3mela destructure bel awil
  console.log(aptId);
  console.log(apt);
  const details = apt.find((det) => det.id === aptId);
  console.log(details);
  // bas nokbos l sahm this gets triggered and rerenders the state
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === details.pictures.length - 1 ? 0 : prev + 1
    );
  };
// same here
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? details.pictures.length - 1 : prev - 1
    );
  };

  // if no pictures provided, use placeholders
  const defaultPictures = [
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
  ];

  const imagesToShow =
    details.pictures.length > 0 ? details.pictures : defaultPictures;

  return (
    <div style={styles.container}>
      {/* Image Carousel */}
      <div style={styles.carouselContainer}>
        <img
          src={imagesToShow[currentImageIndex]}
          alt={`Apartment view ${currentImageIndex + 1}`}
          style={styles.carouselImage}
        />

        <button
          onClick={prevImage}
          style={{ ...styles.carouselButton, left: "10px" }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          style={{ ...styles.carouselButton, right: "10px" }}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div style={styles.imageCounter}>
          {currentImageIndex + 1} / {imagesToShow.length}
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              {details.name || "Beautiful Apartment"}
            </h1>
            <p style={styles.location}>{details.location}</p>
          </div>
          <div style={styles.rent}>
            ${details.rent || "0"} <span style={styles.rentPeriod}>/month</span>
          </div>
        </div>

        <div style={styles.details}>
          <div style={styles.detailItem}>
            <span style={styles.detailValue}>{details.numBedrooms}</span>{" "}
            bedrooms
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailValue}>{details.numBathrooms}</span>{" "}
            bathrooms
          </div>
        </div>

        <div style={styles.amenities}>
          {details.hasWifi && (
            <div style={styles.amenityItem}>
              <Wifi size={20} /> WiFi
            </div>
          )}
          {details.hasParking && (
            <div style={styles.amenityItem}>
              <Car size={20} /> Parking
            </div>
          )}
          {details.hasSecurity && (
            <div style={styles.amenityItem}>
              <Shield size={20} /> Security
            </div>
          )}
          {details.hasElectricity && (
            <div style={styles.amenityItem}>
              <LampDesk size={20} /> Electricity
            </div>
          )}
          {details.hasFurniture && (
            <div style={styles.amenityItem}>
              <Sofa size={20} /> Furnished
            </div>
          )}
        </div>

        <p style={styles.description}>{details.description}</p>

        <div style={styles.contact}>
          <Phone size={20} />
          <span style={styles.phoneNumber}>{details.phoneNumber}</span>
        </div>
        <Link to={`/apartments/${aptId}/Req2Reserve`}>
          <button style={styles.reserveButton}>Reserve Now</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "2em auto",
    padding: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#fff",
    borderRadius: "1em",
  },
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "24px",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  carouselButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  imageCounter: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    background: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "14px",
  },
  content: {
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    margin: "0 0 8px 0",
  },
  location: {
    color: "#666",
    margin: 0,
  },
  rent: {
    fontSize: "24px",
    fontWeight: "600",
  },
  rentPeriod: {
    fontSize: "16px",
    color: "#666",
  },
  details: {
    display: "flex",
    gap: "20px",
    marginBottom: "24px",
  },
  detailItem: {
    fontSize: "16px",
    color: "#666",
  },
  detailValue: {
    fontWeight: "600",
    color: "#000",
  },
  amenities: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "24px",
    padding: "16px",
    background: "#f7f7f7",
    borderRadius: "12px",
  },
  amenityItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#666",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#444",
    marginBottom: "24px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "24px",
  },
  phoneNumber: {
    fontSize: "16px",
    color: "#666",
  },
  reserveButton: {
    width: "100%",
    padding: "16px",
    background: "#ff3138",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default AptDetails;
