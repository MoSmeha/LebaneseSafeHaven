/* eslint-disable react/prop-types */
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ apt, showDeleteButton, onDelete }) {
  return (
    <div className="card">
      <div className="card-content">
        <div
          className="image-header"
          style={{
            backgroundImage:
              apt.pictures && apt.pictures[0]
                ? `url(${apt.pictures[0]})`
                : "none", // Fallback if no image is available
          }}
        >
          {showDeleteButton && (
            <svg
              onClick={() => onDelete(apt.id)}
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
          )}

          {/* <svg
            className="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
          </svg> */}
        </div>
        <Link to={`/apartments/${apt.id}`}>
          <div>
            <div className="text-section">
              <p className="title">{apt.name}</p>
              <p className="price">${apt.rent}/month</p>
              <p className="address">{apt.location}</p>
            </div>
            <div className="features">
              <div className="feature-item">
                <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                <p>
                  <span className="feature-text">{apt.numBedrooms}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="feature-item">
                <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37h9.56z"
                  ></path>
                </svg>
                <p>
                  <span className="feature-text">{apt.numBathrooms}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
            {/* <div className="realtor-info">
          <p className="realtor-title">Realtor</p>
          <div className="realtor-details">
            <div className="realtor-image"></div>
            <div>
              <p className="realtor-name">Maggie Simpson</p>
              <p className="realtor-contact">(555) 555-5555</p>
            </div>
          </div>
        </div> */}
          </div>
        </Link>
      </div>
    </div>
  );
}
