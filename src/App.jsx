import SecurityGuard from './components/SecurityGuard';
import ProjectRoutes from "./Routes"
import MobileTabNav from './components/ui/MobileTabNav';

function App() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <SecurityGuard />
      <ProjectRoutes />
      <MobileTabNav />
    </div>
  );
}

export default App
