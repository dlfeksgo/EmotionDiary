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
					<MyHeader
						headText={'감정 일기'}
						leftChild={'이전'}
						rightChild={'다음'}
					/>
					<Routes>
						<Route path="/" element={<Home params={'home'} />} />
						<Route path="/diary" element={<Diary params={'diary'} />} />
						<Route path="/create" element={<Create />} />
						<Route path="/edit" element={<Edit />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
