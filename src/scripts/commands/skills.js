export default function skills() {
  const parent = document.querySelector("#terminal_content")

  const skills = `
    <span style="color:var(--Accent)">Tools:</span>
      <img class="skills_icon" src="/BASH.png"> - BASH
      <img class="skills_icon" src="/VSCODE.webp"> - Visual Studio Code
      <img class="skills_icon" src="/GITHUB.png"> - GitHub
      <img class="skills_icon" src="/GCP.png"> - Google Cloud Platform
      <img class="skills_icon" src="/OFFICE.png"> - Microsoft Office

    <span style="color:var(--Accent)">Languages:</span>
      <img class="skills_icon" src="/JAVASCRIPT.png"> - JavaScript
      <img class="skills_icon" src="/PYTHON.png"> - Python
      <img class="skills_icon" src="/SASS.png"> - Sass/Scss
    
    <span style="color:var(--Accent)">Learning:</span>
      <img class="skills_icon" src="/REACT.webp"> - React
      <img class="skills_icon" src="/TYPESCRIPT.png"> - TypeScript
    
    <span style="color:var(--Accent)">APIs:</span>
      <img class="skills_icon" src="/NODE.png"> - Express.js
      <img class="skills_icon" src="/VITE.png"> - Vite
      <img class="skills_icon" src="/WEBPACK.png"> - Webpack
    `

  const pre = document.createElement("pre")
  pre.innerHTML = skills

  parent.appendChild(pre)
  return parent
}
