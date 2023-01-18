
const nav = document.getElementById('top-navber')
fetch('../../header.html')
.then(res=>res.text())
.then(data=> {
    nav.innerHTML = data; 
});