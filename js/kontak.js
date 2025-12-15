document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formKontak');
    const alertEl = document.getElementById('alertSuccess');
    const alertContent = document.getElementById('alertContent');
    const alertTime = document.getElementById('alertTime');
    const waktuKirim = document.getElementById('waktuKirim');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const values = {
            nama: formData.get('nama') || '',
            gender: formData.get('gender') || '',
            hp: formData.get('hp') || '',
            email: formData.get('email') || '',
            kategori: formData.get('kategori') || '',
            pesan: formData.get('pesan') || '',
            langganan: formData.has('langganan'),
        };

        const fileInput = document.getElementById('file');
        const fileName = (fileInput && fileInput.files && fileInput.files.length) ? fileInput.files[0].name : 'Tidak ada';

        const now = new Date();
        const waktuStr = now.toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const message = [
            'Nama: ' + values.nama,
            'Jenis Kelamin: ' + values.gender,
            'HP: ' + values.hp,
            'Email: ' + values.email,
            'Kategori: ' + values.kategori,
            'Langganan: ' + (values.langganan ? 'Ya' : 'Tidak'),
            'File: ' + fileName,
            'Pesan: ' + values.pesan
        ].join('\n');

        // Tampilkan alert browser berisi data dan waktu
        alert(message + '\n\nBerhasil dikirim pada: ' + waktuStr);

        // Tampilkan di area alert bootstrap pada halaman
        if (alertContent) alertContent.textContent = message;
        if (alertTime) alertTime.textContent = 'Dikirim pada: ' + waktuStr;
        if (alertEl) {
            alertEl.classList.remove('d-none');
            alertEl.classList.add('show');
        }

        if (waktuKirim) waktuKirim.textContent = 'Waktu kirim: ' + waktuStr;

        form.reset();
    });
});