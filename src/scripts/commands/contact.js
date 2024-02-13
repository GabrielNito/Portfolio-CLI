export default function contact() {
    const parent = document.querySelector("#terminal_content")

    const contact = `
    Whatsapp    <a href="tel:19989514668">(19) 9 8951-4668</a>
    Email       <a href="mailto:nito.gabriel22@gmail.com">nito.gabriel22@gmail.com</a>
    
    `

    const pre = document.createElement("pre")
    pre.innerHTML = contact

    parent.appendChild(pre)
}
