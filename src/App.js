import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useParams,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import HeaderNav from './components/Header';
import Diary from './pages/Diary';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* <Link to={'/'}>HOME</Link> | <Link to={'/diary'}>DIARY</Link> |{' '}
				<Link to={'/create'}>ADD</Link> | <Link to={'/edit'}>EDIT</Link> */}
				<Routes>
					<Route path="/" element={<Home params={'home'} />} />
					<Route path="/diary" element={<Diary params={'diary'} />} />
					<Route path="/create" element={<Create />} />
					<Route path="/edit" element={<Edit />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
