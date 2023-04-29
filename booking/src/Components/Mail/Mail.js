import "./Mail.css"

const Mail = () => {
  return (
<div className="mail">
    <h2 className="mailTitle">GET IN TOUCH</h2>
    <p className="mailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="mailContainer">
        <input type="text" className="email"placeholder='Enter Your Email' />
        <button className="emailbtn">Subscibe</button>
    </div>
</div>
    )
}

export default Mail