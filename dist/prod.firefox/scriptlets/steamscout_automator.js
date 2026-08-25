import AppId from "@Core/GameId/AppId";

// Check if the URL has our special hash
const hash = window.location.hash;

if (hash.startsWith('#auto-appid-')) {
    // Extract the numbers from the hash
    const appId = hash.replace('#auto-appid-', '');
    
    // Poll the DOM until the page elements load
    const checkExist = setInterval(() => {
        const input = document.getElementById('appid-input');
        const button = document.getElementById('fetchButton');

        if (input && button) {
            clearInterval(checkExist); // Stop polling
            
            // Fill out the form and click
            input.value = appId;
            button.click();
            
            // Optional: Clean up the URL so it looks normal to the user
            // and won't re-trigger if they manually refresh the page.
            history.replaceState(null, "", window.location.pathname);
        }
        else if(input){
            clearInterval(checkExist); // Stop polling

            // Fill out form
            input.value = appId;

            // Optional: Clean up the URL so it looks normal to the user
            // and won't re-trigger if they manually refresh the page.
            history.replaceState(null, "", window.location.pathname);
        }
    }, 100);

    // Failsafe: Stop checking after 10 seconds
    setTimeout(() => clearInterval(checkExist), 10000);
}