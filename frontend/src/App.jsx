import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './components/DashboardView';
import HealthQuestionnaire from './components/HealthQuestionnaire';
import SymptomChecker from './components/SymptomChecker';
import ReportUploader from './components/ReportUploader';
import SymptomLog from './components/SymptomLog';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [language, setLanguage] = useState('en'); // 'en' or 'ur'
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  
  const backendUrl = "http://localhost:5000";

  // Document Title update based on view
  useEffect(() => {
    const titles = {
      'dashboard': 'Patient Portal | HerCare AI',
      'risk-assessment': 'Hormonal & Health Risk Screening | HerCare AI',
      'symptom-checker': 'Women\'s Health Awareness Guide | HerCare AI',
      'report-explainer': 'Medical Report & Prescription Explainer | HerCare AI',
      'recovery-assistant': 'Post-Discharge Recovery tracker | HerCare AI'
    };
    document.title = titles[activeView] || 'HerCare AI';
  }, [activeView]);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView setActiveView={setActiveView} backendUrl={backendUrl} />;
      case 'risk-assessment':
        return <HealthQuestionnaire backendUrl={backendUrl} />;
      case 'symptom-checker':
        return <SymptomChecker backendUrl={backendUrl} />;
      case 'report-explainer':
        return <ReportUploader backendUrl={backendUrl} geminiKey={geminiKey} />;
      case 'recovery-assistant':
        return <SymptomLog backendUrl={backendUrl} geminiKey={geminiKey} />;
      default:
        return <DashboardView setActiveView={setActiveView} backendUrl={backendUrl} />;
    }
  };

  const getViewMeta = () => {
    switch (activeView) {
      case 'dashboard':
        return {
          title: "Patient Dashboard",
          subtitle: "Manage your health risk assessments, reports, and recovery timeline."
        };
      case 'risk-assessment':
        return {
          title: "AI Health Risk Assessment",
          subtitle: "Screen for PCOS, Thyroid, Anemia, Endometriosis, and Menstrual Irregularities."
        };
      case 'symptom-checker':
        return {
          title: "Symptom Checker & Awareness Guide",
          subtitle: "Understand your symptoms and get urgency tags for gynecological conditions."
        };
      case 'report-explainer':
        return {
          title: "Medical Report & Prescription Explainer",
          subtitle: "Upload lab tests or recipes for a clear, bilingual Roman Urdu & English breakdown."
        };
      case 'recovery-assistant':
        return {
          title: "Post-Discharge Recovery Assistant",
          subtitle: "Log daily recovery metrics, track surgical routines, and monitor safety limits."
        };
      default:
        return {
          title: "HerCare AI Portal",
          subtitle: "Intelligent Women's Health Companion."
        };
    }
  };

  const meta = getViewMeta();

  return (
    <div className="app-container">
      {/* Left Sidebar Menu */}
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        geminiKey={geminiKey}
        setGeminiKey={setGeminiKey}
      />

      {/* Main Panel */}
      <main className="main-content">
        <Navbar 
          title={meta.title} 
          subtitle={meta.subtitle} 
          language={language}
          setLanguage={setLanguage}
        />

        <div style={{ flex: 1, width: '100%' }}>
          {renderActiveView()}
        </div>
      </main>
    </div>
  );
}
