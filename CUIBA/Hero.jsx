
const HeroComponent = ({ onCTA }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background image */}
      <img
        src="uploads/hero-cocina-01.jpg"
        alt="Cocina de lujo Cuiba Design"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          transform: loaded ? 'scale(1)' : 'scale(1.04)',
          transition: 'transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)'
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(10,10,9,0.72) 0%, rgba(10,10,9,0.3) 60%, rgba(10,10,9,0.1) 100%)'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: '0 8vw', maxWidth: 820
      }}>
        <p style={{
          fontFamily: 'Montserrat,sans-serif', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
          margin: '0 0 28px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.3s'
        }}>
          Girona &amp; Costa Brava — Diseño de Cocinas y Baños
        </p>

        <h1 style={{
          fontFamily: 'Montserrat,sans-serif',
          fontSize: 'clamp(40px, 7vw, 88px)',
          fontWeight: 700, lineHeight: 1.05,
          color: '#FAFAF8', margin: '0 0 32px',
          letterSpacing: '-0.02em',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0.5s'
        }}>
          Tu espacio.<br />
          <span style={{ fontWeight: 300 }}>Redefinido.</span>
        </h1>

        <p style={{
          fontFamily: 'Montserrat,sans-serif',
          fontSize: 'clamp(15px, 1.6vw, 18px)',
          fontWeight: 300, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.82)', margin: '0 0 48px', maxWidth: 480,
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 0.7s'
        }}>
          Reformas de cocinas y baños exclusivas en Girona y la Costa Brava.
          Render 3D y presupuesto en 48&nbsp;h.
        </p>

        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 0.9s'
        }}>
          <button onClick={onCTA} style={{
            fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: '#F9F8F5', color: '#111110', border: 'none',
            padding: '18px 36px', cursor: 'pointer',
            transition: 'all 0.3s'
          }}
            onMouseEnter={e => { e.target.style.background = '#fff'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#F9F8F5'; e.target.style.transform = 'translateY(0)'; }}>
            Inicia tu Transformación
          </button>
          <button onClick={() => { const el = document.getElementById('portfolio'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior:'smooth'}); }} style={{
            fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'transparent', color: '#F9F8F5',
            border: '1px solid rgba(255,255,255,0.5)',
            padding: '18px 36px', cursor: 'pointer', transition: 'all 0.3s'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}>
            Ver Portfolio
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 48, marginTop: 72, flexWrap: 'wrap',
          opacity: loaded ? 1 : 0, transition: 'all 0.9s ease 1.1s'
        }}>
          {[['+150','Proyectos'],['48h','Presupuesto'],['10+','Años exp.']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:28, fontWeight:700, color:'#fff' }}>{n}</div>
              <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:400, color:'rgba(255,255,255,0.5)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom: 36, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:8,
        opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.4s'
      }}>
        <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>Scroll</div>
        <div style={{
          width:1, height:40, background:'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite'
        }} />
      </div>
    </section>
  );
};

Object.assign(window, { HeroComponent });
