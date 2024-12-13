import {FunctionComponent} from "react";

interface TemplateProps {
    children: React.ReactNode,
}
 
const Template: FunctionComponent<TemplateProps> = ({children}) => {
    return <div>{children}</div>
}
 
export default Template;
