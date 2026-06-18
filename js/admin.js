async function postData(data){

    const response =
    await fetch(API_URL,{

        method:"POST",

        body:JSON.stringify(data)

    });

    return await response.json();

}

async function login(){

    const username =
    document.getElementById(
        "username"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    const result =
    await postData({

        action:"login",

        username,

        password

    });

    if(result.success){

        document.getElementById(
            "loginSection"
        ).style.display = "none";

        document.getElementById(
            "adminSection"
        ).style.display = "block";

    }
    else{

        alert(
            "Invalid Username or Password"
        );

    }

}

async function addContribution(){

    await postData({

        action:"addContribution",

        date:
        document.getElementById("cDate").value,

        name:
        document.getElementById("cName").value,

        amount:
        document.getElementById("cAmount").value,

        mode:
        document.getElementById("cMode").value

    });

    alert("Contribution Saved");

}

async function addExpense(){

    await postData({

        action:"addExpense",

        date:
        document.getElementById("eDate").value,

        description:
        document.getElementById("eDesc").value,

        amount:
        document.getElementById("eAmount").value

    });

    alert("Expense Saved");

}

async function addNotification(){

    await postData({

        action:"addNotification",

        title:
        document.getElementById("nTitle").value,

        message:
        document.getElementById("nMessage").value

    });

    alert("Notification Saved");

}

async function addGallery(){

    await postData({

        action:"addGallery",

        imageUrl:
        document.getElementById("gUrl").value,

        caption:
        document.getElementById("gCaption").value

    });

    alert("Gallery Image Saved");

}