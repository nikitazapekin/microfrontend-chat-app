
//import  styles from "./styles.module.scss"

import type { ReactNode } from 'react';
interface Props {
    children: ReactNode
}
const ContentWrapper = ({ children }: Props) => {
    return (
        <div style={{ flexGrow: "1", width: "100%" }} >
            {children}
        </div>
    );
}

export default ContentWrapper;

/*

 flex-grow: 1;
    width: 100%;
    */