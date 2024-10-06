import { useLocation } from "react-router-dom";
import Navbar from "./pages/answers/navbar";

const Layout = (props) => {

    const location = useLocation()
	return (
		<>
            {location.pathname === "/navbar" ? <Navbar /> : undefined}
			<div className="container">
                {props.children}
            </div>
		</>
	);
};

export default Layout;
