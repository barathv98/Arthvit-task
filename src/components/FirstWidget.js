import React from "react";
import "../styles/FirstWidget.scss";

const FirstWidget = () => {
    return (
        <div className="first_widget">
            <div className="contains">
                <div className="text_contains">
                    <span className="main_text">
                        India's Credit Revolution is here.
                        <span className="colored_text">Pay 1/3rd.</span>
                        Anywhere.
                    </span>
                </div>
                <div className="form_container">
                    <input type="phone" className="phone_form" placeholder="Enter phone number"></input>
                    <button class="phone_btn">Apply now</button>
                </div>
                <div className="consent_form">
                    <input type="checkbox" className="check_form" id="consent_form" checked></input>
                    <label className="label_text" for="consent_form">By submitting this information, you agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                </div>
            </div>
            <div className="image_contains">
                <img className="card_image" src="https://uni.cards/images/redesign/card_asset.webp" alt="card image"></img>
            </div>
        </div>
    )
}

export default FirstWidget;