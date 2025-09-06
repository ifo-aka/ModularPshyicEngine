import { useEffect, useState } from "react";

export default function MemoryStats() {
  const [stats, setStats] = useState({ REAL: 0, DREAM: 0, IMAGINATION: 0 });

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       const res = await fetch("http://localhost:5000/stats"); // or socket.emit
//       const data = await res.json();
//       setStats(data);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-2">🧠 AI Memory</h2>
      <ul>
        <li>REAL: {stats.REAL}</li>
        <li>DREAM: {stats.DREAM}</li>
        <li>IMAGINATION: {stats.IMAGINATION}</li>
      </ul>
    </div>
  );
}



const RealTimecom= ()=>{
    return <h2>This is real time chat of AI</h2>
    
}
