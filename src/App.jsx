import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Main from "./mainPage";
import Calculator from "./pages/answers/calculator";
import Question3 from "./pages/answers/question3";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/navbar"/>
						<Route path="/calculator" element={<Calculator />} />
						<Route path="/question3" element={<Question3 />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
