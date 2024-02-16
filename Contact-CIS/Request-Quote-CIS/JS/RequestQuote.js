
function handleSubmitContact(){
    // Prevent the default form submission behavior

    // Get form field values
    const firstName = document.getElementsByClassName('first').value;
    const lastName = document.getElementsByClassName('last').value;
    const email = document.getElementsByClassName('email').value;
    const phoneNumber = document.getElementsByClassName('number').value;
    const companyName = document.getElementsByClassName('company').value;
    const website = document.getElementsByClassName('website').value;
    const message = document.getElementsByClassName('message').value;

    // Get selected services
    const seo = document.getElementsByClassName('seo').checked;
    const webDesign = document.getElementsByClassName('webdesign').checked;
    const webHosting = document.getElementsByClassName('webhosting').checked;
    const maintenance = document.getElementsByClassName('maintainance').checked;

    // Log the values to the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Company/Organization:', companyName);
    console.log('Website:', website);
    console.log('Message:', message);
    console.log('Services:');
    console.log('  - Optimization (SEO):', seo);
    console.log('  - Web Design:', webDesign);
    console.log('  - Web Hosting:', webHosting);
    console.log('  - Maintenance:', maintenance);

    // Optional: Clear the form fields after submission
    // form.reset();
};
