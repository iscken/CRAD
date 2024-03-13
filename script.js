const Onepage = document.querySelector("#pageOne");
const admin = document.querySelector("#admin");
const edit = document.querySelector("#edit");
const deleteSec = document.querySelector("#delete");
const input = document.querySelectorAll("input");
const imgInput = document.querySelector(".img");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const enrollInput = document.querySelector(".enroll");
const dateInput = document.querySelector(".date");
const addBtn = document.querySelector(".addBtn");
const listBox = document.querySelector(".list-box");
const getBtn = document.querySelector(".getBtn");
const imgAdd = document.querySelector(".img1");
const nameAdd = document.querySelector(".name1");
const emailAdd = document.querySelector(".email1");
const phoneAdd = document.querySelector(".phone1");
const enrollAdd = document.querySelector(".enroll1");
const dateAdd = document.querySelector(".date1");
const saveBtn = document.querySelector(".saveBtn");

getCard();

addBtn.addEventListener("click", () => {
  admin.style.display = "none";
  Onepage.style.display = "block";
  addstudent();
});

function addstudent() {
  let Obj = {
    img: imgInput.value,
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    enroll: enrollInput.value,
    date: dateInput.value,
  };
  if (
    imgInput.value !== "" &&
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    phoneInput.value !== "" &&
    enrollInput.value !== "" &&
    dateInput.value !== ""
  ) {
    const storage = JSON.parse(localStorage.getItem("student")) || [];
    storage.push(Obj);
    localStorage.setItem("student", JSON.stringify(storage));
    for (let i of input) {
      i.value = "";
    }
    getCard();
  }
}
getBtn.addEventListener("click", () => {
  admin.style.display = "block";
  Onepage.style.display = "none";
});
function getCard() {
  const storage = JSON.parse(localStorage.getItem("student")) || [];
  storage.forEach((el, ind) => {
    const box = document.createElement("div");
    const imgCard = document.createElement("img");
    const nameCard = document.createElement("h3");
    const emailCard = document.createElement("h3");
    const phoneCard = document.createElement("h3");
    const enrollCard = document.createElement("h3");
    const dateCard = document.createElement("h3");
    const icon = document.createElement("div");

    const icon1 = document.createElement("button");
    const icon2 = document.createElement("button");

    box.classList = "box";
    icon.classList = "icon";

    imgCard.src = el.img;
    nameCard.innerText = el.name;
    emailCard.innerText = el.email;
    phoneCard.innerText = el.phone;
    enrollCard.innerText = el.enroll;
    dateCard.innerText = el.date;
    icon1.innerText = "🖋";
    icon2.innerText = "❌";
    listBox.append(box);
    box.append(imgCard);
    box.(nameCard);
    box.append(emailCard);
    box.append(phoneCard);
    box.append(enrollCard);
    box.append(dateCard);
    box.append(icon);
    icon.append(icon1);
    icon.append(icon2);

    icon1.addEventListener("click", () => {
      Onepage.style.display = "none";
      edit.style.display = "block";
      getEdit(ind);
    });
});
}

function getEdit(index) {
  const storage = JSON.parse(localStorage.getItem("student")) || [];
  let oneProduct = storage.splice(index, 1)[0];

  imgAdd.value = oneProduct.img;
  nameAdd.value = oneProduct.name;
  emailAdd.value = oneProduct.email;
  phoneAdd.value = oneProduct.phone;
  enrollAdd.value = oneProduct.enroll;
  dateAdd.value = oneProduct.date;

  imgAdd.setAttribute("id", index);
  nameAdd.setAttribute("id", index);
  emailAdd.setAttribute("id", index);
  phoneAdd.setAttribute("id", index);
  enrollAdd.setAttribute("id", index);
  dateAdd.setAttribute("id", index);
}

saveBtn.addEventListener("click", () => saveData());

function saveData() {
  const imgId = imgAdd.id;
  const nameId = nameAdd.id;
  const emailId = emailAdd.id;
  const phoneId = phoneAdd.id;
  const enrollId = enrollAdd.id;
  const dateId = dateAdd.id;

  let newObj = {
    img: imgAdd.value,
    name: nameAdd.value,
    email: emailAdd.value,
    phone: phoneAdd.value,
    enroll: enrollAdd.value,
    date: dateAdd.value,
  };

  const storage1 = JSON.parse(localStorage.getItem("student")) || [];
  storage1.splice(imgId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage1));

  const storage2 = JSON.parse(localStorage.getItem("student")) || [];
  storage2.splice(nameId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage2));

  const storage3 = JSON.parse(localStorage.getItem("student")) || [];
  storage3.splice(emailId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage3));

  const storage4 = JSON.parse(localStorage.getItem("student")) || [];
  storage4.splice(phoneId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage4));

  const storage5 = JSON.parse(localStorage.getItem("student")) || [];
  storage5.splice(enrollId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage5));

  const storage6 = JSON.parse(localStorage.getItem("student")) || [];
  storage6.splice(dateId, 1, newObj);
  localStorage.setItem("student", JSON.stringify(storage6));

  for (let i of input) {
    i.value = "";
  }
}
