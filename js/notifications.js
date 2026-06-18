window.onload = async function(){

    const response =
    await fetch(
        `${API_URL}?action=notifications`
    );

    const data =
    await response.json();

    const container =
    document.getElementById(
        "notificationContainer"
    );

    container.innerHTML = "";

    if(data.length <= 1){

        container.innerHTML =
        "<p>No Notifications Available</p>";

        return;

    }

    data.slice(1).reverse().forEach(row=>{

        container.innerHTML +=
        `
        <div class="card mb-3">

            <div class="card-body">

                <h5>
                    📢 ${row[1]}
                </h5>

                <p>
                    ${row[2]}
                </p>

            </div>

        </div>
        `;

    });

};