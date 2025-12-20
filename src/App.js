import HeaderComponent from "./components/header-component";
import PendaftaranComponent from "./components/pendaftaran-component";
import SidebarMenuComponent from "./components/sidebar-menu-component";
import KlinikComponent from "./components/klinik-component";
import FarmasiComponent from "./components/farmasi-component";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FooterComponent from "./components/footer-component";



function App() {
    const [activePage, setActivePage] = useState("pendaftaran");

    const renderContent = () => {
        switch (activePage) {
            case "pendaftaran":
                return <PendaftaranComponent />;
            case "klinik":
                return <KlinikComponent />;
            case "farmasi":
                return <FarmasiComponent />;
            default:
                return <PendaftaranComponent />;
        }
    };

  return (
      <div className="d-flex flex-column min-vh-100">
          <div className="d-flex flex-row flex-grow-1">
                  <SidebarMenuComponent onMenuClick={setActivePage}/>
              <div className={'d-flex flex-column w-100'}>
                   <HeaderComponent/>
                  <main className="flex-grow-1 p-3 overflow-auto">
                      {renderContent()}
                  </main>
                  {/* Footer */}
                  <footer className="bg-light text-center py-3 border-top bg-info-subtle">
                      <FooterComponent/>
                  </footer>
              </div>
          </div>
      </div>
  );
}

export default App;
