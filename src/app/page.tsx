export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/index.html" />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #ff00ff, #00ff00, #ffff00, #ff0000, #00ffff)',
        backgroundSize: '400% 400%',
        animation: 'vomitBackground 15s ease infinite',
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 2px 4px #000',
      }}>
        🤮 Loading the WORST website ever... 🤮
        <br />
        <a href="/index.html" style={{ color: 'yellow', textDecoration: 'underline', marginTop: '20px' }}>
          Click here if not redirected
        </a>
      </div>
    </>
  );
}
