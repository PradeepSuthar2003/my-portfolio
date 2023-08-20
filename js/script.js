const openTab = (tabName) => {
    let tabLinks = document.getElementsByClassName("tab-links");
    let tabContents = document.getElementsByClassName("tab-contents");

    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");
}

const openMenu = () => {
    let sideMenu = document.getElementById("sidemenu");

    sideMenu.style.right = "0";
}

const closeMenu = () => {
    let sideMenu = document.getElementById("sidemenu");

    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9RpmZG9dgIDDuSDJiF2dFxSfPgOp7x_bV1iWYbGgALYb3GlOZO1zFrbACq5C7ivYtNA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset();
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message))
});