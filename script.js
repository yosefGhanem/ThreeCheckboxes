// Bringing toggles which is the check box themselves.
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))//pass whatever the target is



// this function to not do all 3 checkboxes together
function doTheTrick(theClickedOne){
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            //if we click on it then change it to false
                fast.checked = false
            }
    
        if(cheap === theClickedOne) {
                good.checked = false
            }
    
        if(fast === theClickedOne) {
                cheap.checked = false
            }
        }
}


