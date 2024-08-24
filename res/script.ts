const greeting = document.getElementById('greeting') as HTMLInputElement | null;
let dateTime = new Date().getHours();

if (greeting != null) {
    if (dateTime >= 18) {
        greeting.textContent = `Good Night`;
    } else if (dateTime >= 12) {
        greeting.textContent = `Good afternoon`;
    } else if (dateTime >= 6) {
        greeting.textContent = `Good Morning`;
    } else {
        greeting.textContent = `Is not too late to check my portfolio?`; 
    }
}
