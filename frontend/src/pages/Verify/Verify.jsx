import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";
import "./Verify.css";

export const Verify = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const { API }=useAuth();

  const handleInput = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/auth/verifyEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: verificationCode }),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Email Verified Successfully!");
        navigate("/"); // Redirect to the home page
      } else {
        toast.error(res_data.message || "Verification failed!");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="verify-section">
      <div className="verify-container">
        <h1 className="verify-title">Email Verification</h1>
        <form className="verify-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="verificationCode">Enter Verification Code</label>
            <input
              type="text"
              name="verificationCode"
              id="verificationCode"
              value={verificationCode}
              onChange={handleInput}
              placeholder="Enter the code sent to your email"
              required
            />
          </div>
          <button type="submit" className="form-submit-button">
            Verify Email
          </button>
        </form>
      </div>
    </section>
  );
};
