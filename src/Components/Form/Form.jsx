import "../Form/Form.css"
function Form (){
    function handleOnFormSubmit(event){

    }
    return(
<div className="form">
    <h1>Contact Us</h1>

    <form>
        <div className="formItem">
            <div className="inputGroup">
                <label>First Name:</label>
                <input type="text" />
            </div>

            <div className="inputGroup">
                <label>Last Name:</label>
                <input type="text" pattern=""/>
            </div>

            <div className="inputGroup">
                <label>Email Address:</label>
                <input type="email" />
            </div>

            <div className="inputGroup">
                <label>Query Type:</label>
                <label>General Enquiry</label>
                <input type="radio" />

                <label>Support Request</label>
                <input type="radio" />
            </div>

            <div className="inputGroup">
                <label>Message:</label>
                <textarea rows={3}></textarea>
            </div>

            <div className="inputGroup">
                <input type="checkbox" />
                <label>I consent to being contacted by the team</label>
            </div>
        </div>
        <button>Submit</button>
    </form>
</div>
    )
}
export default Form