import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Dashboard from './components/Admin/Dashboard.jsx'
import ProductManagement from './components/Admin/ProductManagement.jsx'
import UserManagement from './components/Admin/UserManagement.jsx'
import OrderManagement from './components/Admin/OrderManagement.jsx'
import InventoryManagement from './components/Admin/InventoryManagement.jsx'
import CategoryManagement from './components/Admin/CategoryManagement.jsx'
import CouponManagement from './components/Admin/CouponManagement.jsx'
import ReportsAndAnalytics from './components/Admin/ReportsAndAnalytics.jsx'
import PaymentManagement from './components/Admin/PaymentManagement.jsx'
import ShippingManagement from './components/Admin/ShippingManagement.jsx'
import SiteSettings from './components/Admin/SiteSettings.jsx'
import ContentManagement from './components/Admin/ContentManagement.jsx'
import SecurityAndAuthentication from './components/Admin/SecurityAndAuthentication.jsx'
import ActivityLogs from './components/Admin/ActivityLogs.jsx'
import NotificationsAndAlerts from './components/Admin/NotificationsAndAlerts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/productmanagement' element={<ProductManagement/>}/>
          <Route path='/admin/usermanagement' element={<UserManagement/>}/>
          <Route path='/admin/ordermanagement' element={<OrderManagement/>}/>
          <Route path='/admin/inventorymanagement' element={<InventoryManagement/>}/>
          <Route path='/admin/categorymanagement' element={<CategoryManagement/>}/>
          <Route path='/admin/couponmanagement' element={<CouponManagement/>}/>
          <Route path='/admin/reportsandanalytics' element={<ReportsAndAnalytics/>}/>
          <Route path='/admin/paymentmanagement' element={<PaymentManagement/>}/>
          <Route path='/admin/shippingmanagement' element={<ShippingManagement/>}/>
          <Route path='/admin/sitesettings' element={<SiteSettings/>}/>
          <Route path='/admin/contentmanagement' element={<ContentManagement/>}/>
          <Route path='/admin/securityandauthentication' element={<SecurityAndAuthentication/>}/>
          <Route path='/admin/activitylogs' element={<ActivityLogs/>}/>
          <Route path='/admin/notificationsandalerts' element={<NotificationsAndAlerts/>}/>
          {/* <App /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
