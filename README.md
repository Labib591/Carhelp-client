# 🚗 CarHelp - Your Smart Car Rental Solution

**Live Site**: [carhelp-labib.web.app](https://carhelp-labib.web.app)

---

## 📌 Project Purpose

CarHelp is a feature-rich car rental system developed to simplify car booking and rental management. It enables users to seamlessly add, update, delete, search, and book rental cars. Designed with a focus on usability, animations, and modern web practices, this platform is a comprehensive solution for both car renters and rental service providers.

---

## 🎯 Key Features

* 🔐 **Firebase Authentication** (Email/Password + Google Login)
* 📦 **CRUD Operations** for cars (Add, Update, Delete with real-time updates)
* 📅 **Smart Booking System** with modification and cancellation support
* 🔁 **Cascade Delete/Update**: Modifying or deleting a car automatically reflects in bookings
* 🔍 **Advanced Filtering & Sorting**: By price, date added, and layout toggle (Grid/List)
* 📊 **Booking Dashboard**: Table view with interactive modification & cancellation modals
* 💥 **Animated UI** with Lottie, Framer Motion, and smooth UX
* ⚠️ **Custom 404 Error Page** with animated GIF and redirect to homepage
* 📱 **Fully Responsive** for mobile, tablet, and desktop
* 📊 *(Optional)* Chart-based data visualization on booking stats

---

## 🔧 Technologies & Tools

### 🖥️ Frontend

* **React.js**
* **React Router DOM** – Route protection and navigation
* **Firebase Auth** – Secure authentication and access control
* **React Icons** – Iconography
* **Lottie React** – Beautiful JSON-based animations
* **Framer Motion** – Smooth animations and transitions
* **SweetAlert2** – Interactive confirmation modals

### 🌐 Backend (for reference)

* **Express.js + MongoDB** – API, database
* **JWT** – (Optional) Token-based access for secure route access
* **Node.js**

---

## 🚀 Pages Overview

* **Home** – Banner, Why Choose Us, Latest Listings, Special Offers
* **Available Cars** – Grid/List toggle, Sorting, Booking options
* **Car Details** – Full car profile + booking functionality
* **Add Car** *(Private)* – Form with detailed fields
* **My Cars** *(Private)* – Manage your listings with update/delete
* **My Bookings** *(Private)* – Modify or cancel bookings with ease
* **Login/Register** – Firebase-based authentication
* **404 Error Page** – Friendly redirect with Lottie animation

---

## 🗃️ Extra Functionalities

* ✅ Deleting a car removes all associated bookings
* ✅ Modifying car details also updates the related bookings
* ✅ Real-time updates reflected on UI after any CRUD action

---

## 🗂️ Folder Structure (Client)

```
src/
│
├── assets/                 # Images, animations, icons
├── Components/             # Shared components (Navbar, Footer, Modals)
├── Pages/                  # Route-specific pages
├── Context/                # AuthContext (Firebase + user state)
├── Routes/ 
├── Layouts/                # PrivateRoute, Router configs
└── main.jsx                 # Main app entry
```

---

## 📦 NPM Packages Used

```bash
npm install react-router firebase sweetalert2 react-icons lottie-react framer-motion
```

---

## ✅ Deployment Checklist

* 🔒 Firebase & DB credentials are stored in `.env`
* 🚀 Hosted frontend on Firebase: [carhelp-labib.web.app](https://carhelp-labib.web.app)
* 🔁 Smooth navigation, protected routes, no CORS/404 errors
* 💡 More 15 meaningful commits on client side

---

## 🧠 Author

**Mahir Labib**
Frontend Developer | Problem Solver | UI/UX Enthusiast

---