import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaBell } from "react-icons/fa"; // Используем иконку из react-icons (или замените на свой img)

function NotificationDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="notification-dropdown"
        className={s.notification-toggle}
      >
        <img
          src="/notification-bell.svg"
          alt="Notifications"
          style={{ width: "24px", height: "24px" }}
        />
        <span className={s.notification-badge}>3</span> {/* Количество уведомлений */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header.Header>Notifications</Dropdown.Header.Header>
        <Dropdown.Item href="#/action-1">You have a new message</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Your booking is confirmed</Dropdown.Item>
        <Dropdown.Item href="#/action-3">System maintenance scheduled</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">View all notifications</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NotificationDropdown;
