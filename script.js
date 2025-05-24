const apiKey = "UMpKdMv2wTaSNs6i64PjIbN4jIY3SPJUt9Ygl0Qf";
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
