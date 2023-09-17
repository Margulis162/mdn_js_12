// creates a worker using a code from generate.js
const hardworker = new Worker("./generate.js");

document.querySelector('#generate').addEventListener('click', () => { 
    /*querySelector is similar to getElementById in this case, but more versatile and can be used with different css selectors*/
    // that gets number of primes to be generated from the input
    const quota = document.querySelector("#quota").value;
    // sends generate command to the worker and the number of primes to be generated
    hardworker.postMessage({
        command:"generate",
        quota,
    });
});

hardworker.addEventListener("message", (message) => {
    document.querySelector(
        "#output" 
    ).textContent = `Finished generating ${message.data} primes!`;
})

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value = 
    'Try typing in here while primes are being generated';
    document.location.reload();
})