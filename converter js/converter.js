function calculateButton() {
    const inputField = document.querySelector('input');
    const resultParagraph = document.getElementById('result');
    const inches = inputField.value;

    if (isNaN(inches)) {
        resultParagraph.innerText = "Please enter a valid number";
    } else {
        const meter = inches * 0.0254;
        resultParagraph.innerText = `${inches} inches is equal to ${meter} meters.`;
    }
}
