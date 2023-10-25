const article = {
    title: "Paley Park",
    location: "3-5 EAST 53RD STREET, NEW YORK, NY 10022",
    note: "Measuring 4,200 square feet (390 m2), the park contains airy trees, lightweight furniture and simple spatial organization.",
}

document.querySelector('.article-title').innerHTML = article.title

// article subheading
document.querySelector('.article-location').innerHTML = article.location

document.querySelector('.article-note').innerHTML = article.note

const menuP = document.querySelector('.menuP')

menuP.addEventListener('click', function(event){
    const currentOpacity = document.querySelector('.transparent').style.opacity || '0'; // Default to 0 if no inline opacity is set
    if (currentOpacity === '1') {
        // If the current opacity is '1', set it to '0'
        document.querySelector('.transparent').style.opacity = '0';
    } else {
        // If the current opacity is not '1', set it to '1'
        document.querySelector('.transparent').style.opacity = '1';
    }
})

menuP.addEventListener('click', function(event){
    const currentOpacity = document.querySelector('.menuButtonContainer').style.opacity || '0'; // Default to 0 if no inline opacity is set
    if (currentOpacity === '1') {
        // If the current opacity is '1', set it to '0'
        document.querySelector('.menuButtonContainer').style.opacity = '0';
    } else {
        // If the current opacity is not '1', set it to '1'
        document.querySelector('.menuButtonContainer').style.opacity = '1';
    }
})