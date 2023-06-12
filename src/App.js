import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useParams,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Create from './pages/Create';
import Edit from './pages/Edit';
import { Provider } from 'react-redux';
import store from './configureStore';
import MyHeader from './components/MyHeader';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/diary/:id" element={<Diary />} />
						<Route path="/create" element={<Create />} />
						<Route path="/edit/:id" element={<Edit />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
