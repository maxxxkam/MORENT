// App.js
import React from "react";
import "./Admin.module.scss";

const Admin = () => {
  return (
    <div className="rental-form">
      <div className="billing-info">
        <h2>Billing Info</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>
        <div className="form-group">
          <label>Town / City</label>
          <input type="text" placeholder="Town/city" />
        </div>
      </div>

      <div className="rental-info">
        <h2>Rental Info</h2>
        <div className="pickup">
          <h3>Pick-Up</h3>
          <div className="form-group">
            <label>Location</label>
            <select>
              <option>Select your city</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" />
          </div>
        </div>
        <div className="dropoff">
          <h3>Drop-Off</h3>
          <div className="form-group">
            <label>Location</label>
            <select>
              <option>Select your city</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" />
          </div>
        </div>
      </div>

      <div className="payment-method">
        <h2>Payment Method</h2>
        <div className="form-group">
          <input type="radio" name="payment" id="credit-card" />
          <label htmlFor="credit-card">Credit Card</label>
          <div className="credit-card-details">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration Date (MM/YY)" />
            <input type="text" placeholder="CVC" />
          </div>
        </div>
        <div className="form-group">
          <input type="radio" name="payment" id="paypal" />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="form-group">
          <input type="radio" name="payment" id="bitcoin" />
          <label htmlFor="bitcoin">Bitcoin</label>
        </div>
      </div>

      <div className="confirmation">
        <h2>Confirmation</h2>
        <div className="form-group">
          <input type="checkbox" id="marketing" />
          <label htmlFor="marketing">
            I agree with sending me Marketing and newsletter emails. No spam,
            promised!
          </label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
        <button className="rent-now">Rent Now</button>
      </div>

      <div className="footer">
        <p>All your data are safe</p>
        <p>
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default Admin;
