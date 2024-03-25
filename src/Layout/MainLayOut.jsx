import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
// import Blogs from "../Pages/Blogs";
// import Bookmarks from "../Pages/Bookmarks";
// import Home from "../Pages/Home";

const MainLayOut = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            {/* packet */}
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayOut;