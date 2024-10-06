import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (type) => () => {
        navigate(`/${type}`)
    }
	return (
		<div className="main-container">
			<button onClick={handleClick("calculator")}>Calculator</button>
            <button onClick={handleClick("navbar")}>Navbar</button>
            <button onClick={handleClick("question3")}>Question 3</button>
		</div>
	);
};

export default Main;
