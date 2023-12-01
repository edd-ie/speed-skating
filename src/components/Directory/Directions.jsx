import React from "react";
import Header from "../Header";
import "../Styles/Directions.css";

export default function Directions() {
    
    return (
        <div className="Directions">
            <Header />
            <div className="mapShowcase">
                {/* <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.6797684668195!2d-66.64396322405594!3d45.92488577108525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca42185c1e8179b%3A0xeb8750587d484ed1!2sGrant-Harvey%20Centre!5e1!3m2!1sen!2sca!4v1701472184780!5m2!1sen!2sca" 
                    style={{border:"0", height:"94vh", width: "100vw"}}
                    allowfullscreen="true"
                    loading="eager"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe> */}

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.1739266419455!2d-66.64238073039509!3d45.924532198192836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca42280843c9ea1%3A0x493d837090c5dad1!2sFredericton%20Amateur%20Speed%20Skating%20Club!5e1!3m2!1sen!2sca!4v1701473310526!5m2!1sen!2sca" 
                    style={{border:"0", height:"90vh", width: "100vw"}}
                    allowfullscreen=""
                    loading="eager" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}