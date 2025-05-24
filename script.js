const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjE2MjRGMjE3NEJFNkVGNDU4ODMyMEIzODUwNTY2MjY2RUU5RUU4NDU2QkMxQTgxNkI0QzFCRkEzNjk3QTlCNzlGMTVCMTMxNjNGRUZEQ0M4MkNDNjk3NzdBRjMwRTdFOEU3RkI0REZBRUNFODFBMzZDQjRBRDU5MzgzQjFCQzQxOTZFOTI4QzI3NDBDNzk3NzZGNjI3MTlBREYzRkEwNjE5OTI3NEY3OUExOEJFNkE2QzBDQ0NBMDk0RjgwMzcwNDU1MzEyNDhEMkU3RkIyQzUxNjdDRDY4RTc0MDhFREI1RjE2MUM4REE4QzMwMDAwNzA5OTI1NEFCQzAiLCJyZWFkX29ubHkiOnRydWUsInByZXZlbnRfbWFzdGVyIjp0cnVlLCJ5b3V0dWJlX2lkIjoiVUNDTl84NWFONWVCalJ3bGtvM2VWLTN3Iiwic3RyZWFtbGFic19pZCI6IjYxOTQ2OTMxMDEyMDY4OTY2NCJ9.5RiJm_Ky2lYZdbpW8pUGG9x9K95G4laPruIEySRPvbM";
const url = https://streamlabs.com/api/v1.0/donations?access_token=${apiKey};

async function getTopDonors() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        let donors = data.donations.sort((a, b) => b.amount - a.amount).slice(0, 10);

        let list = document.getElementById("donor-list");
        list.innerHTML = "";
        donors.forEach((donor, index) => {
            let li = document.createElement("li");
            li.textContent = ${index + 1}. ${donor.name} - $${donor.amount};
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Klaida gaunant duomenis:", error);
    }
}

getTopDonors();
﻿
