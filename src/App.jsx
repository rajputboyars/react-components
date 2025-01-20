import React from "react";
import Navbar from "./components/Navbar";
import Auth from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import ProductDetailPage from "./components/ProductDetailPage";
import CounterSection from "./components/CounterSection";
import AdminDashboard from "./pages/AdminDashboard";
// import Navbar from "./Navbar";

const App = () => {

   const counterSection = {
    title: 'Adobe + Ranosys: Powering brands with our award-winning expertise',
    text: 'A quick glance at what sets us apart from other Adobe Solution Partners.',
    counters: [
      { label: 'Adobe Experts', startValue: 0, endValue: 90 },
      { label: 'Adobe Projects', startValue: 0, endValue: 100 },
      { label: 'Adobe Certifications', startValue: 0, endValue: 90 }
    ],
    images: [
      'https://cdn.ranosys.com/wp-content/uploads/2024/06/adobe-gold-specialized-partner-badge-ranosys.png',
      'https://cdn.ranosys.com/wp-content/uploads/2024/06/mm20sg-logo-2lin0.webp',
      'https://cdn.ranosys.com/wp-content/uploads/2024/06/professional-badge-new.webp',
      'https://cdn.ranosys.com/wp-content/uploads/2024/06/expert-badge-new.webp',
      'https://cdn.ranosys.com/wp-content/uploads/2024/06/master-badge-new.webp'
    ]
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Auth /> */}
      {/* <ResetPassword/> */}
      {/* <ForgotPassword type="new-password"/> */}
      {/* <ProductDetailPage/> */}
      {/* <CounterSection data={counterSection}/> */}
      <AdminDashboard/>
    </>
  );
};

export default App;
