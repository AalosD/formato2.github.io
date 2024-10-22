document.addEventListener("DOMContentLoaded", function () {
    // Inicializar la primera fase visible
    document.getElementById("phase1").style.display = "block";

    // Inicializar el control de imagen
    /*const siteMapInput = document.getElementById('site-map');
    const imgPreview = document.getElementById('preview');

    siteMapInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview.src = e.target.result;
                imgPreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });*/

    // Agregar eventos para los checkboxes de todas las fases
    let phases = 4; // Número total de fases
    for (let i = 1; i <= phases; i++) {
        let checkboxes = document.querySelectorAll(`#phase${i} .checklist input[type="checkbox"]`);
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener("change", function () {
                validatePhase(i);
            });
        });
    }
});

function validatePhase(phaseNumber) {
    let checkboxes = document.querySelectorAll(`#phase${phaseNumber} .checklist input[type="checkbox"]`);
    let allChecked = true;

    checkboxes.forEach(function (checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });

    let completeButton = document.getElementById(`complete-phase${phaseNumber}`);
    if (allChecked) {
        completeButton.disabled = false;
        completeButton.classList.add("active");
    } else {
        completeButton.disabled = true;
        completeButton.classList.remove("active");
    }
}


function nextPhase(currentPhase) {
    let currentDiv = document.getElementById(`phase${currentPhase}`);
    let nextDiv = document.getElementById(`phase${currentPhase + 1}`);
    
    if (nextDiv) {
        currentDiv.style.display = "none";
        nextDiv.style.display = "block";
        updateProgressBar(currentPhase + 1);
    } else {
        // Mostrar pantalla de finalización
        currentDiv.style.display = "none";
        document.getElementById("completion").style.display = "block";
        updateProgressBar(currentPhase + 1);
    }
}

function updateProgressBar(phase) {
    const progress = document.getElementById("progress");
    const totalPhases = 5;
    const percentage = (phase / totalPhases) * 100;
    progress.style.width = percentage + "%";
}