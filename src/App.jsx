import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RippleStubPage from './pages/RippleStubPage';

/**
 * App — top-level routing.
 *
 *  "/"               -> Kindness Map & Discovery (this scope)
 *  "/ripple/:actId"  -> "I Want to Ripple" target. The challenge screen is
 *                       owned by Nitya/Bhavitha; we render a lightweight stub
 *                       here that receives the actId via the route.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ripple/:actId" element={<RippleStubPage />} />
      {/* Catch-all keeps deep links to unknown routes from crashing the demo. */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}