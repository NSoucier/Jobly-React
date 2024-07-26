import './Home.css';

function Home({ user }) {
    return (
        <>
            <h2 className='welcome'>{ user ? `Welcome back to the hunt, ${user}!` : 'Welcome to the hunt!'}</h2>
            {/* <h5 className='welcome'>Please login or sign up to see all jobs and companies.</h5> */}
        </>

    )
};

export default Home;