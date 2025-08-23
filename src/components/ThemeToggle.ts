// src/components/ThemeToggle.ts
export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const isDark = el.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  return (
    <button
      aria-label="Toggle theme"
      className="btn btn-secondary"
      onClick={toggle}
    >
      <span className="sr-only">Toggle dark mode</span>
      🌓
    </button>
  );
}
