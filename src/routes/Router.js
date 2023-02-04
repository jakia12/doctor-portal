import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DisplayError from "../components/displayError/DisplayError";
import Root from "../layout/Root";
import About from "../pages/about/About";
import AllUsers from "../pages/allUsers/AllUsers";
import Appointment from "../pages/appointment/Appointment";
import Contact from "../pages/contact/Contact";
import AddDoctor from "../pages/dashboard/addDashboard/AddDoctor";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../pages/dashboard/dashboard/DashboardLayout";
import Payment, { loader as paymentLoader } from "../pages/dashboard/dashboard/payment/Payment";
import ManageDoctors from "../pages/dashboard/manageDoctors/ManageDoctors";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyAppointment from "../pages/myAppointment/MyAppointment";
import Reviews from "../pages/reviews/Reviews";
import SignUp from "../pages/signUp/SignUp";
import AdminRoute from "../route/AdminRoute";
import PrivateRoute from "../route/PrivateRoute";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Root />} errorElement={<DisplayError />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute> <DashboardLayout /></PrivateRoute>} errorElement={<DisplayError />}>
            <Route path="/dashboard" element={<MyAppointment />} />
            <Route path="/dashboard/allusers" element={<AdminRoute><AllUsers /></AdminRoute>} />

            <Route path="/dashboard/addDoctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />
            <Route path="/dashboard/manageDoctors" element={<AdminRoute>
                <ManageDoctors />
            </AdminRoute>} />
            <Route path="/dashboard/payment/:id" element={<Payment />} loader={paymentLoader} />

        </Route>
    </>
));