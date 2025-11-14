"use client";

export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>TrackME Pro</h1>

        <a
          href="https://github.com/RahulHans31/track-me-apk/releases/download/Release/app-release.apk"
          style={styles.button}
        >
          Download Now
        </a>

        <p style={styles.version}>v1.0.0 • Updated recently</p>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a, #3b82f6)",
    backgroundSize: "300% 300%",
    animation: "gradientMove 12s ease infinite",
  },

  card: {
    width: "90%",
    maxWidth: "420px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    textAlign: "center",
    color: "white",
    animation: "fadeIn 1.2s ease",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "25px",
    letterSpacing: "1px",
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0f172a",
    background: "#ffffff",
    borderRadius: "50px",
    textDecoration: "none",
    transition: "0.2s ease",
  },

  version: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#dbeafe",
    opacity: "0.9",
  },
};
