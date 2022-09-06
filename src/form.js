import './form.css'

let Form = ()=>{
    return (
        <>
            <button type="submit" className="button">Add Data</button>
            Name:<input type="text" id="name" placeholder="Enter name"/>
            Email:<input type="text" id="name" placeholder="Enter email"/>
            Contact:<input type="text" id="name" placeholder="Enter contact"/>
        </>
    )
}
export default Form;