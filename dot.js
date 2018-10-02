const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//record any changes to the handleUpdate()
inputs.forEach(input => input.addEventListener('change', handleUpdate));
/*the changes are going to be stored in the value property*/

//record any mouse(hover) to the handleUpdate(): this allows us to see the chnage in real time
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));