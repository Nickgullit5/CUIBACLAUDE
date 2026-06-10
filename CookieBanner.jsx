
// ============================================================
//  CONFIGURACIÓN DE SEGUIMIENTO
//  Cuando tengas tus IDs, pégalos aquí (sustituye los null).
//  Mientras estén en null, NO se carga ningún script de seguimiento.
//
//   GOOGLE_ADS_ID  → formato "AW-XXXXXXXXXX"      (Google Ads)
//   GA4_ID         → formato "G-XXXXXXXXXX"       (Google Analytics 4)
//   META_PIXEL_ID  → formato "XXXXXXXXXXXXXXX"    (Meta / Facebook Pixel)
// ============================================================
const TRACKING_CONFIG = {
  GOOGLE_ADS_ID: null,   // ej. "AW-1234567890"
  GA4_ID: null,          // ej. "G-ABCD1234"
  META_PIXEL_ID: null,   // ej. "1234567890123456"
};

// Carga los scripts de seguimiento SOLO tras el consentimiento
function loadTrackingScripts() {
  const { GOOGLE_ADS_ID, GA4_ID, META_PIXEL_ID } = TRACKING_CONFIG;

  // --- Google (Ads + GA4) via gtag ---
  if (GOOGLE_ADS_ID || GA4_ID) {
    const gid = GA4_ID || GOOGLE_ADS_ID;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + gid;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    if (GA4_ID) window.gtag('config', GA4_ID);
    if (GOOGLE_ADS_ID) window.gtag('config', GOOGLE_ADS_ID);
  }

  // --- Meta (Facebook) Pixel ---
  if (META_PIXEL_ID) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}

const CookieBannerComponent = () => {
  const [decision, setDecision] = React.useState(() => {
    try { return localStorage.getItem('cuiba_cookie_consent'); } catch(e) { return null; }
  });

  // Aplica seguimiento si ya había aceptado en una visita anterior
  React.useEffect(() => {
    if (decision === 'accepted') loadTrackingScripts();
  }, []);

  // Permite reabrir el banner desde el footer ("Configurar cookies")
  React.useEffect(() => {
    const reopen = () => setDecision(null);
    window.addEventListener('cuiba:open-cookie-settings', reopen);
    return () => window.removeEventListener('cuiba:open-cookie-settings', reopen);
  }, []);

  const choose = (value) => {
    try { localStorage.setItem('cuiba_cookie_consent', value); } catch(e) {}
    setDecision(value);
    if (value === 'accepted') loadTrackingScripts();
  };

  if (decision === 'accepted' || decision === 'rejected') return null;

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:3000,
      background:'#111110', borderTop:'1px solid rgba(249,248,245,0.12)',
      padding:'28px 8vw',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      gap:32, flexWrap:'wrap'
    }}>
      <div style={{ flex:'1 1 420px', maxWidth:640 }}>
        <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#F9F8F5', marginBottom:10 }}>
          Tu privacidad
        </div>
        <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:14, fontWeight:300, color:'rgba(249,248,245,0.65)', lineHeight:1.7, margin:0 }}>
          Usamos cookies propias y de terceros para analizar el tráfico y medir nuestras campañas publicitarias. Puedes aceptarlas, rechazarlas o consultar más detalles en nuestra{' '}
          <a href="cookies.html" style={{ color:'#F9F8F5', textDecoration:'underline' }}>Política de Cookies</a>.
        </p>
      </div>
      <div style={{ display:'flex', gap:12, flexShrink:0, flexWrap:'wrap' }}>
        <button onClick={() => choose('rejected')} style={{
          fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:600,
          letterSpacing:'0.08em', textTransform:'uppercase',
          background:'transparent', color:'rgba(249,248,245,0.8)',
          border:'1px solid rgba(249,248,245,0.3)', padding:'14px 28px', cursor:'pointer',
          transition:'all 0.25s'
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(249,248,245,0.3)'; e.currentTarget.style.color='rgba(249,248,245,0.8)'; }}>
          Rechazar
        </button>
        <button onClick={() => choose('accepted')} style={{
          fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:700,
          letterSpacing:'0.08em', textTransform:'uppercase',
          background:'#F9F8F5', color:'#111110',
          border:'1px solid #F9F8F5', padding:'14px 28px', cursor:'pointer',
          transition:'all 0.25s'
        }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; }}>
          Aceptar cookies
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { CookieBannerComponent });
