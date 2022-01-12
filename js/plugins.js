
const myForm = document.getElementById('myForm');

/*********************************************** */
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const male = document.getElementById('male')
/*********************************************** */

/************************************************** */
const logUsername = document.getElementById('logUsername');
const logPassword = document.getElementById('logPassword');
const logEmail = document.getElementById('logEmail');
const logPhone = document.getElementById('logPhone');
/************************************************** */




/*************************************************** */
myForm.addEventListener('submit', (e) => {

    e.preventDefault()

    /******************username****************** */
    if (username.value === '' || username.value == null) {
        logUsername.textContent = `Name is required`;

    }else{
        logUsername.textContent = ` `;
    }
    /******************username****************** */

    /******************password****************** */

    if (password.value === '' || password.value == null) {
        logPassword.textContent = `password is required`;

    }else if (password.value.length <= 6) {
        logPassword.textContent = `Password must be longer than 6 characters`;
    
    }else if (password.value.length >= 20) {
        logPassword.textContent = `Password must be less than 20 characters'`;
    
    }else{
        logPassword.textContent = ` `;
    }
    /******************password****************** */

    /******************phone****************** */
    const phonetext = phone.value;

    if(isNaN(phonetext)){
        logPhone.textContent = `You must enter numbers only!`;

    }else if (phone.value === '' || phone.value == null) {
        logPhone.textContent = `phone is required`;

    }else{
        logPhone.textContent = ` `;
    }
    /******************phone******************** */

    /******************Email****************** */
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value === '' || email.value == null) {
        logEmail.textContent = `Email is required`;
    }

    if(email.value.match(mailformat)){
        logEmail.textContent = ` `;
        return true;

    }else{
        logEmail.textContent = `You have entered an invalid email address!`;
        return false;
    }
    /******************Email****************** */


})


/*************male********************** */

male.addEventListener("change", () => {
    
    var valid = false
    if (document.getElementById('male').checked) {
        var valid = true;
    }else{
        var valid = false
    }

    if(valid) {
        document.getElementById('hideradio').style.display="block";
    }else{
        document.getElementById('hideradio').style.display="none";
    }
})
/*************male********************** */


/*************select country******************* */
function selectFunction(s1 , s2){

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = " ";

    if(s1.value == "egypt"){
        var optionArray = ['cairo|Cairo','alexandria|Alexandria','giza|Giza','suez|Suez','tanta|Tanta','asyut|Asyut','fayoum|Fayoum']
    
    }else if(s1.value == "america"){
        var optionArray = ['new York|New York','los Angeles|Los Angeles','chicago|Chicago','houston|Houston','phoenix|Phoenix','philadelphia|Philadelphia','san Antonio|San Antonio']
    
    }else if(s1.value == "india"){
        var optionArray = ['mumbai|Mumbai','delhi|Delhi','bangalore|Bangalore','hyderabad|Hyderabad','ahmedabad|Ahmedabad']
        
    }else if(s1.value == "canada"){
        var optionArray = ['toronto|Toronto','quebec|Quebec','vancouver|Vancouver','calgary|Calgary','ottawa|Ottawa']
    
    }else if(s1.value == "turkey"){
        var optionArray = ['istanbul|Istanbul','antalya|Antalya','bursa|Bursa','sanliurfa|Sanliurfa','izmir|Izmir']
    
    }else if(s1.value == "german"){
        var optionArray = ['berlin|Berlin','hamburg|Hamburg','münchen|München','köln|Köln','frankfurt|Frankfurt']
    }


    for(var option in optionArray){
        var pair = optionArray[option].split('|')
        var newOption =document.createElement("option")
        
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        s2.options.add(newOption)

    }
}
/*************select country******************* */

