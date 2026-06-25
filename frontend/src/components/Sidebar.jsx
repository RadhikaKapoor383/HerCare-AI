import React from 'react';
import { LayoutDashboard, ClipboardList, BookOpen, FileText, HeartPulse, Key } from 'lucide-react';

export default function Sidebar({ activeView, setActiveView, geminiKey, setGeminiKey }) {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          <HeartPulse size={24} />
        </div>
        <span className="logo-text">HERCARE AI</span>
      </div>

      <nav className="menu-list">
        <button 
          className={`menu-item ${activeView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveView('dashboard')}
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </button>

        <button 
          className={`menu-item ${activeView === 'risk-assessment' ? 'active' : ''}`}
          onClick={() => setActiveView('risk-assessment')}
        >
          <ClipboardList />
          <span>Risk Assessment</span>
        </button>

        <button 
          className={`menu-item ${activeView === 'symptom-checker' ? 'active' : ''}`}
          onClick={() => setActiveView('symptom-checker')}
        >
          <BookOpen />
          <span>Symptom Checker</span>
        </button>

        <button 
          className={`menu-item ${activeView === 'report-explainer' ? 'active' : ''}`}
          onClick={() => setActiveView('report-explainer')}
        >
          <FileText />
          <span>Report Explainer</span>
        </button>

        <button 
          className={`menu-item ${activeView === 'recovery-assistant' ? 'active' : ''}`}
          onClick={() => setActiveView('recovery-assistant')}
        >
          <HeartPulse />
          <span>Recovery Assistant</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <div className="gemini-config-box">
          <label htmlFor="gemini-key-input">
            <Key size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            Gemini API Key:
          </label>
          <input 
            id="gemini-key-input"
            type="password" 
            placeholder="AI-key (optional)..."
            value={geminiKey}
            onChange={(e) => {
              setGeminiKey(e.target.value);
              localStorage.setItem('gemini_api_key', e.target.value);
            }}
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Stores locally. Fallback mock will be used if left blank.
          </span>
        </div>
      </div>
    </aside>
  );
}
