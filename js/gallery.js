window.onload = async function(){

    const response =
    await fetch(
        `${API_URL}?action=gallery`
    );

    const data =
    await response.json();

    const gallery =
    document.getElementById(
        "galleryContainer"
    );

    gallery.innerHTML = "";

    if(data.length <= 1){

        gallery.innerHTML =
        "<p>No Images Available</p>";

        return;

    }

    data.slice(1).reverse().forEach(row=>{

        gallery.innerHTML +=
        `
        <div class="col-md-4 mb-4">

            <div class="card">

                <img
                src="${row[1]}"
                class="gallery-img">

                <div class="card-body">

                    <p>

                    ${row[2]}

                    </p>

                </div>

            </div>

        </div>
        `;

    });

};