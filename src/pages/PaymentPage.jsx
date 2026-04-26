import { Link } from "react-router-dom";

export default function PaymentPage() {
  // In real app, this would call backend Stripe session
  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment</h2>
      <p>This is a demo payment page. In a real app, Stripe checkout would open here.</p>
      <div style={{ marginTop: "15px" }}>
        <Link to="/payment/success" style={{ marginRight: "10px" }}>
          Simulate Success
        </Link>
        <Link to="/payment/cancel">Simulate Cancel</Link>
      </div>
    </div>
  );
}
