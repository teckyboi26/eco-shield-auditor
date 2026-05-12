<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoShield ESG Auditor Prototype</title>
    <!-- Tailwind CSS for Styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React and Babel for the UI logic -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    </style>
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const App = () => {
            const [activeTab, setActiveTab] = useState('observe');
            const [isExecuting, setIsExecuting] = useState(false);
            const [actionLog, setActionLog] = useState(["> System Initialized..."]);

            const handleExecute = (action) => {
                setIsExecuting(true);
                setTimeout(() => {
                    setActionLog(prev => [`> [ACTION] ${action} successful`, ...prev]);
                    setIsExecuting(false);
                }, 1500);
            };

            return (
                <div class="flex flex-col h-screen overflow-hidden relative">
                    
                    <!-- TOP BAR: Connectivity (Upper Left) -->
                    <div class="absolute top-6 left-6 flex gap-4 z-50">
                        <div class="flex items-center gap-2 bg-zinc-900/90 border border-blue-500/50 p-2 rounded-lg shadow-lg">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span class="text-[10px] font-bold tracking-widest text-blue-400">BT-DRONE_LINK</span>
                        </div>
                        <div class="flex items-center gap-2 bg-zinc-900/90 border border-green-500/50 p-2 rounded-lg shadow-lg">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span class="text-[10px] font-bold tracking-widest text-green-400">WIFI_7_JOURNALS</span>
                        </div>
                    </div>

                    <!-- MAIN CONTENT -->
                    <main class="flex-1 flex items-center justify-center p-6">
                        
                        {activeTab === 'observe' && (
                            <div class="w-full max-w-4xl text-center space-y-4">
                                <div class="relative bg-zinc-900 border-2 border-red-500/50 rounded-3xl aspect-video overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover opacity-40 grayscale" />
                                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                                        <div class="border-2 border-red-500 w-48 h-48 animate-pulse flex flex-col justify-between p-2">
                                            <span class="bg-red-500 text-[10px] font-bold self-start px-1">INCOMPATIBILITY DETECTED</span>
                                            <span class="text-red-500 text-[10px] font-mono self-end">REF: ISO-14001</span>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-4 left-6 text-left max-w-sm bg-black/70 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                                        <p class="text-blue-400 text-[10px] font-black uppercase mb-1">Source: Journal of Industrial Safety (2026)</p>
                                        <p class="text-xs italic text-zinc-300">"Chemical reactivity increases 400% when stored within 2m of heating vents."</p>
                                    </div>
                                </div>
                                <p class="text-zinc-500 font-mono text-xs uppercase tracking-widest">Observe Mode: Live Multimodal Telemetry Feed</p>
                            </div>
                        )}

                        {activeTab === 'decision' && (
                            <div class="w-full max-w-5xl grid grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <h3 class="text-red-500 font-black text-sm uppercase tracking-tighter italic">Anomaly State</h3>
                                    <div class="bg-zinc-900 border border-red-900/50 rounded-2xl p-6 h-64 flex flex-col justify-between">
                                        <div class="text-zinc-500 text-xs font-mono">PROBLEM: Tank-04 Leakage & Proximity Risk</div>
                                        <div class="text-3xl font-bold text-red-500">FAILED</div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h3 class="text-green-500 font-black text-sm uppercase tracking-tighter italic">Gold Standard</h3>
                                    <div class="bg-zinc-900 border border-green-900/50 rounded-2xl p-6 h-64 flex flex-col justify-between shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                                        <div class="text-zinc-500 text-xs font-mono">REQUIRED: Hermetic Seal & 5m Clearance</div>
                                        <div class="text-3xl font-bold text-green-500">TARGET STATE</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'execute' && (
                            <div class="w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[3rem] p-10 text-center shadow-2xl">
                                <div class="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <div class="w-10 h-10 bg-blue-500 rounded-full animate-ping opacity-20 absolute"></div>
                                    <span class="text-blue-400 text-2xl font-bold">Z</span>
                                </div>
                                <h2 class="text-2xl font-black italic uppercase mb-2">Autonomous Action</h2>
                                <p class="text-zinc-500 text-sm mb-8 italic">Agent is authorized to fix ESG discrepancies via API.</p>
                                
                                <div class="space-y-3">
                                    <button 
                                        onClick={() => handleExecute("Order Replacement Parts & Alert Maintenance")}
                                        disabled={isExecuting}
                                        class="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest transition-all active:scale-95 disabled:bg-zinc-700"
                                    >
                                        {isExecuting ? "Processing..." : "Execute Autonomous Fix"}
                                    </button>
                                    <button onClick={() => handleExecute("Alarm Triggered Site-wide")} class="w-full py-4 bg-zinc-800 text-red-400 font-bold rounded-2xl uppercase text-xs">Trigger Alarm</button>
                                    <button onClick={() => alert("Calling Supervisor...")} class="w-full py-4 bg-transparent border border-zinc-800 text-zinc-500 font-bold rounded-2xl uppercase text-xs hover:text-white transition-colors">Call Human-in-Charge</button>
                                </div>

                                <div class="mt-8 bg-black/50 p-4 rounded-xl font-mono text-[10px] text-green-500 text-left h-24 overflow-y-auto">
                                    {actionLog.map((log, i) => <div key={i}>{log}</div>)}
                                </div>
                            </div>
                        )}

                    </main>

                    <!-- BOTTOM NAVIGATION -->
                    <nav class="h-28 bg-zinc-900 border-t border-white/5 flex items-center justify-around px-8">
                        <button onClick={() => setActiveTab('observe')} class={`flex flex-col items-center gap-1 ${activeTab === 'observe' ? 'text-blue-500' : 'text-zinc-600'}`}>
                            <div class={`p-3 rounded-2xl ${activeTab === 'observe' ? 'bg-blue-500/10' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <span class="text-[9px] font-black uppercase tracking-widest">Observe</span>
                        </button>

                        <button onClick={() => setActiveTab('decision')} class={`flex flex-col items-center gap-1 ${activeTab === 'decision' ? 'text-blue-500' : 'text-zinc-600'}`}>
                            <div class={`p-3 rounded-2xl ${activeTab === 'decision' ? 'bg-blue-500/10' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                            </div>
                            <span class="text-[9px] font-black uppercase tracking-widest">Decision</span>
                        </button>

                        <button onClick={() => setActiveTab('execute')} class={`flex flex-col items-center gap-1 ${activeTab === 'execute' ? 'text-blue-500' : 'text-zinc-600'}`}>
                            <div class={`p-3 rounded-2xl ${activeTab === 'execute' ? 'bg-blue-500/10' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 14 7-9 1 9h10l-7 9-1-9H5Z"/></svg>
                            </div>
                            <span class="text-[9px] font-black uppercase tracking-widest">Fix</span>
                        </button>
                    </nav>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>