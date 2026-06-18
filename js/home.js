window.onload = async function(){

    loadSummary();

    loadNotifications();

    loadGalleryPreview();

    startCountdown();

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
function startCountdown(){

    const festivalDate =
    new Date("2026-09-07");

    setInterval(()=>{

        const now =
        new Date();

        const diff =
        festivalDate - now;

        const days =
        Math.floor(
            diff/(1000*60*60*24)
        );

        document.getElementById(
            "countdown"
        ).innerHTML =
        "⏳ " + days +
        " Days Remaining";

    },1000);

}

startCountdown();
async function loadGalleryPreview(){

    const response =
    await fetch(
        `${API_URL}?action=gallery`
    );

    const data =
    await response.json();

    const gallery =
    document.getElementById(
        "galleryPreview"
    );

    gallery.innerHTML = "";

    if(data.length <= 1){

        gallery.innerHTML =
        "<p>No Images Available</p>";

        return;

    }

    data.slice(1)
        .reverse()
        .slice(0,3)
        .forEach(row=>{

        gallery.innerHTML +=
        `
        <div class="col-md-4 mb-4">

            <div class="card">

                <img
                src="${row[1]}"
                class="gallery-img">

                <div class="card-body">

                    <p>${row[2]}</p>

                </div>

            </div>

        </div>
        `;

    });

}
