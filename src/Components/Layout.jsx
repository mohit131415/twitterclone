import Header from "./Header";
import Middle from "./Middle";
import Right from "./Right";
import '../App.css'

function Layout() {
  return (
    <div>
      <div className="root">
        <Header />
        <div className="main-content">
          <Middle />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Layout;
