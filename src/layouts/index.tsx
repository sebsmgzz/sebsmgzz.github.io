import { Fragment } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export const Layout = function() {
    return (
		<Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default Layout;
