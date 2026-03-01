// npm package manager
import { Outlet } from "react-router-dom";

// css
import styles from './main.module.css'

// components
import Header from "../pages/main/components/header";
import Search from "../pages/main/components/search";
import Footer from "../pages/main/components/footer";

export default function Main() {

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