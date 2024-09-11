let userName = "test"
let userPassword = "1234"



function logIn(){
    event.preventDefault()

    if(user.value === "test" || password.value === "1234"){

        localStorage.setItem("username", user.value)
        localStorage.setItem("password", password.value)

        localStorage.getItem("username")
        localStorage.getItem("password")

        document.getElementById("root").innerHTML = 
        `<div class="sidaInloggad">
            <h1>Välkommen!</h1>
            
            <h2 style="margin: 4rem 0 0 0;">Lorem Ipsum</h2>
            <div>
                <h3>What is lorem Ipsum?</h3>
                <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div style="margin: 2rem 0 0 0;">
                <h3>Why do we use it?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div style="margin: 2rem 0 0 0;">
                <h3>Why do we use it?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            
        </div>
        `

        document.getElementById("headerIcon").innerHTML = `<p onClick="showLogInPage()" class="logoutBtn">Logga ut</p>`
    }

    if(user.value !== "test" || password.value !== "1234"){
        document.getElementById("root").innerHTML = 
        `<p class="errorMsg">Fel lösenord eller användarnamn!</p>
        <button class="tryAgainBtn" onClick="showLogInPage()">Försök igen</button>
        `
    }
}

function showLogInPage(){
    localStorage.clear()
    document.getElementById("headerIcon").innerHTML = ``
    document.getElementById("root").innerHTML = 
    `<div>
        <form class="logInForm">
            <label for="user">Användarnamn</label>
            <input required type="text" name="user" id="user">
            <label for="password">Lösenord</label>
            <input required type="password" name="password" id="password">
            <button onclick="logIn()">Logga in</button>
        </form>
    </div>`
}

if(localStorage.username){
    document.getElementById("root").innerHTML = `<div class="sidaInloggad">
            <h1>Välkommen!</h1>
        </div>
        `
    document.getElementById("headerIcon").innerHTML = `<p onClick="showLogInPage()" class="logoutBtn">Log Out</p>`
}
