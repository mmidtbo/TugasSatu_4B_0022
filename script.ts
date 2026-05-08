const inputElement = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const btnHapus = document.getElementById("btnHapusTodo");
const btnEdit = document.getElementById("btnEditTodo");
const btnEditStatus = document.getElementById("btnEditStatusTodo");
const daftarTugas = document.getElementById("listTugas");
const emptyMessage = document.getElementById("emptyMessage");

// global (helper)
function updateEmptyMessage() {
  if (!daftarTugas || !emptyMessage) {
    return;
  }
  const isEmpty = daftarTugas.children.length === 0;
  console.log(
    "jumlah tugas:",
    daftarTugas.children.length,
    "| isEmpty:",
    isEmpty,
  );
  emptyMessage.style.display = isEmpty ? "block" : "none";
}

function renumberTasks() {
  if (!daftarTugas) {
    return;
  }
  for (let i = 0; i < daftarTugas.children.length; i++) {
    const li = daftarTugas.children[i];
    const numSpan = li.querySelector(".task-number");
    if (numSpan) {
      numSpan.textContent = i + 1;
    }
  }
}
// global (helper)

if (btnTambah) {
  btnTambah.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      !inputElement ||
      inputElement.value.trim() === "" ||
      !inputDate ||
      inputDate.value === ""
    ) {
      alert("Input tidak boleh kosong");
      return;
    }

    const newList = document.createElement("li");
    const number = document.createElement("span");
    number.className = "task-number";

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = inputElement.value.trim();

    const date = document.createElement("span");
    date.className = "task-date";
    date.textContent = inputDate.value;

    const status = document.createElement("span");
    status.className = "status-badge progress";
    status.textContent = "progress";

    const wrap = document.createElement("div");
    wrap.className = "task-meta";
    wrap.append(status, date);

    newList.append(number, text, wrap);

    if (!daftarTugas) {
      alert("daftar tugas tidak ada");
      inputElement.value = "";
      return;
    }

    number.textContent = daftarTugas.children.length + 1;
    daftarTugas.appendChild(newList);
    inputElement.value = "";
    // updateEmptyMessage();
  });
}

if (btnHapus) {
  btnHapus.addEventListener("click", function (e) {
    e.preventDefault();

    if (!daftarTugas?.children.length) {
      alert("daftar tugas kosong");
      return;
    }

    const urutan = prompt("masukkan nomor tugas yang ingin dihapus");

    if (!urutan) {
      alert("input kosong");
      return;
    }

    const node = daftarTugas.children[urutan - 1];
    if (!node) {
      alert("tugas tidak ditemukan");
      return;
    }

    alert("tugas ke " + urutan + " berhasil dihapus!");
    daftarTugas.removeChild(node);
    renumberTasks();
    updateEmptyMessage();
  });
}

if (btnEdit) {
  btnEdit.addEventListener("click", function (e) {
    e.preventDefault();

    if (!daftarTugas) {
      return;
    }

    if (!daftarTugas.children.length) {
      alert("daftar tugas kosong");
      return;
    }

    const urutan = prompt("masukkan nomor tugas yang ingin diedit");

    if (!urutan) {
      alert("masukkan nomor");
      return;
    }

    const node = daftarTugas.children[urutan - 1];
    if (!node) {
      alert("tugas tidak ditemukan");
      return;
    }

    const textSpan = node.querySelector(".task-text");
    const noteBaru = prompt("masukkan tugas baru", textSpan?.textContent || "");
    if (!noteBaru || !noteBaru.trim()) {
      alert("tugas tidak boleh kosong");
      return;
    }

    if (textSpan) {
      textSpan.textContent = noteBaru.trim();
    }
  });
}

if (btnEditStatus) {
  btnEditStatus.addEventListener("click", function (e) {
    e.preventDefault();

    if (!daftarTugas) {
      return;
    }

    if (!daftarTugas.children.length) {
      alert("daftar tugas kosong");
      return;
    }

    const urutan = prompt("masukkan nomor tugas yang ingin diubah statusnya");

    if (!urutan) {
      alert("urutan tidak boleh kosong");
      return;
    }

    const node = daftarTugas.children[urutan - 1];
    if (!node) {
      alert("tugas tidak ditemukan");
      return;
    }

    const statusSpan = node.querySelector(".status-badge");
    if (!statusSpan) return;

    if (statusSpan.textContent === "progress") {
      statusSpan.textContent = "done";
      statusSpan.className = "status-badge done";
    } else {
      statusSpan.textContent = "progress";
      statusSpan.className = "status-badge progress";
    }
  });
}

updateEmptyMessage();
