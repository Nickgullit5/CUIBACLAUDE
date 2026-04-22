
const NavComponent = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navBg = scrolled ? 'rgba(249,248,245,0.97)' : 'transparent';
  const navBorder = scrolled ? '1px solid #E5E4E0' : '1px solid transparent';
  const logoFilter = scrolled ? 'brightness(0)' : 'none';
  const linkColor = scrolled ? '#111110' : '#fff';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: navBg, borderBottom: navBorder,
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 48px', height: 72,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, cursor:'pointer' }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
        <img src="uploads/logo-cuiba-light.png" alt="Cuiba Design" style={{
          height: 44, width: 'auto', filter: logoFilter, transition: 'filter 0.4s ease'
        }} />
        <span style={{
          fontFamily:'Montserrat,sans-serif', fontSize:14, fontWeight:700,
          letterSpacing:'0.12em', textTransform:'uppercase',
          color: scrolled ? '#111110' : '#fff',
          transition:'color 0.4s ease', lineHeight:1.15, whiteSpace:'nowrap'
        }}>CUIBA<br/>DESIGN</span>
      </div>

      {/* Desktop links */}
      <div style={{display:'flex', alignItems:'center', gap: 40, '@media(max-width:768px)':{display:'none'}}}>
        {[['portfolio','Portfolio'],['proceso','Proceso'],['contacto','Contacto']].map(([id,label]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            background:'none', border:'none', cursor:'pointer',
            fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:500,
            letterSpacing:'0.08em', textTransform:'uppercase', color: linkColor,
            transition:'color 0.3s', padding:'4px 0'
          }}>{label}</button>
        ))}
        <button onClick={() => scrollTo('funnel')} style={{
          background:'#111110', color:'#F9F8F5', border:'none', cursor:'pointer',
          fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:600,
          letterSpacing:'0.1em', textTransform:'uppercase',
          padding:'12px 24px', transition:'all 0.3s',
          whiteSpace:'nowrap'
        }}
          onMouseEnter={e => {e.target.style.background='#333'; e.target.style.transform='translateY(-1px)'}}
          onMouseLeave={e => {e.target.style.background='#111110'; e.target.style.transform='translateY(0)'}}>
          Inicia tu Transformación
        </button>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display:'none', background:'none', border:'none', cursor:'pointer',
        flexDirection:'column', gap:5, padding:4,
        '@media(max-width:768px)':{display:'flex'}
      }} className="mob-menu-btn">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display:'block', width:24, height:2,
            background: linkColor, transition:'all 0.3s',
            transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===1 ? 'scaleX(0)' : 'rotate(-45deg) translate(5px,-5px)') : 'none'
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:'fixed', top:72, left:0, right:0, background:'#F9F8F5',
          borderBottom:'1px solid #E5E4E0', padding:'24px 48px 32px',
          display:'flex', flexDirection:'column', gap:24
        }}>
          {[['portfolio','Portfolio'],['proceso','Proceso'],['contacto','Contacto']].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background:'none', border:'none', cursor:'pointer',
              fontFamily:'Montserrat,sans-serif', fontSize:16, fontWeight:500,
              color:'#111110', textAlign:'left'
            }}>{label}</button>
          ))}
          <button onClick={() => scrollTo('funnel')} style={{
            background:'#111110', color:'#F9F8F5', border:'none', cursor:'pointer',
            fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:600,
            letterSpacing:'0.1em', textTransform:'uppercase', padding:'16px 24px',
            textAlign:'center'
          }}>Inicia tu Transformación</button>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { NavComponent });
