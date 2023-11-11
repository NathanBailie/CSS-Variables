"use-strict"

let inputs = document.querySelectorAll('.inputWrapper input');

function onUpdateImage() {
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', onUpdateImage));
inputs.forEach(input => input.addEventListener('mousemove', onUpdateImage));