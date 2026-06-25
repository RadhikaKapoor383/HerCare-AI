import React from 'react';
import { Heart } from 'lucide-react';

export default function Navbar({ title, subtitle, language, setLanguage }) {
  return (
    <header className="top-navbar">
      <div className="page-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div className="lang-switch">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button 
            className={`lang-btn ${language === 'ur' ? 'active' : ''}`}
            onClick={() => setLanguage('ur')}
          >
            Roman Urdu
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
          <Heart size={20} fill="var(--accent)" />
          <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>SIMPACT '26</span>
        </div>
      </div>
    </header>
  );
}
