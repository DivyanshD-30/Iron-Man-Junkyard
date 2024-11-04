import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


function Home() {
    // const [loggedInUser, setLoggedInUser] = useState('');
    // const [userType, setUserType] = useState('');
    // const [products, setProducts] = useState('');
    // const navigate = useNavigate();
    // useEffect(() => {
    //     setLoggedInUser(localStorage.getItem('loggedInUser'));
    //     setUserType(localStorage.getItem('userType'));
    // }, [])

    // const handleLogout = (e) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('loggedInUser');
    //     localStorage.removeItem('userType');
    //     handleSuccess('User Loggedout');
    //     setTimeout(() => {
    //         navigate('/login');
    //     }, 1000)
    // }

    // const fetchProducts = async () => {
    //     try {
    //         const url = `${process.env.REACT_APP_API_URL}/products`;
    //         const headers = {
    //             headers: {
    //                 'Authorization': localStorage.getItem('token')
    //             }
    //         }
    //         const response = await fetch(url, headers);
    //         const result = await response.json();
    //         console.log(result);
    //         setProducts(result);
    //     } catch (err) {
    //         handleError(err);
    //     }
    // }
    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    return (
        <>
        <div className='m-3'>
            <HeroSection/>
        </div>
        <div>
            <Cards/>
        </div>
        {/* <div className='home-container'>
        <aside className='main-content sidebar'>
            <h3>Profile</h3>
            <h1>Welcome {loggedInUser} ({userType})</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <div className='user-message'>
                {userType === 'customer' ? (
                    <h2>Schedule your scrap</h2> 
                ) : (
                    <h2> Is there any customer selling scrap</h2>
                )}
            </div>
            <div className='product-list'>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={index}>
                        <li>{item.name} : {item.price}</li>
                    </ul>
                ))
            ) : (
                <p>No Products available.</p>
            )}
            </div>
            <ToastContainer /> */}
        {/* </aside> */}
        <Footer/>
        {/* </div> */}
        </>
    )
}

export default Home
