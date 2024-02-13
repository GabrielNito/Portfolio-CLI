export default function social() {
    const parent = document.querySelector("#terminal_content")

    const social = `
    GitHub      <a href="https://github.com/gabrielnito" target="_blank">https://github.com/gabrielnito</a>
    LinkedIn    <a href="https://www.linkedin.com/in/gabrielnito/" target="_blank">https://www.linkedin.com/in/gabrielnito/</a>
    
    `

    const pre = document.createElement("pre")
    pre.innerHTML = social

    parent.appendChild(pre)
}
