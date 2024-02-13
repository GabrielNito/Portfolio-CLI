export default function unknown(command) {
    const parent = document.querySelector("#terminal_content")

    const message = `-bash: ${command}: command not found
    `

    const pre = document.createElement("pre")
    pre.innerHTML = message

    parent.appendChild(pre)
}
