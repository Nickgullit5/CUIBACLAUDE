
const App = () => {
  const [t, setTweak] = useTweaks(window.__tweakDefaults);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  // Apply global font scale
  React.useEffect(() => {
    document.documentElement.style.fontSize = (t.fontScale * 16) + 'px';
  }, [t.fontScale]);

  const accent = t.accentColor;

  return (
    <div style={{ background: '#F9F8F5' }}>
      <NavComponent accent={accent} />
      <HeroComponent onCTA={() => scrollTo('funnel')} overlay={t.heroOverlay} accent={accent} />
      <BeforeAfterComponent />
      <FunnelComponent accent={accent} />
      <ProcessComponent onCTA={() => scrollTo('funnel')} />
      <ExtraComponent showTestimonials={t.showTestimonials} />
      <StickyBarComponent />
      <CookieBannerComponent />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakSlider label="Opacidad del overlay" value={t.heroOverlay} min={0.3} max={0.95} step={0.05}
          onChange={(v) => setTweak('heroOverlay', v)} />
        <TweakSection label="Marca" />
        <TweakColor label="Tono de acento" value={t.accentColor}
          options={['#111110', '#2C4A3E', '#1a3a5c', '#5c2a1a']}
          onChange={(v) => setTweak('accentColor', v)} />
        <TweakSection label="Tipografía" />
        <TweakSlider label="Escala tipográfica" value={t.fontScale} min={0.85} max={1.2} step={0.05}
          onChange={(v) => setTweak('fontScale', v)} />
        <TweakSection label="Secciones" />
        <TweakToggle label="Mostrar testimonios" value={t.showTestimonials}
          onChange={(v) => setTweak('showTestimonials', v)} />
      </TweaksPanel>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
