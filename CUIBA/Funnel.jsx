
const FunnelComponent = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [direction, setDirection] = React.useState(1);
  const [animating, setAnimating] = React.useState(false);

  const steps = [
    {
      id: 'servicio',
      label: '01 / 05',
      question: '¿Qué buscas?',
      sub: 'Cuéntanos qué tipo de proyecto tienes en mente.',
      type: 'cards',
      options: [
        { value: 'diseno', label: 'Solo Diseño', desc: 'Proyecto y planos 3D' },
        { value: 'reforma', label: 'Solo Reforma', desc: 'Ejecución con tus planos' },
        { value: 'ambos', label: 'Diseño + Reforma', desc: 'Proyecto completo llave en mano' },
      ]
    },
    {
      id: 'estancia',
      label: '02 / 05',
      question: '¿Qué estancia quieres transformar?',
      sub: 'Puedes seleccionar más de una opción.',
      type: 'cards',
      multi: true,
      options: [
        { value: 'bano', label: 'Baño', desc: 'Baño principal o secundario' },
        { value: 'cocina', label: 'Cocina', desc: 'Cocina o office' },
        { value: 'ambos', label: 'Ambos', desc: 'Cocina y baño' },
      ]
    },
    {
      id: 'metros',
      label: '03 / 05',
      question: '¿Cuántos m² aproximadamente?',
      sub: 'Una estimación es suficiente.',
      type: 'number',
      placeholder: 'Ej. 12',
      unit: 'm²'
    },
    {
      id: 'presupuesto',
      label: '04 / 05',
      question: '¿Cuál es tu presupuesto estimado?',
      sub: 'Sin compromiso — nos ayuda a prepararte la mejor propuesta.',
      type: 'cards',
      options: [
        { value: 'menos10k', label: 'Hasta 10.000 €', desc: 'Reforma esencial' },
        { value: '10k25k', label: '10.000 — 25.000 €', desc: 'Reforma integral' },
        { value: 'mas25k', label: '+25.000 €', desc: 'Proyecto de alta gama' },
      ]
    },
    {
      id: 'ubicacion',
      label: '05 / 05',
      question: '¿Dónde se encuentra tu vivienda?',
      sub: 'Operamos principalmente en Girona y la Costa Brava.',
      type: 'cards',
      options: [
        { value: 'girona', label: 'Girona ciudad', desc: 'y área metropolitana' },
        { value: 'costabrava', label: 'Costa Brava', desc: "Palamós, Platja d'Aro, Begur…" },
        { value: 'otros', label: 'Otra localidad', desc: 'Consúltanos' },
      ]
    },
  ];

  const goTo = (nextStep) => {
    if (animating) return;
    setDirection(nextStep > step ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setStep(nextStep);
      setAnimating(false);
    }, 280);
  };

  const select = (id, value, multi) => {
    if (multi) {
      setAnswers(a => {
        const cur = a[id] || [];
        return { ...a, [id]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] };
      });
    } else {
      setAnswers(a => ({ ...a, [id]: value }));
      if (step < steps.length - 1) setTimeout(() => goTo(step + 1), 350);
    }
  };

  const cur = steps[step];
  const curVal = answers[cur?.id];
  const hasValue = cur?.multi ? (curVal?.length > 0) : !!curVal;

  const progressPct = ((step) / steps.length) * 100;

  if (submitted) {
    return (
      <section id="funnel" style={{ background: '#111110', padding: '120px 8vw', minHeight: '60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center', maxWidth:560 }}>
          <div style={{ width:64, height:64, borderRadius:'50%', border:'2px solid #F9F8F5', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 40px' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 7" stroke="#F9F8F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(28px,4vw,48px)', fontWeight:700, color:'#F9F8F5', margin:'0 0 20px' }}>¡Perfecto!</h2>
          <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:17, fontWeight:300, color:'rgba(249,248,245,0.7)', lineHeight:1.7, margin:'0 0 48px' }}>
            Hemos recibido tu solicitud. Nuestro equipo te contactará en menos de 48 horas con un render 3D y presupuesto personalizado.
          </p>
          <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(249,248,245,0.4)' }}>
            611 637 679 · cuibadesign.com
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="funnel" style={{ background: '#111110', padding: '120px 8vw', minHeight: '80vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}>
        {/* Progress */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(249,248,245,0.3)', margin:0 }}>
              {cur.label}
            </p>
            <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, color:'rgba(249,248,245,0.3)', margin:0 }}>
              Presupuesto gratuito
            </p>
          </div>
          <div style={{ height:1, background:'rgba(249,248,245,0.1)', position:'relative' }}>
            <div style={{ position:'absolute', top:0, left:0, height:'100%', background:'#F9F8F5', width:`${progressPct}%`, transition:'width 0.5s ease' }} />
          </div>
        </div>

        {/* Question */}
        <div style={{
          opacity: animating ? 0 : 1,
          transform: animating ? `translateX(${direction * 40}px)` : 'translateX(0)',
          transition: 'all 0.28s ease'
        }}>
          <p style={{ fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:400, color:'rgba(249,248,245,0.5)', marginBottom:16, letterSpacing:'0.05em' }}>{cur.sub}</p>
          <h2 style={{ fontFamily:'Montserrat,sans-serif', fontSize:'clamp(26px,4vw,52px)', fontWeight:700, color:'#F9F8F5', margin:'0 0 48px', lineHeight:1.1, letterSpacing:'-0.02em' }}>
            {cur.question}
          </h2>

          {cur.type === 'cards' && (
            <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
              {cur.options.map(opt => {
                const isSelected = cur.multi ? (curVal||[]).includes(opt.value) : curVal === opt.value;
                return (
                  <button key={opt.value} onClick={() => select(cur.id, opt.value, cur.multi)} style={{
                    flex:'1 1 200px', padding:'28px 24px', textAlign:'left', cursor:'pointer',
                    border: isSelected ? '1px solid #F9F8F5' : '1px solid rgba(249,248,245,0.15)',
                    background: isSelected ? 'rgba(249,248,245,0.08)' : 'transparent',
                    transition: 'all 0.25s ease'
                  }}
                    onMouseEnter={e => { if(!isSelected) e.currentTarget.style.borderColor = 'rgba(249,248,245,0.4)'; }}
                    onMouseLeave={e => { if(!isSelected) e.currentTarget.style.borderColor = 'rgba(249,248,245,0.15)'; }}>
                    <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:17, fontWeight:600, color:'#F9F8F5', marginBottom:8 }}>{opt.label}</div>
                    <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:300, color:'rgba(249,248,245,0.5)' }}>{opt.desc}</div>
                  </button>
                );
              })}
            </div>
          )}

          {cur.type === 'number' && (
            <div style={{ display:'flex', alignItems:'center', gap:16, borderBottom:'1px solid rgba(249,248,245,0.3)', paddingBottom:8, maxWidth:320 }}>
              <input
                type="number" min="1"
                placeholder={cur.placeholder}
                value={curVal || ''}
                onChange={e => setAnswers(a => ({...a, [cur.id]: e.target.value}))}
                style={{
                  background:'transparent', border:'none', outline:'none',
                  fontFamily:'Montserrat,sans-serif', fontSize:48, fontWeight:700,
                  color:'#F9F8F5', width:'100%', appearance:'textfield'
                }}
              />
              <span style={{ fontFamily:'Montserrat,sans-serif', fontSize:24, fontWeight:300, color:'rgba(249,248,245,0.4)' }}>{cur.unit}</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:56, flexWrap:'wrap', gap:16 }}>
          {step > 0 ? (
            <button onClick={() => goTo(step-1)} style={{
              fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:500, letterSpacing:'0.08em',
              background:'none', border:'none', cursor:'pointer', color:'rgba(249,248,245,0.4)',
              display:'flex', alignItems:'center', gap:8, padding:0
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Anterior
            </button>
          ) : <div />}

          {step < steps.length - 1 ? (
            <button
              onClick={() => hasValue && goTo(step+1)}
              style={{
                fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:700,
                letterSpacing:'0.1em', textTransform:'uppercase',
                background: hasValue ? '#F9F8F5' : 'rgba(249,248,245,0.15)',
                color: hasValue ? '#111110' : 'rgba(249,248,245,0.3)',
                border:'none', padding:'16px 36px', cursor: hasValue ? 'pointer' : 'default',
                transition:'all 0.3s', display:'flex', alignItems:'center', gap:10
              }}>
              Siguiente
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          ) : (
            <button
              onClick={() => hasValue && setSubmitted(true)}
              style={{
                fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:700,
                letterSpacing:'0.1em', textTransform:'uppercase',
                background: hasValue ? '#F9F8F5' : 'rgba(249,248,245,0.15)',
                color: hasValue ? '#111110' : 'rgba(249,248,245,0.3)',
                border:'none', padding:'16px 36px', cursor: hasValue ? 'pointer' : 'default',
                transition:'all 0.3s'
              }}>
              Solicitar presupuesto gratuito →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FunnelComponent });
