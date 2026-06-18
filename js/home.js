window.onload = async function(){

    loadSummary();

    loadNotifications();

};

async function loadSummary(){

    const response =
    await fetch(
        `${API_URL}?action=summary`
    );

    const data =
    await response.json();

    document.getElementById(
        "totalContribution"
    ).innerHTML =
    "₹ " +
    data.totalContribution;

    document.getElementById(
        "totalExpense"
    ).innerHTML =
    "₹ " +
    data.totalExpense;

    document.getElementById(
        "balance"
    ).innerHTML =
    "₹ " +
    data.balance;

}

async function loadNotifications(){

    const response =
    await fetch(
        `${API_URL}?action=notifications`
    );

    const data =
    await response.json();

    const div =
    document.getElementById(
        "notifications"
    );

    div.innerHTML = "";

    if(data.length <= 1){

        div.innerHTML =
        "<p>No Notifications</p>";

        return;

    }

    data.reverse()
        .slice(0,3)
        .forEach(item=>{

        div.innerHTML +=
        `
        <div class="card mb-2">

            <div class="card-body">

                <h5>${item[1]}</h5>

                <p>${item[2]}</p>

            </div>

        </div>
        `;

    });

}