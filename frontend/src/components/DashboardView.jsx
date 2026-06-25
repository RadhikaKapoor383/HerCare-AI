import React, { useState, useEffect } from 'react';
import { ClipboardList, FileText, HeartPulse, Sparkles, BookOpen, User, ArrowRight, ShieldAlert, Award, ChevronRight } from 'lucide-react';

export default function DashboardView({ setActiveView, backendUrl }) {
  const [userName, setUserName] = useState(() => localStorage.getItem('user_name') || 'Guest Patient');
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userName);
  
  const [healthTip, setHealthTip] = useState('');
  
  const tips = [
    "Iron supplements ko Vitamin C (jaise Orange Juice) ke sath lene se khoon ki kami (Anemia) jaldi door hoti hai.",
    "PCOS mein low-glycemic foods (jaise sabziyan, daalein) weight control karne aur insulin levels normal rakhne mein madad karte hain.",
    "Khana khane ke foran baad Chai ya Coffee peene se parhez karein, kyunke yeh khorak mein se Iron absorb nahi hone dete.",
    "Recovery period mein heavy lifting (bhari samaan uthana) se parhez karein taake internal stitches safe rahein.",
    "TSH test hamesha subh khali pait karwayein taake thyroid levels ki sahi report aaye."
  ];

  useEffect(() => {
    // Select a random health tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setHealthTip(randomTip);
  }, []);

  const handleSaveName = () => {
    const trimmed = nameInput.trim();
    if (trimmed) {
      setUserName(trimmed);
      localStorage.setItem('user_name', trimmed);
    }
    setIsEditingName(false);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      {/* Welcome Header */}
      <div className="card span-12" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.1) 100%)', borderLeft: '4px solid var(--accent)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Welcome back</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
              {isEditingName ? (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={nameInput} 
                    onChange={(e) => setNameInput(e.target.value)} 
                    style={{ padding: '4px 10px', fontSize: '1.25rem', width: '200px' }}
                  />
                  <button className="btn btn-primary" style={{ padding: '4px 12px', fontSize: '0.85rem' }} onClick={handleSaveName}>Save</button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800' }}>
                    Assalam-o-Alaikum, {userName}!
                  </h2>
                  <button 
                    style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
                    onClick={() => { setNameInput(userName); setIsEditingName(true); }}
                  >
                    Edit Name
                  </button>
                </>
              )}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Aapka personal health companion. Hamare AI modules ke zariye apni sehat ka khayal rakhein.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Award size={36} color="var(--accent)" />
            <div style={{ fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>Platform Submission</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Aga Khan University - CIME</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main widgets grid */}
      <div className="dashboard-grid">
        {/* Quick action: Risk assessment */}
        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', height: '240px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'hsla(263, 67%, 50%, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-hover)', marginBottom: '1.25rem' }}>
            <ClipboardList size={22} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Risk Screening
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', flexGrow: 1 }}>
            PCOS, thyroid, anemia, endometriosis, aur menstrual irregularities ke khatraat ka andaza lagayein.
          </p>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}
            onClick={() => setActiveView('risk-assessment')}
          >
            Start Screening <ArrowRight size={14} />
          </button>
        </div>

        {/* Quick action: Report Explainer */}
        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', height: '240px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'hsla(335, 78%, 62%, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.25rem' }}>
            <FileText size={22} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Report Explainer
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', flexGrow: 1 }}>
            Prescriptions ya reports (CBC, Thyroid etc.) upload karein aur Roman Urdu mein aasan khulasa haasil karein.
          </p>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}
            onClick={() => setActiveView('report-explainer')}
          >
            Explain Report <ArrowRight size={14} />
          </button>
        </div>

        {/* Quick action: Recovery Assistant */}
        <div className="card span-4" style={{ display: 'flex', flexDirection: 'column', height: '240px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'hsla(145, 63%, 45%, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)', marginBottom: '1.25rem' }}>
            <HeartPulse size={22} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Recovery Assistant
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', flexGrow: 1 }}>
            Post-discharge recovery check-ins, medicine schedules track karein aur dangerous warning signs par alerts paayein.
          </p>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}
            onClick={() => setActiveView('recovery-assistant')}
          >
            Track Recovery <ArrowRight size={14} />
          </button>
        </div>

        {/* Tip of the day */}
        <div className="card span-8" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: 'hsla(263, 67%, 50%, 0.1)', color: 'var(--primary-hover)', flexShrink: 0 }}>
            <Sparkles size={28} />
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Daily Health Tip (Sehat ka mashwara)
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontStyle: 'italic', lineHeight: '1.5' }}>
              "{healthTip}"
            </p>
          </div>
        </div>

        {/* Quick Awareness Library card */}
        <div className="card span-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setActiveView('symptom-checker')}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' }}>
              <BookOpen size={20} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: '700' }}>Symptom Dictionary</h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Browse 7 major conditions</span>
            </div>
          </div>
          <ChevronRight size={16} color="var(--text-muted)" />
        </div>
      </div>

      {/* Security Disclaimer */}
      <div className="disclaimer-box" style={{ marginTop: '2rem' }}>
        <strong>Important Security Notice:</strong> HerCare AI clinical data are processed on-device and locally. We do not transmit medical summaries to unauthorized third parties.
      </div>
    </div>
  );
}
