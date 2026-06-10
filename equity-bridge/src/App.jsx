import "./App.css";

export default function App() {
  return (
    <div className="bg">
      {/* floating shapes */}
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>

      <div className="container">
        <div className="card">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Equity Bridge Rwanda"
            className="logo"
          />

          <h1>Equity Bridge Rwanda</h1>

          <div className="status">
            <span className="dot"></span>
            <span>Under Maintenance</span>
          </div>

          <p className="text">
            We are currently upgrading our platform to improve service delivery
            to beneficiaries across Rwanda. We appreciate your patience while
            we make things better.
          </p>

          <div className="loader"></div>

          <p className="sub">
            We’ll be back online shortly 🚀
          </p>

          <button className="btn">
            Contact Support
          </button>

          <div className="footer">
            © {new Date().getFullYear()} Equity Bridge Rwanda
          </div>
        </div>
      </div>
    </div>
  );
}