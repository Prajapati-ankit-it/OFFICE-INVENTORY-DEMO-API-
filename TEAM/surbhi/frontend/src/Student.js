import react,{useEffect} from "react";
import axios from "axios";

 function Student(){
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },[])

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">Office Inventory 
            <div  className='w-50 bg-white rounded p-3'>
                <button className="btn btn-success">add +</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            </div>
    )
 }

 export default Student