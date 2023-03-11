import { useLocation, useNavigate } from "react-router-dom";

export const ChildLink = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    if (props.location){
        return (
            location.pathname
        )
    }
    if (props.navigate) {
        return (
            navigate
        )
    }
    
}
