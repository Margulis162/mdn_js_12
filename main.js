// creates a worker using a code from generate.js
const hardworker = new Worker("./generate.js");

document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector("quota").value;
    hardworker.postMessage({
        command:"generate",
        quota,
    });
});