const wire480Input = document.getElementById('wire480');
    const imgPreview2 = document.getElementById('preview2');

    wire480Input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview2.src = e.target.result;
                imgPreview2.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });