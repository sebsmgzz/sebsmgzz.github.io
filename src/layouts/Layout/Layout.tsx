import { Fragment } from "react";

import { Header, Main, Footer } from "layouts";
import { LayoutProps } from "./Layout.d";

export const Layout = function(props: LayoutProps) {
    return (
		<Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}
