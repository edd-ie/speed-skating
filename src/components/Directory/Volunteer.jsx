import React, { useState, useRef } from "react";
import '../Styles/Volunteer.css'
import Header from "../Header";
import emailjs from '@emailjs/browser';

export default function Volunteer() {

    let [data, setData] = useState([]);

    function checkDay() {
        let inputDate = new Date(document.getElementById('myDate').value);
        let day = inputDate.getDay() + 1;
        let today = new Date();
        let twoMonthsLater = new Date();
        twoMonthsLater.setMonth(today.getMonth()+2);

        // JavaScript counts Sunday as 0, Monday as 1, and so on.
        if(inputDate < today || inputDate > twoMonthsLater) { // not within the allowed date range
            let response = inputDate < today ? "Can't be living in the past :)" : "We only accommodate upto 2 months in advance :)"
            alert(response);
            document.getElementById('myDate').value = '';
        } else if(day != 2 && day != 4) {// not Tuesday or Thursday
            alert("Please select a Tuesday or Thursday");
            document.getElementById('myDate').value = '';
        }
    }


    function handleSignup(e){
        e.preventDefault();
        let form = e.target;
        let name = form[0].value;
        let email = form[1].value;
        let date = form[2].value;

        let mail = {from_name: "SkateNB",
                    to_name: name,
                    message: `Your volunteer date is ${date}, thank you!`,
                    mail: email,
                    }

        setData([name, email, date]);
        
        let dataOut = [[name, email, date]]
        let table = "Volunteers";

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "post",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(dataOut)
        };

        fetch(`https://v1.nocodeapi.com/the_user/google_sheets/ShJwVNalyEtpToOE?tabId=${table}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                emailjs.send("service_ge7zqxj","template_f2qqkvu",mail,"RFgxV-_DgxGo4DZ3_")
                .then((result) => {
                    alert("Thank you for volunteering!");
                }, (error) => {
                    console.log(error.text);
                });
            })
            .catch(error => console.log('error', error));


        form.reset();
    }

    return(
        <div className="volunteer">
            <Header />
            <form action="submit" className="register" onSubmit={handleSignup}>
                <h1 className="formHead">Registration</h1>
                <label htmlFor="Name">Name:</label>
                <input name="to_name" type="text" placeholder="First Last" />
                <label htmlFor="Email">Email:</label>
                <input name="mail" type="email" placeholder="email@address.com" />
                <label htmlFor="Date">Date:</label>
                <input name="date" type="date" placeholder="Date" onChange={checkDay} id="myDate" />
                <button id="signup" type="submit">Volunteer</button>
            </form>
        </div>
    )
}