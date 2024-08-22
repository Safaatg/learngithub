import icon from "../../assets/icon-success-check.svg"
import "../SuccessMessage/SuccessMessage.css"
function SuccessMessage() {
    return (
        <div id="SuccessMessage">
            <div className="message-header">
            <img src={icon} />
                Message Sent!
            </div>
            <p>Thanks for completing the form. we'll be in touch soon!</p>

        </div>
    )
    
}
export default SuccessMessage