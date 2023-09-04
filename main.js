// creates a worker using a code from generate.js
const hardworker = new Worker("./generate.js");

document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector("#quota").value;
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