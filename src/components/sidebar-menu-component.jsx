import React from 'react';

const SidebarMenuComponent = ({ onMenuClick }) => {
    return (
        <div
            className="border-end flex-shrink-0"
            style={{width: "220px", minWidth: "220px"}}
        >
            <img src="/assets/logoNusantaraHealthCare.png" alt="Logo" width="150" height="100"
                 className="d-inline-block align-text-top"/>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link text-start w-100"
                        onClick={() => onMenuClick("pendaftaran")}
                    >
                        <i className="bi bi-person-add me-2"></i>
                        Pendaftaran
                    </button>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link text-start w-100"
                        onClick={() => onMenuClick("klinik")}
                    >
                        <i className="bi bi-box2-heart me-2"></i>
                        Klinik
                    </button>
                </li>

                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link text-start w-100"
                        onClick={() => onMenuClick("farmasi")}
                    >
                        <i className="bi bi-bandaid me-2"></i>
                        Farmasi
                    </button>
                </li>
            </ul>
        </div>
    );
};


export default SidebarMenuComponent;