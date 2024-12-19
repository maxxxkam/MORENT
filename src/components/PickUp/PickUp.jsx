import React, { useState } from "react";
import s from "./PickUp.module.scss";

const PickUp = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    "pickup-locations": "",
    "pickup-date": "",
    "pickup-time": "",
    "dropoff-locations": "",
    "dropoff-date": "",
    "dropoff-time": "",
  });

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const handleSelect = (section, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: value,
    }));
    setExpandedSection(null); // Close the dropdown after selection
  };

  // Function to generate drop-off dates based on pick-up date
  const generateDropOffDates = (pickupDate) => {
    if (!pickupDate) return [];
    const baseDate = new Date(pickupDate);

    const addDays = (days) => {
      const newDate = new Date(baseDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    };

    return [addDays(1), addDays(3), addDays(7)];
  };

  const dropOffDates = generateDropOffDates(selectedValues["pickup-date"]);

  // Function to send form data to the Telegram bot
  const handleSubmit = async () => {
    const botToken = "7629587294:AAFjAEmnzYc06BtG9OoUQYSctKxCSiFjTb4"; // Replace with your bot token
    const chatId = "-4799118768"; // Replace with your chat or group ID

    // Format the message with selected values
    const message = `
*Pick-Up Details:*
- Location: ${selectedValues["pickup-locations"] || "Not selected"}
- Date: ${selectedValues["pickup-date"] || "Not selected"}
- Time: ${selectedValues["pickup-time"] || "Not selected"}

*Drop-Off Details:*
- Location: ${selectedValues["dropoff-locations"] || "Not selected"}
- Date: ${selectedValues["dropoff-date"] || "Not selected"}
- Time: ${selectedValues["dropoff-time"] || "Not selected"}
    `;

    // Send the message to the Telegram bot
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      const result = await response.json();
      if (result.ok) {
        alert("Data sent successfully!");
      } else {
        alert("Failed to send data. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending data. Please try again.");
    }
  };

  return (
    <section className={s.PickUp}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.cards}>
            {/* Pick-Up Section */}
            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Pick - Up
              </p>
              <div className={s.info}>
                {/* Locations */}
                <div>
                  <b>Locations</b>
                  <p onClick={() => toggleSection("pickup-locations")}>
                    {selectedValues["pickup-locations"] || "Select your city"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "pickup-locations" ? s.expanded : ""
                      }
                    />
                  </p>
                  {expandedSection === "pickup-locations" && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect("pickup-locations", "Tashkent")
                        }
                      >
                        Tashkent
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-locations", "Bukhara")
                        }
                      >
                        Bukhara
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-locations", "Samarkand")
                        }
                      >
                        Samarkand
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Date */}
                <div>
                  <b>Date</b>
                  <p onClick={() => toggleSection("pickup-date")}>
                    {selectedValues["pickup-date"] || "Select a date"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "pickup-date" ? s.expanded : ""
                      }
                    />
                  </p>
                  {expandedSection === "pickup-date" && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect("pickup-date", "2024-12-18")
                        }
                      >
                        2024-12-18
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-date", "2024-12-19")
                        }
                      >
                        2024-12-19
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-date", "2024-12-20")
                        }
                      >
                        2024-12-20
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Time */}
                <div>
                  <b>Time</b>
                  <p onClick={() => toggleSection("pickup-time")}>
                    {selectedValues["pickup-time"] || "Select a time"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "pickup-time" ? s.expanded : ""
                      }
                    />
                  </p>
                  {expandedSection === "pickup-time" && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect("pickup-time", "10:00 AM")
                        }
                      >
                        10:00 AM
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-time", "2:00 PM")
                        }
                      >
                        2:00 PM
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("pickup-time", "6:00 PM")
                        }
                      >
                        6:00 PM
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button className={s.btn} onClick={handleSubmit}>
              <img src="/arrows-img.svg" alt="" />
            </button>

            {/* Drop-Off Section */}
            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Drop - Off
              </p>
              <div className={s.info}>
                {/* Locations */}
                <div>
                  <b>Locations</b>
                  <p onClick={() => toggleSection("dropoff-locations")}>
                    {selectedValues["dropoff-locations"] || "Select your city"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "dropoff-locations"
                          ? s.expanded
                          : ""
                      }
                    />
                  </p>
                  {expandedSection === "dropoff-locations" && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-locations", "Tashkent")
                        }
                      >
                        Tashkent
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-locations", "Bukhara")
                        }
                      >
                        Bukhara
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-locations", "Samarkand")
                        }
                      >
                        Samarkand
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Date */}
                <div>
                  <b>Date</b>
                  <p onClick={() => toggleSection("dropoff-date")}>
                    {selectedValues["dropoff-date"] || "Select a date"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "dropoff-date"
                          ? s.expanded
                          : ""
                      }
                    />
                  </p>
                  {expandedSection === "dropoff-date" &&
                    dropOffDates.length > 0 && (
                      <div className={s.dropdown}>
                        {dropOffDates.map((date) => (
                          <p
                            key={date}
                            onClick={() =>
                              handleSelect("dropoff-date", date)
                            }
                          >
                            {date}
                          </p>
                        ))}
                      </div>
                    )}
                </div>
                <div className={s.line}></div>

                {/* Time */}
                <div>
                  <b>Time</b>
                  <p onClick={() => toggleSection("dropoff-time")}>
                    {selectedValues["dropoff-time"] || "Select a time"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === "dropoff-time"
                          ? s.expanded
                          : ""
                      }
                    />
                  </p>
                  {expandedSection === "dropoff-time" && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-time", "8:00 AM")
                        }
                      >
                        8:00 AM
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-time", "12:00 PM")
                        }
                      >
                        12:00 PM
                      </p>
                      <p
                        onClick={() =>
                          handleSelect("dropoff-time", "4:00 PM")
                        }
                      >
                        4:00 PM
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUp 
