import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import books from './data/books.json';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<>
			<Container fluid className="position-sticky sticky-top">
				<span id="inizio"></span>
				<span>
					<MyNav />
				</span>
			</Container>
			<Container fluid>
				<MyJumbotron />
			</Container>
			<Container>
				<BookList booksArray={books.history}/>
			</Container>
			<Container>
				<AllTheBooks />
			</Container>
			<Container fluid>
				<MyFooter />
			</Container>
		</>
	);
}

export default App;
