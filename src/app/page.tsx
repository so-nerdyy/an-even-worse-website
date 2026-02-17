export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/index.html" />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb)',
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
