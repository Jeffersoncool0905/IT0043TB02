function setFlexDirection(direction) {
    document.getElementById('flexboxContainer').style.flexDirection = direction;
}

function setJustifyContent(justify) {
    document.getElementById('flexboxContainer').style.justifyContent = justify;
}

function setAlignItems(align) {
    document.getElementById('flexboxContainer').style.alignItems = align;
}

function setGap() {
    const gapValue = document.getElementById('gap').value;
    document.getElementById('flexboxContainer').style.gap = gapValue + 'px';
}

function resetFlexbox() {
    const flexboxContainer = document.getElementById('flexboxContainer');
    flexboxContainer.style.gap = '0px';
    flexboxContainer.style.flexDirection = 'row';
    flexboxContainer.style.justifyContent = 'flex-start';
    flexboxContainer.style.alignItems = 'flex-start';
}

function setFlexGrow(boxNumber) {
    const input = document.querySelector(`input[data-box="${boxNumber}"]`);
    const box = document.getElementById(`box${boxNumber}`);
    box.style.flexGrow = input.value;
}

function resetFlexGrow() {
    document.querySelectorAll('.flexGrow').forEach(input => {
        input.value = '0'; // Reset the input value
        const boxNumber = input.dataset.box;
        const box = document.getElementById(`box${boxNumber}`);
        box.style.flexGrow = '0';
    });
}

function growAllBoxes() {
    document.querySelectorAll('.flexGrow').forEach(input => {
        const boxNumber = input.dataset.box;
        const box = document.getElementById(`box${boxNumber}`);
        box.style.flexGrow = input.value;
    });
}
