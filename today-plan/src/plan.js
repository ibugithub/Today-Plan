// function Plan(props) {
//     this.props.values.map((element, i) => {})
//     return <>
//         <li className="shadow p-2 my-2 col-sm-9" > {props.value} </li>
//         <button className="btn btn-danger col-sm-2 offset-1 my-2" onClick={()=>{props.sendFunc(props.id,this)}}> X </button>
//     </>
// }
// export default Plan; 





import React from "react";
function Plan(props) {
    const items = props.values
    return <>
    {
        items.map((element, i)=>{
            return (
            <React.Fragment key={i}>
                <li className="shadow p-2 my-2 col-sm-9" > {element.plan} </li>
                <button className="btn btn-danger col-sm-2 offset-1 my-2" onClick={()=>{props.sendFunc(element.id)}}> X </button>
            </React.Fragment>
            )
        })
    }
    </>
}
export default Plan;