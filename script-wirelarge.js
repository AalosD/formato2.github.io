const wirelargeInput = document.getElementById('wirelarge');
    const imgPreview4 = document.getElementById('preview4');

    wirelargeInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview4.src = e.target.result;
                imgPreview4.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });