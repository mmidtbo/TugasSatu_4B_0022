const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const btnHapus = document.getElementById("btnHapusData");
const btnEdit = document.getElementById("btnEditData");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputValue.value == "") {
    alert("Input tidak boleh kosong");
    return;
  }

  const newList = document.createElement("li");
  const par = document.createElement("p");
  par.innerHTML = inputValue.value;

  newList.appendChild(par);
  daftarTugas.appendChild(newList);

  inputValue.value = "";
});

btnHapus.addEventListener("click", function () {
  e.preventDefault();

  if (btnHapus == "null") {
    alert("hapus null");
  }

  daftarTugas.remove();
});

btnEdit.addEventListener("click", function () {});
