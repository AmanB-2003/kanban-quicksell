import './Card.css';
import vals from "../displayStates.json"

const Card = ({id, title, priority, tag}) =>{
    return(
        <div className="card">
            <div className="row-start">
                <p>{id}</p>
                <span>img</span>
            </div>
            <div className="row-mid">
                <p>{title}</p>
            </div>
            <div className="row-end">
                <span className="breadcrumb">
                    <img  height="15" width="15" src={vals.priority.icons[priority]}></img>
                </span>
                <span className="breadcrumb">&#11044; {tag}</span>
            </div>
        </div>
    )
}

export default Card;