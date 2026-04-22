
const ProcessComponent = () => {
  const steps = [
    { n:'01', title:'Visita técnica', desc:'Nuestro equipo visita tu hogar en Girona o Costa Brava para tomar medidas y entender tu estilo de vida.' },
    { n:'02', title:'Diseño 3D', desc:'En 48h recibes renders fotorrealistas de tu nueva cocina o baño. Ves el resultado antes de empezar.' },
    { n:'03', title:'Presupuesto cerrado', desc:'Sin sorpresas. Te entregamos un presupuesto detallado con todos los materiales y plazos acordados.' },
    { n:'04', title:'Ejecución', desc:'Nuestro equipo propio gestiona toda la obra. Coordinamos gremios, materiales y calidades premium.' },
    { n:'05', title:'Entrega de llaves', desc:'Limpieza final y walkthrough contigo. Tu espacio, exactamente como lo imaginaste — o mejor.' },
  ];

  return (
    <section id="proceso" style={{ background:'#F9F8F5', padding:'120px 8vw' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px 120px', alignItems:'start' }}>
          {/* Left: heading */}
          <div style={{ position:'sticky', top:120 }}>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#999', margin:'0 0 20px' }}>
              Nuestro Proceso
            </p>
            <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(32px,4vw,56px)', fontWeight:700, color:'#111110', margin:'0 0 32px', lineHeight:1.1, letterSpacing:'-0.02em' }}>
              De la idea<br /><span style={{fontWeight:300}}>a la realidad.</span>
            </h2>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:16, fontWeight:300, color:'#666', lineHeight:1.8, margin:'0 0 48px', maxWidth:380 }}>
              Un proceso claro, sin estrés, donde tú decides y nosotros ejecutamos con precisión milimétrica.
            </p>
            <img src="uploads/galeria-06.jpg" alt="Proceso Cuiba Design" style={{ width:'100%', aspectRatio:'4/3', objectFit:'cover' }} />
          </div>

          {/* Right: steps */}
          <div style={{ display:'flex', flexDirection:'column' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                borderTop: '1px solid #E5E4E0',
                padding: '40px 0',
                display:'grid', gridTemplateColumns:'56px 1fr', gap:24
              }}>
                <div style={{
                  fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700,
                  letterSpacing:'0.15em', color:'#ccc', paddingTop:4
                }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily:'Montserrat,sans-serif', fontSize:20, fontWeight:700, color:'#111110', margin:'0 0 12px' }}>{s.title}</h3>
                  <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:300, color:'#666', lineHeight:1.75, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop:'1px solid #E5E4E0' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// 3D Viz + Testimonials + Footer
const ExtraComponent = () => {
  const testimonials = [
    { name:'Marta G.', loc:'Palamós, Costa Brava', text:'Transformaron nuestra cocina en 3 semanas. El render 3D fue clave para entender el resultado final. Superaron todas nuestras expectativas.', stars:5 },
    { name:'Jordi & Neus', loc:'Girona', text:'Proceso impecable de principio a fin. El equipo de Cuiba Design se preocupó por cada detalle. Nuestra cocina es ahora el corazón del hogar.', stars:5 },
    { name:'Sophie M.', loc:"Platja d'Aro, Costa Brava", text:'Contraté el servicio desde Francia para nuestra casa de verano. La coordinación fue perfecta y el resultado es espectacular.', stars:5 },
  ];

  return (
    <>
      {/* 3D Visualization */}
      <section style={{ background:'#111110', padding:'120px 8vw', overflow:'hidden' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px 80px', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(249,248,245,0.3)', margin:'0 0 20px' }}>
              Visualización 3D
            </p>
            <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(30px,4vw,52px)', fontWeight:700, color:'#F9F8F5', margin:'0 0 28px', lineHeight:1.1, letterSpacing:'-0.02em' }}>
              Ves tu reforma<br /><span style={{fontWeight:300}}>antes de empezar.</span>
            </h2>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:16, fontWeight:300, color:'rgba(249,248,245,0.6)', lineHeight:1.8, margin:'0 0 48px' }}>
              Generamos renders 3D fotorrealistas de tu cocina o baño en menos de 48 horas. Ajustamos materiales, colores y distribución hasta que el diseño sea exactamente lo que imaginas — antes de invertir un solo euro en obra.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {['Renders fotorrealistas en 48h','Modificaciones ilimitadas hasta tu aprobación','Planimetría técnica incluida'].map(item => (
                <div key={item} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                  <div style={{ width:20, height:20, border:'1px solid rgba(249,248,245,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#F9F8F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:400, color:'rgba(249,248,245,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position:'relative' }}>
            <img src="uploads/hero-cocina-01.jpg" alt="Render 3D Cuiba Design" style={{ width:'100%', aspectRatio:'3/4', objectFit:'cover' }} />
            <div style={{
              position:'absolute', bottom:24, left:24, right:24,
              background:'rgba(10,10,9,0.85)', backdropFilter:'blur(12px)',
              padding:'20px 24px',
              display:'flex', alignItems:'center', gap:20
            }}>
              <div style={{ width:40, height:40, borderRadius:'50%', border:'1px solid rgba(249,248,245,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="1" stroke="#F9F8F5" strokeWidth="1.2"/><path d="M5 9h8M9 5v8" stroke="#F9F8F5" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:700, color:'#F9F8F5' }}>Render 3D incluido</div>
                <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:300, color:'rgba(249,248,245,0.5)', marginTop:2 }}>Aprueba antes de que empiece la obra</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background:'#F9F8F5', padding:'120px 8vw' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ marginBottom:72 }}>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#999', margin:'0 0 20px' }}>Testimonios</p>
            <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(30px,4vw,52px)', fontWeight:700, color:'#111110', margin:0, lineHeight:1.1, letterSpacing:'-0.02em' }}>
              Lo que dicen<br /><span style={{fontWeight:300}}>nuestros clientes.</span>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: i===1 ? '#111110' : '#EDECEA', padding:'48px 40px' }}>
                <div style={{ display:'flex', gap:3, marginBottom:32 }}>
                  {[...Array(t.stars)].map((_,j) => (
                    <div key={j} style={{ width:14, height:14, background: i===1 ? '#F9F8F5' : '#111110', clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                  ))}
                </div>
                <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:16, fontWeight:300, lineHeight:1.8, color: i===1 ? 'rgba(249,248,245,0.85)' : '#333', margin:'0 0 40px' }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:700, color: i===1 ? '#F9F8F5' : '#111110' }}>{t.name}</div>
                  <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:400, color: i===1 ? 'rgba(249,248,245,0.4)' : '#999', marginTop:4, letterSpacing:'0.05em' }}>{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" style={{ background:'#111110', padding:'80px 8vw 48px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, paddingBottom:64, borderBottom:'1px solid rgba(249,248,245,0.1)' }}>
            <div>
              <img src="uploads/logo-cuiba-light.png" alt="Cuiba Design" style={{ height:40, marginBottom:32 }} />
              <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:300, color:'rgba(249,248,245,0.5)', lineHeight:1.8, maxWidth:360 }}>
                Boutique de diseño y reforma de cocinas y baños en Girona y la Costa Brava. Calidad sin compromisos.
              </p>
            </div>
            <div style={{ display:'flex', gap:80 }}>
              <div>
                <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(249,248,245,0.3)', margin:'0 0 20px' }}>Contacto</p>
                <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                  <a href="tel:611637679" style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:400, color:'rgba(249,248,245,0.7)', textDecoration:'none' }}>611 637 679</a>
                  <a href="https://wa.me/34611637679" style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:400, color:'rgba(249,248,245,0.7)', textDecoration:'none' }}>WhatsApp</a>
                  <a href="mailto:hola@cuibadesign.com" style={{ fontFamily:'Montserrat,sans-serif', fontSize:15, fontWeight:400, color:'rgba(249,248,245,0.7)', textDecoration:'none' }}>hola@cuibadesign.com</a>
                </div>
              </div>
              <div>
                <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(249,248,245,0.3)', margin:'0 0 20px' }}>Zona de trabajo</p>
                <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                  {['Girona ciudad','Costa Brava','Palamós','Platja d\'Aro','Figueres','Begur'].map(z => (
                    <span key={z} style={{ fontFamily:'Montserrat,sans-serif', fontSize:14, fontWeight:300, color:'rgba(249,248,245,0.5)' }}>{z}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop:32, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:12, color:'rgba(249,248,245,0.25)', margin:0 }}>
              © 2026 Cuiba Design. Reformas de cocinas y baños en Girona y Costa Brava.
            </p>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:12, color:'rgba(249,248,245,0.25)', margin:0 }}>
              Diseño de cocinas Girona · Reformas baños Costa Brava
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

Object.assign(window, { ProcessComponent, ExtraComponent });
