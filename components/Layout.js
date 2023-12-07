
import TopLeftImg from "./TopLeftImg"
import Header from "./Header"
import Nav from "./Nav"

const Layout = ({children}) => {
  return <div className={`page text-white bg-cover bg-no-repeat min-h-screen bg-gradient-to-r from-violet-500 via-violet-500 to-indigo-500`}>
    <TopLeftImg />
    <Header />
    <Nav />
    {children}
  </div>;
};

export default Layout;
