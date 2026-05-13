import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ShieldCheck, RefreshCw, Download, ExternalLink, Key } from 'lucide-react';

// Componente de lluvia de puntos amarillos brillantes
const FallingParticles = () => {
  const particles = useMemo(() => Array.from({ length: 45 }), []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: '120%',
            transition: { 
              duration: Math.random() * 8 + 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }
          }}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full blur-[1.5px] shadow-[0_0_10px_#facc15]"
        />
      ))}
    </div>
  );
};

export default function App() {
  const [sub1, setSub1] = useState(false);
  const [sub2, setSub2] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const channel1 = "https://whatsapp.com/channel/0029Vb858Dy6WaKo7Pie8345";
  const channel2 = "https://chat.whatsapp.com/DNmGV8FHcUt3v5f9oIc8LT?mode=gi_t";
  const apkLink = "https://www.mediafire.com/file/ctwmj6y3tdnhnz5/DRIPCLIENT_V3.0_RAGE.apks/file";

  const generateKey = () => {
    setIsGenerating(true);
    setGeneratedKey(null);
    
    setTimeout(() => {
      const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
      setGeneratedKey(numbers);
      setIsGenerating(false);
    }, 1200);
  };

  const isAccessUnlocked = sub1 && sub2;

  const handleSubClick = (channel: number) => {
    if (channel === 1) setSub1(true);
    if (channel === 2) setSub2(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a05] text-white font-sans overflow-x-hidden selection:bg-yellow-500/30">
      <FallingParticles />

      {/* Brillos de fondo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-600/10 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full text-center space-y-12"
        >
          {/* Título Principal Llamativo pero con letras pequeñas */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.25em] text-yellow-100 uppercase italic leading-tight drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">
              Keys <br />
              <span className="text-yellow-400 drop-shadow-[0_0_15px_#ca8a04]">Drip Client</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-yellow-500" />
              <p className="text-yellow-500 font-mono text-[9px] tracking-[0.6em] uppercase font-bold">
                Alex Keys System
              </p>
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-yellow-500" />
            </div>
          </div>

          {/* Sección de Canales (Estilo WhatsApp Llamativo) */}
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4">
              <motion.a
                id="btn-sub-1"
                href={channel1}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSubClick(1)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden py-5 px-6 rounded-2xl border-2 font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4 shadow-[0_0_25px_rgba(255,215,0,0.2)] ${
                  sub1 
                  ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' 
                  : 'bg-yellow-400 border-white/20 text-black shadow-[0_10px_30px_rgba(255,215,0,0.3)]'
                }`}
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                {sub1 ? '¡CANAL #1 UNIDO!' : 'UNIRSE AL CANAL #1'}
              </motion.a>

              <motion.a
                id="btn-sub-2"
                href={channel2}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSubClick(2)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden py-5 px-6 rounded-2xl border-2 font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4 shadow-[0_0_25px_rgba(255,215,0,0.2)] ${
                  sub2 
                  ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' 
                  : 'bg-yellow-400 border-white/20 text-black shadow-[0_10px_30px_rgba(255,215,0,0.3)]'
                }`}
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                {sub2 ? '¡CANAL #2 UNIDO!' : 'UNIRSE AL CANAL #2'}
              </motion.a>
            </div>

            {/* Generador (Se activa al suscribirse) */}
            <div className="pt-8">
              {!isAccessUnlocked ? (
                <div className="p-5 bg-yellow-950/20 border-2 border-yellow-500/20 rounded-[2rem] backdrop-blur-md">
                  <p className="text-[10px] text-yellow-300/80 uppercase tracking-[0.3em] font-bold leading-relaxed">
                    Sigue los pasos de arriba <br />
                    <span className="text-white italic">para liberar tu acceso alex keys</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <motion.button
                    id="btn-generate"
                    disabled={isGenerating}
                    onClick={generateKey}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(161,98,7,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 bg-yellow-500 text-black font-black rounded-[2rem] transition-all shadow-[0_15px_50px_rgba(161,98,7,0.4)] flex items-center justify-center gap-4 tracking-[0.4em] text-[11px] border-t-2 border-white/30"
                  >
                    {isGenerating ? (
                      <RefreshCw className="w-6 h-6 animate-spin" />
                    ) : (
                      <ShieldCheck className="w-6 h-6" />
                    )}
                    {generatedKey ? 'GENERAR OTRA' : 'GENERAR KEY'}
                  </motion.button>

                  <AnimatePresence>
                    {generatedKey && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        className="p-10 bg-white/[0.03] border-2 border-yellow-400/40 rounded-[2.5rem] backdrop-blur-xl shadow-[0_0_80px_rgba(234,179,8,0.15)] relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                        <p className="text-[9px] text-yellow-400 uppercase tracking-[0.6em] mb-6 font-bold">Código de Acceso</p>
                        <p className="text-4xl font-mono tracking-[0.3em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {generatedKey}
                        </p>
                        
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                          <button 
                            onClick={() => navigator.clipboard.writeText(generatedKey || '')}
                            className="px-6 py-2.5 border border-yellow-400/30 rounded-full text-[9px] text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all tracking-[0.4em] uppercase font-bold"
                          >
                            Copiar Código
                          </button>
                          
                          <a
                            href={apkLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-yellow-500/20 border border-yellow-400/40 rounded-full text-[9px] text-white hover:bg-yellow-500/40 transition-all tracking-[0.4em] uppercase font-black"
                          >
                            APK AQUÍ
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="fixed bottom-8 w-full text-center pointer-events-none opacity-30">
        <p className="text-[9px] font-mono tracking-[1em] text-yellow-400 uppercase font-black">
          Alex Security
        </p>
      </footer>
    </div>
  );
}
