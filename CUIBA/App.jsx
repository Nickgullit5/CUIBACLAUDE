
const App = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#F9F8F5' }}>
      <NavComponent />
      <HeroComponent onCTA={() => scrollTo('funnel')} />
      <BeforeAfterComponent />
      <FunnelComponent />
      <ProcessComponent />
      <ExtraComponent />
      <StickyBarComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
