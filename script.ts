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
    const text = document.createElement("p");
    const date = document.createElement("p");
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

    newList.append(text, date);

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

    if (inputElement.value === "" || !inputElement) {
      alert("input kosong");
      return;
    }

    const node = daftarTugas?.children[inputElement.value - 1];
    console.log(node);

    if (node === undefined) {
      alert("node undefined");
      inputElement.value = "";
      return;
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
  });
}

// btnEdit.addEventListener("click", function () {});
