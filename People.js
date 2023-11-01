const article = {
    title: "People",
    subtitle1: "Who design the park?",
    text1: "The park was designed by Zion & Breen Associates.",
    subtitle2: "Who designed the furniture?",
    text2: "Finnish-American designer, Eero Saarinen, designed the tables.Harry Bertoia, an Italian-American sculptor, designed the chairs.",
}

document.querySelector('.article-title').innerHTML = article.title

document.querySelector('.article-subtitle1').innerHTML = article.subtitle1
document.querySelector('.article-text1').innerHTML = article.text1

document.querySelector('.article-subtitle2').innerHTML = article.subtitle2
document.querySelector('.article-text2').innerHTML = article.text2