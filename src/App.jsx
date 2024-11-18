/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Adding the required access key for API
    formData.append("access_key", "dd27f20d-751e-4900-b1d4-1cc64219be19");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: json,
    });

    const res = await response.json();

    if (res.success) {
        Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        });
    } else {
        Swal.fire({
        title: "Error!",
        text: res.message || "Something went wrong. Please try again.",
        icon: "error",
        });
    }
    } catch (error) {
        Swal.fire({
        title: "Error!",
        text: "An error occurred while sending the message.",
        icon: "error",
    });
    }
};

return (
    <div className="container">
    <h2>Get in Touch With Santosh Kumar Pandey</h2>
    <form onSubmit={onSubmit}>
        <input
        type="text"
        id="name"
        placeholder="Your Name"
        name="name"
        required
        />
        <input
        type="email"
        id="email"
        placeholder="Your Email"
        name="email"
        required
        title="Please enter a valid email"
        />
        <input
        type="text"
        id="phoneNumber"
        placeholder="Your Phone Number"
        name="phoneNumber"
        required
        pattern="^[0-9]{10}$"
        title="Please enter a valid 10-digit phone number"
        />
        <textarea
        placeholder="Your Message"
        name="message"
        required
        ></textarea>
        <button type="submit" className="btn">
        Submit
        </button>
    </form>
    </div>
);
}

export default App;