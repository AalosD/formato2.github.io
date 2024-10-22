const wire768Input = document.getElementById('wire768');
    const imgPreview3 = document.getElementById('preview3');

    wire768Input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview3.src = e.target.result;
                imgPreview3.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });