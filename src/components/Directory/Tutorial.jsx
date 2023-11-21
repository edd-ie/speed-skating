import React from "react";
import Header from "../Header";
import "../Styles/Tutorial.css"
import pdf from "../../assets/Board Pad Installation.pdf"

export default function Tutorial() {
    const handleDownload = () => {
        // const pdfUrl = "../../assets/Board Pad Installation.pdf";
        // const link = document.createElement("a");
        // link.href = pdfUrl;
        // link.download = "Board Pad Installation.pdf"; // specify the filename
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // using Java Script method to get PDF file
        fetch("../../assets/Board Pad Installation.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Board Pad Installation.pdf";
                alink.click();
            });
        });
    };
    
    return(
        <div className="Tutorial">
            <div className="contentTutor">
                <div className="sect">
                    <h1>Layout</h1>
                    <a
                        href={pdf}
                        download="Board Pad Installation.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="download">
                            <span class="material-symbols-sharp">
                                download
                            </span>
                        </div>
                    </a>
                </div>

            </div>

            <Header/>
        </div>
    )
}