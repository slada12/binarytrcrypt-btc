// console.log('Sitename Working...')

// const siteName1 = document.location.hostname;

const text = document.getElementsByClassName('sitename');
const siteNumber = document.getElementById('sitenumber');
// console.log(text);

for (let i = 0; i < text.length; i++) {
    // console.log(text[i])

    text[i].textContent = siteName;
    
    // const element = array[index];
    
}

(function siteNumberFunc() {
    if (siteNumber === null) {
        return null;
    }

    if (siteName === 'elitecryptoinvestors.com') {
        siteNumber.textContent = '+1(479)485-1098'
    } else {
        return;
    }
} ());