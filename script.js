// Nama UMKM (konstanta)
alert('Selamat datang di Website Profil Ikan Bakar Pranoto!');

const namaUMKM = 'Ikan Bakar Pranoto';
console.log('Nama UMKM:', namaUMKM);

// --- TUGAS FUNGSI (Pertemuan 9) ---
// Fungsi hitungTotal(harga, jumlah)
function hitungTotal(harga, jumlah) {
    // Memastikan input adalah angka
    const h = parseInt(harga);
    const j = parseInt(jumlah);

    if (isNaN(h) || isNaN(j) || h < 0 || j < 0) {
        return 0; // Mengembalikan 0 jika input tidak valid
    }
    return h * j;
}

// Event Listener untuk Form Belanja
document.addEventListener('DOMContentLoaded', () => {
    const formBelanja = document.getElementById('hitungBelanjaForm');
    if (formBelanja) {
        formBelanja.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form reload halaman

            const harga = document.getElementById('harga-produk').value;
            const jumlah = document.getElementById('jumlah-beli').value;
            const total = hitungTotal(harga, jumlah);

            const hasilTotalBelanja = document.getElementById('hasilTotalBelanja');
            hasilTotalBelanja.textContent = `Rp ${total.toLocaleString('id-ID')}`;
            alert(`Total belanja Anda: Rp ${total.toLocaleString('id-ID')}`);
        });
    }

    // --- TUGAS PERCABANGAN (Pertemuan 9) ---
    const inputUsia = document.getElementById('input-usia');
    const statusKategori = document.getElementById('status-kategori');

    if (inputUsia && statusKategori) {
        // Menggunakan event 'input' agar status berubah saat pengguna mengetik
        inputUsia.addEventListener('input', function() {
            const usia = parseInt(this.value);
            let kategori = "";

            // Struktur Percabangan (if-else if-else)
            if (isNaN(usia) || usia < 1) {
                kategori = "Masukkan usia yang valid";
            } else if (usia < 13) {
                kategori = "Anak-anak";
            } else if (usia >= 13 && usia <= 17) {
                kategori = "Remaja";
            } else if (usia >= 18 && usia <= 60) {
                kategori = "Dewasa";
            } else { // usia > 60
                kategori = "Lansia";
            }

            statusKategori.textContent = kategori;
        });
    }

    // --- TUGAS PERULANGAN (Pertemuan 9) ---
    const testimoniArray = [
        { nama: "Budi", pesan: "Ikan Kakap Bakarnya segar sekali, bumbunya meresap sempurna!", rating: 5 },
        { nama: "Rina", pesan: "Pesan Ikan Gurame, pelayanan cepat. Rasa bumbu kecapnya mantap.", rating: 4 },
        { nama: "Ahmad", pesan: "Murah dan enak, porsi lumayan besar. Reccomended!", rating: 5 },
        { nama: "Sinta", pesan: "Ikan Kerapu bakarnya harus kalian coba, tidak amis sama sekali.", rating: 5 },
        { nama: "Joko", pesan: "Cocok untuk makan malam keluarga. Pasti beli lagi.", rating: 4 }
    ];

    const testimoniListDiv = document.getElementById('testimoni-list');

    if (testimoniListDiv) {
        testimoniListDiv.innerHTML = ''; // Kosongkan placeholder

        // Menggunakan method forEach() untuk perulangan
        testimoniArray.forEach((item) => {
            // Membuat elemen div untuk setiap testimoni
            const cardDiv = document.createElement('div');
            cardDiv.className = 'testimoni-card'; // Kelas CSS baru

            // Isi konten card
            cardDiv.innerHTML = `
                <p>"${item.pesan}"</p>
                <small>— **${item.nama}** (${'⭐'.repeat(item.rating)})</small>
            `;

            // Menambahkan card ke dalam div testimoni-list
            testimoniListDiv.appendChild(cardDiv);
        });
    }

});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formKontak");
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const noHP = document.getElementById("noHP");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");
    const clearBtn = document.getElementById("clearBtn");

    // Validasi form
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        errorMsg.textContent = "";
        successMsg.textContent = "";

        // Validasi nomor HP (hanya angka)
        if (!/^[0-9]+$/.test(noHP.value)) {
            errorMsg.textContent = "Nomor HP harus berisi angka saja.";
            noHP.focus();
            return;
        }

        if (
            nama.value === "" ||
            email.value === "" ||
            noHP.value === "" ||
            pesan.value === ""
        ) {
            errorMsg.textContent = "Semua field harus diisi.";
        } else {
            // Tampilkan pesan sukses
            successMsg.textContent =
                "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.";

            // Reset form
            form.reset();
        }
    });

    // Tombol clear data
    clearBtn.addEventListener("click", function() {
        form.reset();
        errorMsg.textContent = "";
        successMsg.textContent = "";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const produkInput = document.getElementById("produkInput");
    const tambahBtn = document.getElementById("tambahBtn");
    const daftarProduk = document.getElementById("daftarProduk");
    const previewProduk = document.getElementById("previewProduk");
    const temaSelect = document.getElementById("temaSelect");

    //Event 1: Tambah Produk ke daftar (click)
    tambahBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const namaProduk = produkInput.value.trim();
        if (namaProduk !== "") {
            const li = document.createElement("li");
            li.textContent = namaProduk;

            //Tambahkan Event Hover (Mouseover & mouseout)
            li.addEventListener(
                "mouseover",
                () => (li.style.backgroundColor = "#FF7F50")
            );
            li.addEventListener(
                "mouseout",
                () => (li.style.backgroundColor = "#8A2BE2")
            );

            //Tambahkan Event Hapus (dblclick)
            li.addEventListener("dblclick", () => {
                if (confirm("Yakin ingin menghapus produk ini?")) {
                    li.remove();
                }
            });

            daftarProduk.appendChild(li);
            produkInput.value = "";
            previewProduk.textContent = "";
        }
    });

    //Event 2: Preview input secara langsung (keyup)
    produkInput.addEventListener("keyup", function() {
        previewProduk.textContent = produkInput.value;
    });

    //Event 3: Ubah tema background (change)
    temaSelect.addEventListener("change", function() {
        document.body.style.backgroundColor = temaSelect.value;
    });
});


const form = document.getElementById("formKontak");

form.addEventListener("submit", function(event) {
    let valid = true;

    //Nama harus diisi
    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");
    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }

    //Email harus valid dan domain @gmail.com
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPattern = /^[^ ]+@gmail\.com$/i;
    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Email harus @gmail.com dan format benar.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    //Kategori harus dipilih
    const kategori = document.getElementById("kategori");
    const errorKategori = document.getElementById("errorKategori");
    if (kategori.value === "") {
        errorKategori.textContent = "Pilih salah satu kategori.";
        valid = false;
    } else {
        errorKategori.textContent = "";
    }

    //Pesan minimal 10 karakter 
    const pesan = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");
    if (pesan.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
        valid = false;
    } else {
        errorPesan.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); //Gagalkan submit
    } else {
        alert("Pesan berhasil dikirim!")
    }
});

document.getElementById("nama").addEventListener("blur", function() {
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
    } else {
        errorNama.textContent = "";
    }
});

document.getElementById("pesan").addEventListener("input", function() {
    const errorPesan = document.getElementById("errorPesan");
    if (this.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
    } else {
        errorPesan.textContent = "";
    }
});

document.getElementById("langganan").addEventListener("change", function() {
    if (this.checed) {
        alert("Terima kasih telah berlangganan newsletter!");
    }
});