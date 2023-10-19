function copyMiiData() {
    navigator.clipboard
        .writeText("AwAAQEp1suGiJbAC3DXFNXg5ODM4EQAAomNOAG8AUABuAGkAZAAAAAAAAAAAAGIqAJBCARFoRBgpFEYUgRIXaA0AACkAUkhUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPfy")
        .then(() => {
            alert("Mii Data has been saved to clipboard! ^_^")
        })
        .catch(() => {
            alert("Sorry! Something went wrong :(")
        })
    
}

async function CreateNav() {
    var navFetch = await (await (await fetch("https://nonamegiven.xyz/nav.html")).blob()).text()
    var body = $("body")

    body.prepend(navFetch)
}

function CreateBlog() {
    
}