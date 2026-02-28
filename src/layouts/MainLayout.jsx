import Header from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

    return(
        <>
            <Header />
            <Search />
            <div className="bodyArea">
                <Outlet />
            </div>
            <Footer />
        </>
    )

}