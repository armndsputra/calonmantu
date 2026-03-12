// npm package manager
import { Outlet } from "react-router-dom";

// css
import styles from './site.module.css'

// components
import Header from "../pages/sites/components/Header";
import Search from "../pages/sites/components/Search";
import Footer from "../pages/sites/components/Footer";

export default function Site() {

    return(
        <>
            <Header />
            <Search />
            <div className={styles.body}>
                <Outlet />
            </div>
            <Footer />
        </>
    )

}