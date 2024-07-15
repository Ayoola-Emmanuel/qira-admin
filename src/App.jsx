import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Inspection from "./pages/Inspection";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment"
import PaymentHistory from "./pages/PaymentHistory";
import Faq from "./pages/Faq";
import LegalTerms from "./pages/LegalTerms";
import Settings from "./pages/Settings";
import Landlord from "./pages/Landlord";
import Notifications from "./pages/Notifications";
import Verification from "./pages/Register/Verification";
import OnBoarding from "./pages/OnBoarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/landlord" element={<Landlord />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/legal-terms" element={<LegalTerms />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
