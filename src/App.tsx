import { Routes, Route, Navigate } from 'react-router-dom';
import GeneralLayout from 'src/components/GeneralLayout/GeneralLayout';
import Setup from 'src/components/Setup/Setup';
import { useGeneralLayout } from 'src/components/GeneralLayout/useGeneralLayout';

function App() {
  const layoutHook = useGeneralLayout();

  return (
    <Routes>
      <Route
        path="/setup"
        element={
          <Setup layoutHook={layoutHook} />
        }
      />
      <Route
        path="/chat"
        element={
          <GeneralLayout layoutHook={layoutHook} />
        }
      />
      <Route path="*" element={<Navigate to="/setup" />} />
    </Routes>
  );
}

export default App;