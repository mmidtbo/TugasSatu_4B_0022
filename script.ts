const inputElement = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const btnHapus = document.getElementById("btnHapusTodo");
const btnEdit = document.getElementById("btnEditTodo");
const daftarTugas = document.getElementById("listTugas");

if (btnTambah) {
  btnTambah.addEventListener("click", function (e) {
    e.preventDefault();

    const newList = document.createElement("li");
    const text = document.createElement("span");
    const date = document.createElement("small");
    const status = document.createElement("span");
    const wrap = document.createElement("div");

    if (
      !inputElement ||
      inputElement.value == "" ||
      !inputDate ||
      inputDate.value == ""
    ) {
      alert("Input tidak boleh kosong");
      return;
    }

    date.innerHTML = inputDate.value;
    text.innerHTML = inputElement.value;
    status.innerHTML = "progress";

    wrap.append(status, date);
    newList.append(text, wrap);

    if (!daftarTugas) {
      alert("daftar tugas tidak ada");
      return;
    }

    // console.log(typeof daftarTugas.children.length);
    // console.log(daftarTugas.children.length);
    // console.log(daftarTugas.children[0]);

    daftarTugas.appendChild(newList);

    inputElement.value = "";
  });
}

if (btnHapus) {
  btnHapus.addEventListener("click", function (e) {
    e.preventDefault();

    if (!inputElement || inputElement.value === "") {
      alert(
        "input kosong, tentukan node mana yang ingin di hapus (format array+1)",
      );
      return;
    }

    const node = daftarTugas?.children[inputElement.value - 1];
    console.log(node);

    if (node === undefined) {
      alert("node undefined");
      inputElement.value = "";
      return;
    }

    if (inputElement) {
      alert("note ke " + inputElement.value + " berhasil di hapus!");
    }

    if (!daftarTugas?.children.length) {
      alert("daftar tugas kosong");
      inputElement.value = "";
      return;
    }

    daftarTugas.removeChild(node);

    inputElement.value = "";
  });
}

if (btnEdit) {
  btnEdit.addEventListener("click", function (e) {
    e.preventDefault();
    if (!daftarTugas) {
      return;
    }
    if (!inputElement || !inputElement.value) {
      return;
    }

    alert("masukan note yang ingin di edit !!");
    const urutan = inputElement.value;
    const node = daftarTugas.children[urutan - 1];

    if (!urutan) {
      return;
    }

    alert("masukan note anda !!");
    const note = inputElement.value;
    node;
  });
}

// btnEdit.addEventListener("click", function () {});
