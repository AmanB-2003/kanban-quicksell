import Card from "./Card";
import './Column.css';

const Column =(props)=>{
    const data = props.data;
    const users = props.users;
    const order = props.order;

    /* If the compare function returns a negative value, then x is kept before y in the sorted result.
    Else if, the compare function returns a positive value, then y is kept before x in the sorted result
    Else, if the compare function returns a zero, there are no swaps done between x and y into the sorted result,
    and their order remains the same. */

    if(order === 'priority'){
        data.sort((t1,t2)=>((t1.priority > t2.priority) ? 1 : (t1.priority < t2.priority) ? -1 : 0));
    }else if(order === 'title'){
        // sort by title
        data.sort(function(a, b) {
            const titleA = a.title.toUpperCase(); // ignore upper and lowercase
            const titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA > titleB) { return 1;}
            if (titleA < titleB) { return -1; }
            // names must be equal
            return 0;
        });
    }

    return(
        <div className="column">
            <div className="heading">
                <p>{props.title}</p>
                <span style={{fontSize: "large", margin: "auto", marginRight:"3px"}}>+</span>
            </div>
            {data.map((d)=>{
                return <Card 
                    key={d.id}
                    id={d.id}
                    title={d.title}
                    priority={d.priority} 
                    tag={d.tag[0]} />
            })}
        </div>
    )
}

export default Column;