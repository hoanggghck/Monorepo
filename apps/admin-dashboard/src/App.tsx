import { useState } from "react";
import { Button } from "@repo/ui"
function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <div className="p-10 space-y-10 min-h-screen" data-theme={isDark ? 'dark' : 'light'}>
      <Button className="me-2" color="secondary" size="default" variant={"default"}>Default</Button>
      <Button size="sm" variant={"secondary"}>Large</Button>
      <div className="bg-primary p-10 text-white">Test Tailwind</div>
      <Button onClick={() => setIsDark(!isDark)}>changeMode</Button>
      <div className="p-6 bg-background text-foreground border rounded-xl shadow-md">
        <p className="text-red">Đây là màu Primary mặc định</p>
        <h2 className="font-bold text-primary">LIGHT MODE</h2>
      </div>

    </div>
    </>
  );
}

export default App
