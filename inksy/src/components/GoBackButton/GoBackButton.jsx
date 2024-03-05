import { useNavigate} from "react-router-dom";

export const GoBackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button 
           onClick={() => navigate(-1)}
           className="btn btn-primary"
          >Back</button> 
        </>
    );
};