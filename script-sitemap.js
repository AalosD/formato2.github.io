const siteMapInput = document.getElementById('site-map');
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
    });