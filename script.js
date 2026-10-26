```javascript
const form = document.getElementById("bookingForm");
const hasil = document.getElementById("hasil");
const tanggal = document.getElementById("tanggal");

// Membatasi tanggal check-in mulai hari ini
const hariIni = new Date();
tanggal.min = new Date(
    hariIni.getTime() - hariIni.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const malam = Number(document.getElementById("malam").value);
    const harga = 250000;
    const total = harga * malam;

    const formatRupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    });

    hasil.style.display = "block";

    hasil.innerHTML = `
        <h3>Ringkasan Reservasi</h3>
        <p>Nama: ${nama.replace(/[&<>"']/g, "")}</p>
        <p>Check-in: ${tanggal.value}</p>
        <p>Lama menginap: ${malam} malam</p>
        <p>Harga per malam: ${formatRupiah.format(harga)}</p>
        <h3>Total: ${formatRupiah.format(total)}</h3>
        <p>Ini simulasi reservasi, belum menjadi pemesanan resmi.</p>
    `;
});
```