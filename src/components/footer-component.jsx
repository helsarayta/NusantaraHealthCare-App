import React from 'react';

const FooterComponent = () => {
    return (
        <div className="d-flex flex-column">
            <div>
                Copyright &copy; {new Date().getFullYear()} Nusantara HealthCare All Rights Reserved.
            </div>
            <div>
                Application version : 1.0
            </div>
        </div>
    );
};

export default FooterComponent;