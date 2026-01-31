import SecurityGuard from './components/SecurityGuard';
import ProjectRoutes from "./Routes"

function App() {
  return (
    <>
      <SecurityGuard />
      <ProjectRoutes />
    </>
  );
}

export default App
