import PropTypes from "prop-types";
import Navbar from "../../component/toolbar/Navbar";
import { AuthContext } from "../../helpers/AuthContext";
import { useState } from "react";


const Layout = ({ children }) => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <AuthContext.Provider value={{ search, setSearch }}>
                <Navbar />
                {children}
            </AuthContext.Provider>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
