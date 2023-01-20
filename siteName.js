// console.log('Sitename Working...')

// const siteName1 = document.location.hostname;

const text = document.getElementsByClassName('sitename');
console.log(text);

for (let i = 0; i < text.length; i++) {
    console.log(text[i])

    text[i].textContent = siteName;
    
    // const element = array[index];
    
}