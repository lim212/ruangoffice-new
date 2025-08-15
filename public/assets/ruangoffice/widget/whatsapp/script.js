const isOpenPopup = true;
const agentNumbers = ["62811113666", "6287777714441", "6287810000067"]; // Nomor agen sesuai urutan

// Fungsi untuk toggle tampil atau tidaknya daftar agen
function toggleAgentList() {
    if (!isOpenPopup) {
        redirectToAgent(agentNumbers[0]);
        return;
    }

    var agentList = document.getElementById("agent-list");
    var icon = document.getElementById("icon");
    var whatsappIcon = document.getElementById("whatsapp-icon");

    const iconObject = JSON.parse(icon.dataset.src);

    // Periksa apakah daftar agen sedang tampil
    if (agentList.style.display === "none" || agentList.style.display === "") {
        agentList.style.display = "block"; // Tampilkan daftar agen
        setTimeout(function () {
            agentList.style.transform = "scaleY(1)";
        }, 10);

        // Ubah ikon ke "X" dengan animasi berputar
        whatsappIcon.classList.add("rotate");

        icon.src = iconObject.show; // Ubah ke ikon X
    } else {
        agentList.style.transform = "scaleY(0)"; // Sembunyikan daftar agen dengan animasi
        setTimeout(function () {
            agentList.style.display = "none";
        }, 300);

        // Kembalikan ikon ke WhatsApp
        whatsappIcon.classList.remove("rotate");
        icon.src = iconObject.hide; // Kembalikan ikon WhatsApp
    }
}

// Fungsi untuk redirect ke WhatsApp berdasarkan nomor agen yang dipilih
function redirectToAgent(agentNumber) {
    var url = "https://wa.me/" + agentNumber;
    window.open(url, "_blank");
}

// Tambahkan event listener pada elemen daftar agen
function initializeAgentList() {
    const agentListItems = document.querySelectorAll("#agent-list li");

    agentListItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            redirectToAgent(agentNumbers[index]); // Redirect ke WhatsApp sesuai nomor
        });
    });
}

// Inisialisasi event listener setelah DOM dimuat
document.addEventListener("DOMContentLoaded", initializeAgentList);
