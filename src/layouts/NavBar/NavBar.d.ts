import { ReactElement } from "react";

import { NavBarLinkProps } from "layouts";

export type NavBarProps = {
    src: string,
    root: string,
    children: ReactElement<NavBarLinkProps> | Array<ReactElement<NavBarLinkProps>>
}
