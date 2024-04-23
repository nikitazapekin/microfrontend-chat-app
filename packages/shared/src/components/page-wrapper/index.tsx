import type { ReactNode } from 'react';
 interface Props {
children: ReactNode
 }
const PageWrapper = ({children}: Props) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh"}}>
            {children}
        </div>
      );
}
 
export default PageWrapper;

/*
 display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    */