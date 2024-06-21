// document.getElementById('root')

import header from "./header.js"
import section from "./section.js"
import footer from "./footer.js"

// let header = "Welcome to Header section"
// let section = "Welcome to the page Section"
// let footer  = "Welcome to footer secion"
document.querySelector('#root').innerHTML = 
`
    <h1>
     ${header}
  </h1>
<h3>
${section()}
</h3>
<h2>
    ${footer("Hello!!!")}
</h2>
`