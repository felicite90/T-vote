import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Route,
    Link,
    Routes,
    useNavigate
} from 'react-router-dom';
import Home from './Home';
import ElectionType from './ElectionType/ElectionType';
import NotFound from './NotFound';
import Footer from './Footer';

function NavBar() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    return (
        <>
            <Navbar className='navbar' expand='lg'>
                <Container>
                    <Navbar.Brand onClick={goToHome} className='brand'>T-Vote</Navbar.Brand>
                    <Navbar.Toggle area-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Link className='list_item' to="/">Accueil</Link>
                            <Link className='list_item' to="/electiontypes">Types d'élection</Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            <button className='btn btn-sm btn-success'>Connexion</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/electiontypes' element={<ElectionType />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default NavBar;