import { useState } from "react";

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <div className="p-10 space-y-10 bg-gray-200 min-h-screen" data-theme={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>changeMode</button>
      <div className="p-6 bg-background text-foreground border rounded-xl shadow-md">
        <p className="text-red">Đây là màu Primary mặc định</p>
        <h2 className="font-bold text-primary">LIGHT MODE</h2>
      </div>

    </div>
    </>
  );
}

export default App
