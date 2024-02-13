export default function whois() {
    const parent = document.querySelector("#terminal_content")

    const whois = `Under Development...
    My name is Gabriel Furlan Nito, I'm 19 years old, 
    `

    const pre = document.createElement("pre")
    pre.innerHTML = whois

    parent.appendChild(pre)
}
