/* eslint-disable react/prop-types */
import { useState } from "react";
import { Calendar, Users, UserPlus, Send, CheckCircle } from "lucide-react";
import "./ReserveForm.css";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const ReserveForm = ({ apt }) => {
  const { id } = useParams();
  console.log(id);
  const apartment = apt.find((item) => item.id === id);

  if (!apartment) {
    return <div>Apartment not found</div>;
  }
  const aptRent = apartment.rent;
  const [formData, setFormData] = useState({
    fromDate: "",
    months: "1",
    adults: "1",
    children: "0",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const monthlyRates = {
    1: 200,
    3: 170,
    6: 150,
    12: 130,
  };

  const calculateTotalPrice = () => {
    return monthlyRates[formData.months] * parseInt(formData.months);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Here you would typically send the data to a backend service
    console.log("Reservation Request:", {
      ...formData,
      totalPrice: calculateTotalPrice(),
    });
  };

  return (
    <div className="reservation-container">
      <div className="reservation-card">
        <h2>Reservation request for {apartment.name}</h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fromDate">
                <Calendar size={20} /> Start Date
              </label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="months">
                <Calendar size={20} /> Months of Stay
              </label>
              <select
                id="months"
                name="months"
                value={formData.months}
                onChange={handleInputChange}
                required
              >
                <option value="1">1 Month (${aptRent}/month)</option>
                <option value="3">
                  3 Months (${aptRent - aptRent * 0.15}/month)
                </option>
                <option value="6">
                  6 Months (${aptRent - aptRent * 0.25}/month)
                </option>
                <option value="12">
                  12 Months (${aptRent - aptRent * 0.35}/month)
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="adults">
                <Users size={20} /> Number of Adults
              </label>
              <select
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleInputChange}
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Adult{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="children">
                <UserPlus size={20} /> Number of Children
              </label>
              <select
                id="children"
                name="children"
                value={formData.children}
                onChange={handleInputChange}
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i}>
                    {i} Child{i !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="price-summary">
              <p>Total Price: ${calculateTotalPrice().toLocaleString()}</p>
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} /> Submit Reservation Request
            </button>
          </form>
        ) : (
          <div className="submission-confirmation">
            <CheckCircle size={64} color="green" />
            <h3>Request Sent!</h3>
            <p>Total Price: ${calculateTotalPrice().toLocaleString()}</p>
            <p>We'll contact you soon to confirm your reservation.</p>
            <Link to="/apartments">
              <button className="go-back-button">
                <ArrowLeft size={20} /> Go Back to Apartments
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReserveForm;
