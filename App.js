import React, { useState, useEffect } from 'react';
import { Bluetooth, Wifi, AlertTriangle, CheckCircle, Zap, Eye, BookOpen, Phone, ShoppingCart, Bell, BarChart3, ChevronRight } from 'lucide-react';

const ESGAuditorPrototype = () => {
  const [activeTab, setActiveTab] = useState('observe');
  const [isExecuting, setIsExecuting] = useState(false);
  const [actionLog, setActionLog] = useState([]);

  // Mock Connectivity State
  const [connectivity] = useState({
    wifi: "Verified: Journal Global Repository Linked",
    bluetooth: "Active: Drone-X4 Connected"
  });

  // Mock Data mimicking 2026 Multimodal Intelligence
  const auditReport = {
    issueType: "Chemical Storage Incompatibility",
    location: "Sector B - Warehouse 4",
    description: "Oxidizing agents (Class 5.1) stored within 3 meters of Flammable Liquids (Class 3).",
    citations: [
      { journal: "Nature Sustainability (2025)", detail: "Cross-reactive proximity increases fire propagation speed by 40%." },
      { journal: "ISO 14001:2026", detail: "Clause 8.2: Emergency preparedness requires 5m segregation for hazardous pairings." }
    ],
    fixParams: {
      partRequired: "Fire-Rated Segregation Barrier (V2)",
      costImpact: "-$1,250 (Unplanned Maintenance)",
      alarmLevel: "Level 2 (Internal)"
    }
  };

  const handleExecute = (actionType) => {
    setIsExecuting(true);
    setTimeout(() => {
      setActionLog(prev => [...prev, `Successfully executed: ${actionType} at ${new Date().toLocaleTimeString()}`]);
      setIsExecuting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-zinc-100 font-sans overflow-hidden">
      
      {/* TOP HEADER: Connectivity Logos (Upper Left) */}
      <div className="absolute top-6 left-6 flex gap-3 z-50">
        <div className="group relative">
          <div className="bg-zinc-900/80 p-2 rounded-lg border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Bluetooth size={20} className="text-blue-400 animate-pulse" />
          </div>
          <span className="absolute left-0 top-10 w-48 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs group-hover:scale-100">{connectivity.bluetooth}</span>
        </div>
        
        <div className="group relative">
          <div className="bg-zinc-900/80 p-2 rounded-lg border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <Wifi size={20} className="text-green-400 animate-pulse" />
          </div>
          <span className="absolute left-0 top-10 w-48 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs group-hover:scale-100">{connectivity.wifi}</span>
        </div>
      </div>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-6">
        
        {/* TAB 1: OBSERVE */}
        {activeTab === 'observe' && (
          <div className="w-full max-w-5xl space-y-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="relative rounded-2xl border-2 border-red-500/40 overflow-hidden bg-zinc-900 aspect-video shadow-2xl">
              {/* Mock Video Feed Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute top-1/3 left-1/4 w-40 h-40 border-2 border-red-500 animate-pulse flex items-start justify-start p-2">
                <span className="bg-red-500 text-[10px] font-bold px-1">ANOMALY: INCOMPATIBLE</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none text-4xl font-bold italic uppercase tracking-tighter">
                Live Drone Feed Stream // Sector B
              </div>
              
              {/* Citation Overlay */}
              <div className="absolute bottom-6 left-6 z-20 max-w-md bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <BookOpen size={14} /> Supporting Gold Standards
                </h4>
                {auditReport.citations.map((c, i) => (
                  <p key={i} className="text-[11px] leading-relaxed mb-1 text-zinc-300 italic">
                    <span className="text-white font-semibold underline">{c.journal}:</span> "{c.detail}"
                  </p>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-zinc-500 text-sm italic">Analyze multi-modal telemetry from Drone Alpha-1...</p>
            </div>
          </div>
        )}

        {/* TAB 2: DECISION / RECOMMENDATION */}
        {activeTab === 'decision' && (
          <div className="w-full max-w-5xl grid grid-cols-2 gap-6 animate-in slide-in-from-right-8 duration-500">
            <div className="space-y-4">
              <h3 className="text-red-400 font-bold flex items-center gap-2 uppercase text-sm tracking-widest"><AlertTriangle size={18}/> Problematic State</h3>
              <div className="aspect-square bg-zinc-900 rounded-xl border border-red-900/50 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-full h-full border-2 border-dashed border-red-500/30 rounded flex items-center justify-center text-red-500/50 italic text-sm">
                  [Highlights: 3.2m Segregation Violation]
                </div>
                <p className="mt-4 text-xs text-zinc-400">{auditReport.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-green-400 font-bold flex items-center gap-2 uppercase text-sm tracking-widest"><CheckCircle size={18}/> Gold Standard Goal</h3>
              <div className="aspect-square bg-zinc-900 rounded-xl border border-green-900/50 flex flex-col items-center justify-center p-8 text-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <div className="w-full h-full border-2 border-green-500/30 rounded flex items-center justify-center text-green-500 font-bold italic text-sm">
                   ISO 14001:2026 COMPLIANT VIEW
                </div>
                <p className="mt-4 text-xs text-zinc-400 italic">"Recommendation: Deploy physical partition 'Fire-Shield V2' and recalibrate storage grid."</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AUTONOMOUS FIX */}
        {activeTab === 'execute' && (
          <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-3xl border border-white/5 shadow-2xl animate-in zoom-in-95">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/50">
                <Zap className="text-blue-400" size={32} />
              </div>
              <h2 className="text-2xl font-bold">Autonomous Agent Logic</h2>
              <p className="text-zinc-500 text-sm">Targeting: {auditReport.issueType}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <button 
                onClick={() => handleExecute('New Segregation Order + Alarm')}
                disabled={isExecuting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 rounded-xl font-bold flex items-center justify-between px-6 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart size={20} />
                  <div className="text-left">
                    <div className="text-sm">EXECUTE AUTONOMOUS FIX</div>
                    <div className="text-[10px] opacity-60 font-normal italic">Places order, Rings alarm, Updates Finance</div>
                  </div>
                </div>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleExecute('Financial Forecast Updated')} className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-zinc-700">
                  <BarChart3 size={16} /> CRUNCH FINANCES
                </button>
                <button onClick={() => handleExecute('Safety Alarm Triggered')} className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-zinc-700 text-red-400">
                  <Bell size={16} /> RING ALARM
                </button>
              </div>

              <button className="w-full py-3 bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                <Phone size={16} /> MANUAL OVERRIDE: CALL HUMAN-IN-CHARGE
              </button>
            </div>

            {/* ACTION LOG */}
            <div className="bg-black/40 rounded-lg p-4 font-mono text-[10px] text-green-500 h-32 overflow-y-auto border border-white/5">
              <div className="mb-1 opacity-50 tracking-widest uppercase underline">System Execution Log:</div>
              {isExecuting && <div className="animate-pulse">_PROCESSING MULTIMODAL DECISION...</div>}
              {actionLog.map((log, i) => (
                <div key={i} className="mb-1 animate-in slide-in-from-left-2">{`> ${log}`}</div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* LOWER BOTTOM FRAME: Three Navigation Buttons */}
      <nav className="h-28 bg-zinc-900 border-t border-white/5 px-12 flex items-center justify-around shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => setActiveTab('observe')}
          className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'observe' ? 'text-blue-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <div className={`p-3 rounded-xl ${activeTab === 'observe' ? 'bg-blue-500/10' : ''}`}>
            <Eye size={28} />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Observe</span>
        </button>

        <button 
          onClick={() => setActiveTab('decision')}
          className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'decision' ? 'text-blue-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <div className={`p-3 rounded-xl ${activeTab === 'decision' ? 'bg-blue-500/10' : ''}`}>
            <BookOpen size={28} />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Decision</span>
        </button>

        <button 
          onClick={() => setActiveTab('execute')}
          className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'execute' ? 'text-blue-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <div className={`p-3 rounded-xl ${activeTab === 'execute' ? 'bg-blue-500/10' : ''}`}>
            <Zap size={28} />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Fix</span>
        </button>
      </nav>
    </div>
  );
};

export default ESGAuditorPrototype;