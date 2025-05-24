const apiKey = "1624F2174BE6EF4588320B3850566266EE9EE8456BC1A816B4C1BFA3697A9B79F15B13163FEFDCC82CC69777AF30E7E8E7FB4DFAECE81A36CB4AD59383B1BC4196E928C2740C79776F62719ADF3FA06199274F79A18BE6A6C0CCCA094F8037045531248D2E7FB2C5167CD68E7408EDB5F161C8DA8C300007099254ABC0";
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
