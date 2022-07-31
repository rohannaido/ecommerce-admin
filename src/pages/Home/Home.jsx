import './Home.css'
// import { ecomImg } from '../../assets/'

const Home = () => {
    return (
        <div className='homePage'>
            <h2>Home Page</h2>
            <div className='homePage_aboutContent'>
                <div className='homePage_aboutText'>
                    <p>
                        Hi, This Application is built to add latest products at best prices on the ONE nutrition store. This enables ONE nutrition Store Management team with admin privileges to modify and update product data for the ONE nutrition Ecommerce store.
                    </p>
                    <a className='homePage_storeLink' href='https://rohannaido.github.io/ecommerce-app/' target="_blank">
                        Click here to navigate to ONE Nutrition Store
                    </a>
                </div>
                <div className='homePage_ecommerceImageDiv'>
                    <img src="https://rohannaidu.com/images/ecommerce-screenshot.png" alt="Ecommerce App screenshot" />
                </div>
            </div>
        </div>
    )
}

export default Home;