import React from "react";
// import Navbar from "./components/Navbar";
// import Auth from "./components/Register";
// import ResetPassword from "./components/ResetPassword";
// import ForgotPassword from "./components/ForgotPassword";
// import ProductDetailPage from "./components/ProductDetailPage";
// import CounterSection from "./components/CounterSection";
// import AdminDashboard from "./pages/AdminDashboard";
// import VideoWithText from "./components/aditya-birla/VideoWithText";
// import Card from "./components/aditya-birla/Card";
// import data from "./data/brandSection.json";
// import brandData from "./data/brandsData.json";

// import Heading from "./components/aditya-birla/Heading";
// import FinancialLiteracy from "./components/aditya-birla/FinancialLiteracy";
// import ScrollAnimation from "./components/animation/ScrollAnimation";
// import MergerSynergies from "./components/haldiram/MergerSynergies";
// import BrandSection from "./components/haldiram/BrandSection";
// import BrandSearchSection from "./components/haldiram/BrandSearchSection";
// import Header from "./components/medica/header/Header";
// import RecentClaims from "./components/medica/RecentClaims";
// import LineChartExample from "./components/rechartexamples/LineChartExample";
// import Header from "./components/medica/header/Header";
import HealthCard from "./components/medica/healthCards/HealthCards";
import NavLinksClient from "./components/medica/navlinks/NavLinks.client";
// import Header from "./components/medica/header2/Header";
// import LineChartExample from "./components/rechartexamples/LineChartExample";
// import Navbar from "./Navbar";
import data from "./medica.json"
const App = () => {
  //  const counterSection = {
  //   title: 'Adobe + Ranosys: Powering brands with our award-winning expertise',
  //   text: 'A quick glance at what sets us apart from other Adobe Solution Partners.',
  //   counters: [
  //     { label: 'Adobe Experts', startValue: 0, endValue: 90 },
  //     { label: 'Adobe Projects', startValue: 0, endValue: 100 },
  //     { label: 'Adobe Certifications', startValue: 0, endValue: 90 }
  //   ],
  //   images: [
  //     'https://cdn.ranosys.com/wp-content/uploads/2024/06/adobe-gold-specialized-partner-badge-ranosys.png',
  //     'https://cdn.ranosys.com/wp-content/uploads/2024/06/mm20sg-logo-2lin0.webp',
  //     'https://cdn.ranosys.com/wp-content/uploads/2024/06/professional-badge-new.webp',
  //     'https://cdn.ranosys.com/wp-content/uploads/2024/06/expert-badge-new.webp',
  //     'https://cdn.ranosys.com/wp-content/uploads/2024/06/master-badge-new.webp'
  //   ]
  // };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Auth /> */}
      {/* <ResetPassword/> */}
      {/* <ForgotPassword type="new-password"/> */}
      {/* <ProductDetailPage/> */}
      {/* <CounterSection data={counterSection}/> */}
      {/* <AdminDashboard/> */}
      {/* <VideoWithText />
      <section className="bg-white flex flex-col items-center justify-center min-h-screen">
        <div className="space-y-8 text-center w-1/2">
          <Heading
            boldText="Financial Literacy Program!"
            regularText="About our "
          />
          <p>
            At ABC, we believe that financial literacy is the foundation of
            financial well- being. Understanding how to manage money effectively
            can lead to better financial decisions, reduced stress, and
            long-term financial stability. However, we recognize that everyone
            learns differently, and that's why we've designed a diverse and
            inclusive learning experience to suit every preference and need.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 max-w-[1440px] w-full mx-auto py-20">
          {[1, 1, 1, 1, 1].map(() => {
            return (
              <Card
                // imageSrc="https://via.placeholder.com/400x300"
                title="30K"
                description="Total Registration"
              />
            );
          })}
        </div>
      </section>
      <ScrollAnimation />
      <section>
        <FinancialLiteracy/>
      </section> */}
      {/* <MergerSynergies/> */}
      {/* <BrandSection {...data}/> */}
      {/* <BrandSearchSection {...brandData} /> */}
      {/* <Header/> */}
      {/* <nav className="bg-white p-4 shadow-md">
        <ul className="flex space-x-6 text-sm items-center text-[#22272D] ">
          <li>
            <span className="border-b border-[#22272D] pb-0.5">Document Hub</span>
          </li>
          <li className="relative space-x-2">
            <span className=" border-b border-[#22272D] pb-0.5">My Account</span>
            <span className="ml-1 text-gray-600">▼</span>
          </li>
          <li className="relative space-x-2">
            <span className=" border-b border-[#22272D] pb-0.5">English</span>
            <span className="ml-1 text-gray-600">▼</span>
          </li>
        </ul>
      </nav> */}
      <HealthCard />
      <NavLinksClient navItem={data}/>
      {/* <LineChartExample/> */}
      {/* <RecentClaims/> */}
    </>
  );
};

export default App;
