import React, {useEffect, useState} from 'react';

const HeaderComponent = () => {
    const [greeting, setGreeting] = useState("");

    const updateGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) setGreeting("Selamat Pagi");
        else if (hour >= 12 && hour < 18) setGreeting("Selamat Siang");
        else setGreeting("Selamat Malam");
    };

    useEffect(() => {
        updateGreeting();
        const timer = setInterval(updateGreeting, 60000); // every minute
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <nav className="navbar bg-body-tertiary bg-info-subtle ">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h5">
                    {greeting} Admin
                </span>
                    <div className="d-flex align-items-center gap-3">

                        <div className="position-relative">
                            <button
                                className="btn btn-light rounded-circle position-relative"
                                style={{width: "40px", height: "40px"}}
                            >
                                <i className="bi bi-bell fs-6"></i>

                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{fontSize: "0.6rem"}}
                                >
                                3
                            </span>
                            </button>
                        </div>

                        <div className="dropdown">
                            <button
                                className="btn p-0 border-0 bg-transparent"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                            <span className="position-relative">
                                <span className="position-absolute bottom-1 end-0 online-indicator rounded-circle"
                                      style={{width: "10px", height: "10px", border: "2px solid white"}}/>
                              <img
                                  src="/assets/user-avatar.png"
                                  alt="User"
                                  width="40"
                                  height="40"
                                  className="rounded-circle border"
                                  style={{objectFit: "cover"}}
                              />

                        </span>

                            </button>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                <button className="dropdown-item">
                                        Profile
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item">
                                        Settings
                                    </button>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <button className="dropdown-item text-danger">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderComponent;