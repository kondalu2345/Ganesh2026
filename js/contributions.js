window.onload = async function(){

    const response =
    await fetch(
        `${API_URL}?action=contributions`
    );

    const data =
    await response.json();

    const table =
    document.getElementById(
        "contributionTable"
    );

    if(data.length <= 1){

        table.innerHTML =
        "<tr><td colspan='4'>No Data</td></tr>";

        return;

    }

    data.slice(1).forEach(row=>{

        table.innerHTML +=
        `
        <tr>

            <td>${row[0]}</td>

            <td>${row[1]}</td>

            <td>₹ ${row[2]}</td>

            <td>${row[3]}</td>

        </tr>
        `;

    });

};