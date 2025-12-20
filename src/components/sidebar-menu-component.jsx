const SidebarMenuComponent = ({ onMenuClick, activePage }) => {
    return (
        <aside
            className="sidebar border-end flex-shrink-0"
            style={{width: "220px", minWidth: "220px"}}
        >
            <img
                src="/assets/logoNusantaraHealthCare.png"
                alt="Logo"
                width="150"
                height="100"
                className="d-block mx-auto my-3"
            />

            <ul className="nav flex-column sidebar-menu">
                <li className={`nav-item sidebar-item ${activePage === "pendaftaran" ? "active" : ""}`}>
                    <button
                        className="sidebar-link"
                        onClick={() => onMenuClick("pendaftaran")}
                    >
                        <i className="bi bi-person-add me-2"></i>
                        Pendaftaran
                    </button>
                </li>

                <li className={`nav-item sidebar-item ${activePage === "klinik" ? "active" : ""}`}>
                    <button
                        className="sidebar-link"
                        onClick={() => onMenuClick("klinik")}
                    >
                        <i className="bi bi-box2-heart me-2"></i>
                        Klinik
                    </button>
                </li>

                <li className={`nav-item sidebar-item ${activePage === "farmasi" ? "active" : ""}`}>
                    <button
                        className="sidebar-link"
                        onClick={() => onMenuClick("farmasi")}
                    >
                        <i className="bi bi-bandaid me-2"></i>
                        Farmasi
                    </button>
                </li>
            </ul>

        </aside>
    );
};

export default SidebarMenuComponent;
