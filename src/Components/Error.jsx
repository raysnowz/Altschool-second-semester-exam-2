import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
            console.log('useEffect ran');
        }, 3000)
    },[navigate])
    return (
        <div className="error">
            <h2>The page you were looking for wasn't found.</h2>

            <div className="redirect">
                <a href="/">Click here to return home</a><br/>
                <h4>Or</h4>
                <span>be redirected after 3 seconds of inaction</span>
            </div>
        </div>
    );
}
 
export default Error;