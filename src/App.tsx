import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import { initAnalytics, trackPageView } from './utils/analytics';
initAnalytics();
trackPageView(window.location.pathname);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
