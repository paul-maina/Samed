import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  
  return (
    <div>
      <Header />
       
       <div className="h-28"></div>
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
