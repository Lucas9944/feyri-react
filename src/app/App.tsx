import { Container } from "@mui/material";
import "../css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { BrandPage } from "../app/screens/BrandPage";
import { CommunityPage } from "../app/screens/CommunityPage";
import { OrdersPage } from "../app/screens/OrdersPage";
import { MemberPage } from "../app/screens/MemberPage";
import { HelpPage } from "../app/screens/HelpPage";
import { LoginPage } from "../app/screens/LoginPage";
import { HomePage } from "../app/screens/HomePage";

function App() {
  return (
    <Container>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/brand">BrandPage</Link></li>
              <li><Link to="/community">CommunityPage</Link></li>
              <li><Link to="/orders">OrdersPage</Link></li>
              <li><Link to="/member-page">MembersPage</Link></li>
              <li><Link to="/help">HelpPage</Link></li>
              <li><Link to="/login">LoginPage</Link></li>
              <li><Link to="/">HomePage</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/member-page" element={<MemberPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default App;
