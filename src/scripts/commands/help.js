export default function help() {
    const parent = document.querySelector("#terminal_content")

    const ascii = `
                       <span class="pfetch_user">gabriel@nito</span>
          <span class="pfetch_ascii_1">/\\</span>           <span class="pfetch_command">clear</span>      Clears terminal
         <span class="pfetch_ascii_1">/  \\</span>          <span class="pfetch_command">contact</span>    Infos about how to contact me
        <span class="pfetch_ascii_1">/\\   \\</span>         <span class="pfetch_command">courses</span>    My courses
       <span class="pfetch_ascii_2">/      \\</span>        <span class="pfetch_command">help</span>       Shows available commands
      <span class="pfetch_ascii_2">/        \\</span>       <span class="pfetch_command">skills</span>     My skills
     <span class="pfetch_ascii_2">/   |''|  -\\</span>      <span class="pfetch_command">social</span>     My social accounts
    <span class="pfetch_ascii_2">/_-''    ''-_\\</span>     <span class="pfetch_command">whois</span>      Who is Gabriel Nito?
                       <span class="pfetch_command">reboot</span>     Reloads the page
                       <span class="pfetch_command"></span>
                       <span class="pfetch_command"></span>
    `

    const pre = document.createElement("pre")
    pre.innerHTML = ascii

    parent.appendChild(pre)
}
