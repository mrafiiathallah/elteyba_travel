import { useRef } from 'react';
import { FaDownload, FaPrint } from 'react-icons/fa';

const ETicket = ({ bookingData }) => {
  const ticketRef = useRef();
  
  const handlePrint = () => {
    const printContent = document.getElementById('e-ticket');
    const windowUrl = 'about:blank';
    const uniqueName = new Date().getTime();
    const windowName = `Print_${uniqueName}`;
    const printWindow = window.open(windowUrl, windowName, 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');
    
    printWindow.document.write('<html><head><title>Print E-Ticket</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
      body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
      .ticket { border: 1px solid #ccc; padding: 20px; max-width: 800px; margin: 0 auto; }
      .ticket-header { display: flex; justify-content: space-between; border-bottom: 2px solid #1E40AF; padding-bottom: 10px; margin-bottom: 20px; }
      .ticket-title { font-size: 24px; font-weight: bold; color: #1E40AF; }
      .booking-id { font-size: 16px; color: #666; }
      .ticket-section { margin-bottom: 20px; }
      .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; color: #1E40AF; }
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .info-item { margin-bottom: 5px; }
      .info-label { font-weight: bold; color: #666; }
      .barcode { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px dashed #ccc; }
      .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    `);
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(document.getElementById('e-ticket').innerHTML);
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your E-Ticket</h2>
        <div className="flex space-x-4">
          <button 
            onClick={handlePrint}
            className="flex items-center text-primary hover:text-primary/80"
          >
            <FaPrint className="mr-2" /> Print
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center text-primary hover:text-primary/80"
          >
            <FaDownload className="mr-2" /> Download
          </button>
        </div>
      </div>
      
      <div id="e-ticket" ref={ticketRef} className="border rounded-lg p-6">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-primary">HajjUmrah</h3>
            <p className="text-gray-600">Your Journey to the Holy Land</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Booking ID</p>
            <p className="font-semibold">{bookingData.bookingId}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primary mb-3">Package Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Package Name</p>
              <p className="font-medium">{bookingData.packageName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Travel Date</p>
              <p className="font-medium">{bookingData.travelDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Travelers</p>
              <p className="font-medium">{bookingData.adults} Adults, {bookingData.children} Children</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="font-medium">${bookingData.price * (parseInt(bookingData.adults) + parseInt(bookingData.children) * 0.7)}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primary mb-3">Traveler Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">{bookingData.firstName} {bookingData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Passport Number</p>
              <p className="font-medium">{bookingData.passportNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{bookingData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium">{bookingData.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primary mb-3">Important Information</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Please arrive at the meeting point 3 hours before departure.</li>
            <li>Carry your passport and this e-ticket for verification.</li>
            <li>Baggage allowance: 23kg check-in and 7kg cabin baggage.</li>
            <li>For any assistance, contact our 24/7 helpline: +1 234 567 890.</li>
          </ul>
        </div>
        
        <div className="text-center border-t border-dashed border-gray-300 pt-6 mt-6">
          <p className="text-gray-600 mb-2">Scan this barcode at the check-in counter</p>
          <div className="inline-block bg-gray-200 px-10 py-4 rounded">
            <p className="font-mono tracking-widest">{bookingData.bookingId}</p>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>This is an electronic ticket. Please print this e-ticket or keep a digital copy with you during your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default ETicket;