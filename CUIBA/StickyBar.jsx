
const StickyBarComponent = () => {
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  return (
    <>
      {/* Email modal */}
      {emailOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:2000,
          background:'rgba(10,10,9,0.6)', backdropFilter:'blur(8px)',
          display:'flex', alignItems:'flex-end', justifyContent:'flex-end',
          padding:'0 24px 100px'
        }} onClick={() => setEmailOpen(false)}>
          <div style={{
            background:'#F9F8F5', padding:'40px', width:'100%', maxWidth:420,
            boxShadow:'0 24px 80px rgba(0,0,0,0.25)'
          }} onClick={e => e.stopPropagation()}>
            {sent ? (
              <div style={{textAlign:'center', padding:'20px 0'}}>
                <div style={{fontFamily:'Montserrat,sans-serif', fontSize:22, fontWeight:700, color:'#111110', marginBottom:12}}>¡Enviado!</div>
                <p style={{fontFamily:'Montserrat,sans-serif', fontSize:14, color:'#666', margin:0}}>Te respondemos en menos de 24h.</p>
              </div>
            ) : (
              <>
                <h3 style={{fontFamily:'Montserrat,sans-serif', fontSize:20, fontWeight:700, color:'#111110', margin:'0 0 8px'}}>Escríbenos</h3>
                <p style={{fontFamily:'Montserrat,sans-serif', fontSize:13, color:'#999', margin:'0 0 28px'}}>Te respondemos en menos de 24h.</p>
                <input
                  type="email" placeholder="Tu email"
                  value={email} onChange={e => setEmail(e.target.value)}
                  style={{
                    width:'100%', padding:'14px 0', border:'none', borderBottom:'1px solid #E5E4E0',
                    fontFamily:'Montserrat,sans-serif', fontSize:14, color:'#111110',
                    background:'transparent', outline:'none', marginBottom:16, boxSizing:'border-box'
                  }}
                />
                <textarea
                  placeholder="Cuéntanos tu proyecto..."
                  value={msg} onChange={e => setMsg(e.target.value)}
                  rows={4}
                  style={{
                    width:'100%', padding:'14px 0', border:'none', borderBottom:'1px solid #E5E4E0',
                    fontFamily:'Montserrat,sans-serif', fontSize:14, color:'#111110',
                    background:'transparent', outline:'none', resize:'none', marginBottom:28, boxSizing:'border-box'
                  }}
                />
                <button
                  onClick={() => { if(email && msg) setSent(true); }}
                  style={{
                    width:'100%', padding:'16px', background:'#111110', color:'#F9F8F5', border:'none',
                    fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:700,
                    letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer'
                  }}>
                  Enviar mensaje
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Sticky buttons */}
      <div style={{
        position:'fixed', bottom:28, right:28, zIndex:1500,
        display:'flex', flexDirection:'column', gap:12, alignItems:'flex-end'
      }}>
        {/* Email */}
        <button onClick={() => setEmailOpen(!emailOpen)} style={{
          width:52, height:52, borderRadius:'50%', border:'none',
          background:'#111110', color:'#F9F8F5', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 20px rgba(0,0,0,0.25)', transition:'all 0.3s'
        }}
          onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; }}
          title="Envíanos un email">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="#F9F8F5" strokeWidth="1.4"/>
            <path d="M2 7l8 5 8-5" stroke="#F9F8F5" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        {/* WhatsApp */}
        <a href="https://wa.me/34611637679?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20servicios." target="_blank" rel="noopener noreferrer" style={{
          width:60, height:60, borderRadius:'50%', border:'none',
          background:'#25D366', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 24px rgba(37,211,102,0.4)', textDecoration:'none',
          transition:'all 0.3s'
        }}
          onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C7.373 2 2 7.373 2 14c0 2.15.573 4.168 1.575 5.906L2 26l6.254-1.546A11.953 11.953 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z" fill="white"/>
            <path d="M19.5 16.5c-.3-.15-1.77-.873-2.04-.972-.273-.099-.47-.148-.67.15-.198.296-.77.97-.944 1.17-.173.197-.347.222-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.605.133-.132.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.917-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
          </svg>
        </a>
      </div>
    </>
  );
};

Object.assign(window, { StickyBarComponent });
