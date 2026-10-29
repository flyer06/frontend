import DashboardHeader from "./components/DashboardHeader";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import "./App.css";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar/>

      <div className="dashboard-main">
        <DashboardHeader />
        <WelcomeSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;