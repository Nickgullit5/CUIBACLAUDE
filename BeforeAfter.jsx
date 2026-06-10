
const BeforeAfterComponent = () => {
  const [pos, setPos] = React.useState(50);
  const [dragging, setDragging] = React.useState(false);
  const containerRef = React.useRef(null);

  const getX = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  };

  const onStart = (e) => { e.preventDefault(); setDragging(true); };
  const onMove = (e) => { if (dragging) setPos(getX(e)); };
  const onEnd = () => setDragging(false);

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [dragging, pos]);

  return (
    <section id="portfolio" style={{ background: '#F9F8F5', padding: '120px 8vw' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#999', margin:'0 0 20px' }}>
            Portfolio
          </p>
          <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(32px,5vw,60px)', fontWeight:700, color:'#111110', margin:0, lineHeight:1.1, letterSpacing:'-0.02em' }}>
            La transformación<br /><span style={{fontWeight:300}}>habla por sí sola.</span>
          </h2>
        </div>

        {/* Before/After Slider */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:12, color:'#999', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:24 }}>
            — Desliza para comparar
          </p>
          <div
            ref={containerRef}
            style={{
              position: 'relative', width: '100%', paddingBottom: '56.25%',
              overflow: 'hidden', cursor: dragging ? 'grabbing' : 'ew-resize',
              userSelect: 'none', touchAction: 'none'
            }}
            onMouseDown={onStart}
            onTouchStart={onStart}
          >
            {/* BEFORE */}
            <img src="uploads/galeria-03.jpg" alt="Antes" style={{
              position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center'
            }} />
            {/* Label ANTES */}
            <div style={{
              position:'absolute', top:20, left:20, background:'rgba(0,0,0,0.7)',
              color:'#fff', fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700,
              letterSpacing:'0.15em', textTransform:'uppercase', padding:'6px 14px'
            }}>Antes</div>

            {/* AFTER clipped */}
            <div style={{
              position:'absolute', inset:0, overflow:'hidden',
              clipPath: `inset(0 ${100-pos}% 0 0)`
            }}>
              <img src="uploads/galeria-02.jpg" alt="Después" style={{
                position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center'
              }} />
              <div style={{
                position:'absolute', top:20, right:20, background:'rgba(17,17,16,0.85)',
                color:'#F9F8F5', fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700,
                letterSpacing:'0.15em', textTransform:'uppercase', padding:'6px 14px'
              }}>Después</div>
            </div>

            {/* Divider line */}
            <div style={{
              position:'absolute', top:0, bottom:0, left:`${pos}%`,
              transform:'translateX(-50%)', width:2,
              background:'rgba(255,255,255,0.9)', pointerEvents:'none'
            }} />
            {/* Handle */}
            <div style={{
              position:'absolute', top:'50%', left:`${pos}%`,
              transform:'translate(-50%,-50%)',
              width:48, height:48, borderRadius:'50%',
              background:'#F9F8F5', border:'2px solid #111110',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 20px rgba(0,0,0,0.25)', pointerEvents:'none',
              transition: dragging ? 'none' : 'left 0.05s'
            }}>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M1 6h18M6 1L1 6l5 5M14 1l5 5-5 5" stroke="#111110" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
          gap:3, marginTop:3
        }}>
          {['galeria-04','galeria-05','galeria-06','galeria-07','hero-cocina-01'].map((img, i) => (
            <div key={img} style={{
              position:'relative', overflow:'hidden',
              paddingBottom: i === 0 ? '66%' : i === 3 ? '133%' : '66%',
              gridRow: i === 3 ? 'span 2' : 'auto'
            }}>
              <img
                src={`uploads/${img}.jpg`}
                alt={`Portfolio ${i+1}`}
                style={{
                  position:'absolute', inset:0, width:'100%', height:'100%',
                  objectFit:'cover', objectPosition:'center',
                  transition:'transform 0.6s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { BeforeAfterComponent });
