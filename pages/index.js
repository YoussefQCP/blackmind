export default function Home() {
  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem" }}>🌑 BLACKMIND™</h1>
      <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Born from Quantum Consciousness<br/>
        Designed by Youssef Mahgoup
      </p>
      <a href="/chat" style={{
        marginTop: "2rem",
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        border: "1px solid #444"
      }}>
        ابدأ المحادثة
      </a>
    </div>
  )
}
