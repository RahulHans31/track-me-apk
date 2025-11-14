export default function Home() {
  return (
    <div className="container">
      <img src="/logo.png" alt="App Logo" className="logo" />

      <h1>TrackME Pro APK</h1>
      <p>Your ultimate stock tracker. Stay alerted instantly.</p>

      <a
        className="download-btn"
        href="https://example.com/TrackME.apk"
        download
      >
        Download APK
      </a>

      <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: 0.8 }}>
        Version 1.0.0 • Updated recently
      </p>
    </div>
  );
}