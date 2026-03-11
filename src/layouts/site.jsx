// npm package manager
import { Outlet } from "react-router-dom";

// css
import styles from './site.module.css'

// components
import Header from "../pages/sites/components/header";
import Search from "../pages/sites/components/search";
import Footer from "../pages/sites/components/footer";

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