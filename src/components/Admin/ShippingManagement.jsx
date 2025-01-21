import React, { useState } from 'react';

// Sample data for shipping methods, zones, and shipment tracking
const shippingMethodsData = [
  { id: 1, name: 'Standard Shipping', rate: 5.0, isEnabled: true },
  { id: 2, name: 'Express Shipping', rate: 15.0, isEnabled: true },
  { id: 3, name: 'Overnight Shipping', rate: 25.0, isEnabled: false },
];

const shippingZonesData = [
  { id: 1, zone: 'US', countries: ['United States'], rate: 5.0 },
  { id: 2, zone: 'EU', countries: ['Germany', 'France', 'Italy'], rate: 10.0 },
  { id: 3, zone: 'Asia', countries: ['Japan', 'China', 'India'], rate: 15.0 },
];

const shipmentsData = [
  { orderId: 'ORD123', shipmentStatus: 'Shipped', carrier: 'FedEx', trackingNumber: 'FEX123456789', date: '2025-01-10' },
  { orderId: 'ORD124', shipmentStatus: 'In Transit', carrier: 'UPS', trackingNumber: 'UPS987654321', date: '2025-01-12' },
  { orderId: 'ORD125', shipmentStatus: 'Delivered', carrier: 'USPS', trackingNumber: 'USPS112233445', date: '2025-01-15' },
];

const ShippingManagement = () => {
  const [shippingMethods, setShippingMethods] = useState(shippingMethodsData);
  const [shippingZones, setShippingZones] = useState(shippingZonesData);
  const [shipments, setShipments] = useState(shipmentsData);
  const [newShippingMethod, setNewShippingMethod] = useState({ name: '', rate: 0, isEnabled: true });
  const [newShippingZone, setNewShippingZone] = useState({ zone: '', countries: '', rate: 0 });
  const [trackingOrder, setTrackingOrder] = useState('');

  const handleToggleShippingMethod = (id) => {
    setShippingMethods(
      shippingMethods.map((method) =>
        method.id === id ? { ...method, isEnabled: !method.isEnabled } : method
      )
    );
  };

  const handleAddShippingMethod = () => {
    if (newShippingMethod.name && newShippingMethod.rate > 0) {
      const newMethod = { id: shippingMethods.length + 1, ...newShippingMethod };
      setShippingMethods([...shippingMethods, newMethod]);
      setNewShippingMethod({ name: '', rate: 0, isEnabled: true });
    }
  };

  const handleAddShippingZone = () => {
    if (newShippingZone.zone && newShippingZone.countries && newShippingZone.rate > 0) {
      const newZone = { id: shippingZones.length + 1, ...newShippingZone };
      setShippingZones([...shippingZones, newZone]);
      setNewShippingZone({ zone: '', countries: '', rate: 0 });
    }
  };

  const handleTrackShipment = (trackingNumber) => {
    const shipment = shipments.find((shipment) => shipment.trackingNumber === trackingNumber);
    if (shipment) {
      alert(`Order ID: ${shipment.orderId}\nStatus: ${shipment.shipmentStatus}\nCarrier: ${shipment.carrier}\nTracking Number: ${shipment.trackingNumber}\nDate: ${shipment.date}`);
    } else {
      alert('Shipment not found.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Management</h2>

      {/* Shipping Methods Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Shipping Methods</h3>
        <div className="space-y-4">
          {shippingMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between">
              <span className="text-gray-700">{method.name}</span>
              <span className="text-gray-700">Rate: ${method.rate}</span>
              <button
                onClick={() => handleToggleShippingMethod(method.id)}
                className={`px-4 py-2 rounded ${method.isEnabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              >
                {method.isEnabled ? 'Disable' : 'Enable'}
              </button>
            </div>
          ))}
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Shipping Method Name"
              value={newShippingMethod.name}
              onChange={(e) => setNewShippingMethod({ ...newShippingMethod, name: e.target.value })}
            />
            <input
              type="number"
              className="p-2 border border-gray-300 rounded w-full ml-2"
              placeholder="Rate"
              value={newShippingMethod.rate}
              onChange={(e) => setNewShippingMethod({ ...newShippingMethod, rate: parseFloat(e.target.value) })}
            />
            <button
              onClick={handleAddShippingMethod}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Shipping Method
            </button>
          </div>
        </div>
      </div>

      {/* Shipping Zones Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Shipping Zones</h3>
        <div className="space-y-4">
          {shippingZones.map((zone) => (
            <div key={zone.id} className="flex items-center justify-between">
              <span className="text-gray-700">{zone.zone}</span>
              <span className="text-gray-700">Countries: {zone.countries.join(', ')}</span>
              <span className="text-gray-700">Rate: ${zone.rate}</span>
            </div>
          ))}
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Shipping Zone Name"
              value={newShippingZone.zone}
              onChange={(e) => setNewShippingZone({ ...newShippingZone, zone: e.target.value })}
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full ml-2"
              placeholder="Countries (comma-separated)"
              value={newShippingZone.countries}
              onChange={(e) => setNewShippingZone({ ...newShippingZone, countries: e.target.value.split(',') })}
            />
            <input
              type="number"
              className="p-2 border border-gray-300 rounded w-full ml-2"
              placeholder="Rate"
              value={newShippingZone.rate}
              onChange={(e) => setNewShippingZone({ ...newShippingZone, rate: parseFloat(e.target.value) })}
            />
            <button
              onClick={handleAddShippingZone}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Shipping Zone
            </button>
          </div>
        </div>
      </div>

      {/* Track Shipments Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Track Shipments</h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter Tracking Number"
            value={trackingOrder}
            onChange={(e) => setTrackingOrder(e.target.value)}
          />
          <button
            onClick={() => handleTrackShipment(trackingOrder)}
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Track
          </button>
        </div>
        <div className="space-y-4">
          {shipments.map((shipment) => (
            <div key={shipment.orderId} className="flex items-center justify-between">
              <span className="text-gray-700">Order ID: {shipment.orderId}</span>
              <span className="text-gray-700">Carrier: {shipment.carrier}</span>
              <span className="text-gray-700">Status: {shipment.shipmentStatus}</span>
              <span className="text-gray-700">Tracking: {shipment.trackingNumber}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingManagement;
