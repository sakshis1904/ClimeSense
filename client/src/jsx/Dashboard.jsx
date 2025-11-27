import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/dashboard.css";

function Dashboard() {
  const city = localStorage.getItem("city");
  const name = localStorage.getItem("name");

  const [Weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching dashboard data for city:", city);

    axios.post("http://localhost:5000/loadDashboard", { City: city })
      .then((res) => {
        console.log("Dashboard API response:", res.data);

        if (res.data && res.data.WeatherData) {
          setWeather(res.data.WeatherData);
        } else {
          console.error("WeatherData missing in response");
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Dashboard API error:", err);
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <h2 style={{ textAlign: "center", color: "white" }}>Loading data...</h2>;
  }

  if (!Weather) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Weather data not found. Check backend API.
      </h2>
    );
  }

  return (
    <div className="dash-background">
      <div style={{ width: '100%', maxWidth: '1180px' }} className="container fade-in">
        <h2 style={{ color: "white", padding: "12px 6px" }} className="stagger">
          <span>Welcome <strong style={{ color: 'var(--accent)' }}>{name}</strong>,</span>
          <span className="muted" style={{ display: 'block', fontSize: '.95rem' }}>City: {city}</span>
        </h2>

        <div className="dash-section">
          <aside className="dash-left-section card-float stagger">
            <div className="Temperature pulse">{Weather.Temp}°C</div>
            <div className="feels-like muted">Feels like: {Weather.FeelsLike}°C</div>
            <div className="UserDetails muted">{Weather.Location}</div>
          </aside>

          <main className="dash-right-section fade-in">
            <div className="dash-right-content">
              <div className="daily-right-top-section card-float">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="Wind">
                    <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Wind</div>
                    <div style={{ fontSize: '.95rem' }}>{Weather.Wind} km/h</div>
                  </div>

                  <div className="Wind">
                    <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Humidity</div>
                    <div style={{ fontSize: '.95rem' }}>{Weather.Humidity}%</div>
                  </div>

                  <div className="Wind">
                    <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Cloud</div>
                    <div style={{ fontSize: '.95rem' }}>{Weather.Cloud}%</div>
                  </div>
                </div>
              </div>

              <div className="dash-right-bottom-section">
                <div className="Cloud card-float">
                  <strong>Visibility</strong>
                  <span className="muted">{Weather.Visibility} km</span>
                </div>

                <div className="UV card-float">
                  <strong>UV</strong>
                  <span className="muted">{Weather.UV}</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
