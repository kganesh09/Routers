import Sidebar from '../Components/Sidebar';
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is a protected route, accessible only after login.</p>
        <p>This is a Ganesh work yes 😍</p>
      </div>
    </div>
  );
}
export default Home;