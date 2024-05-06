// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let myAP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

// ! function for handling click on Arcane Scepter attack button
// * Should account for AP costs and HP decreases and update state variable accordingly
// ? Ensure neither AP or HP values are negative, set to 0 if so
// ? call render function at end to reflect state changes




// ! function for handling click on Entangle attack button
// * Should account for AP costs and HP decreases and update state variable accordingly
// ? Ensure neither AP or HP values are negative, set to 0 if so
// ? call render function at end to reflect state changes




// ! function for handling click on Dragon Blade attack button
// * Should account for AP costs and HP decreases and update state variable accordingly
// ? Ensure neither AP or HP values are negative, set to 0 if so
// ? call render function at end to reflect state changes




// ! function for handling click on Star Fire attack button
// * Should account for AP costs and HP decreases and update state variable accordingly
// ? Ensure neither AP or HP values are negative, set to 0 if so
// ? call render function at end to reflect state changes



// ! Function to handle rendering state changes to the DOM
// * Update AP & HP values rendered on the bars on top
// ? If fungusHP = 0 change class on fungus from 'walk' to 'dead'
// ? If myAP = 0 change class on fungus from 'walk' to 'jump' and attack buttons 'disabled' class