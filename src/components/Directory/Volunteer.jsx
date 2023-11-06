import React, { useState } from "react";
import '../Styles/Volunteer.css'

export default function Volunteer() {

    let [data, setData] = useState({});

    function checkDay() {
        let inputDate = new Date(document.getElementById('myDate').value);
        let day = inputDate.getDay() + 1;
        let today = new Date();
        let twoMonthsLater = new Date();
        twoMonthsLater.setMonth(today.getMonth()+2);

        // JavaScript counts Sunday as 0, Monday as 1, and so on.
        if(inputDate < today || inputDate > twoMonthsLater) { // not within the allowed date range
            alert("Please select a date that is no earlier than today and no later than two months from today");
            document.getElementById('myDate').value = '';
        } else if(day != 2 && day != 4) {// not Tuesday or Thursday
            alert("Please select a Tuesday or Thursday");
            document.getElementById('myDate').value = '';
        }
    }


    function handleSignup(){
        setData({
        name:"Jeeves",
        phone: 132424,
        email: 'ae@gmail.com',
        date: 'thursday'
        })
        let dataOut = [[data.name, data.phone, data.email, data.date]]
        let table = "Test"

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "post",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(dataOut)
        };

        fetch("https://v1.nocodeapi.com/the_user/google_sheets/cBbKgkpOMaLBOEAE?tabId=Test", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Done!")
    }

    return(
        <div className="volunteer">
            <form action="submit" className="register" onSubmit={handleSignup}>
                <h1 className="formHead">Registration</h1>
                <label htmlFor="Name">Name:</label>
                <input type="text" placeholder="First Last" />
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="email@address.com" />
                <label htmlFor="Date">Date:</label>
                <input type="date" placeholder="Date" onChange={checkDay} id="myDate" />
                <button id="signup" type="submit">Volunteer</button>
            </form>
        </div>
    )
}