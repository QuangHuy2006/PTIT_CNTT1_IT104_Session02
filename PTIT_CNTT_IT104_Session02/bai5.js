let phoneBooks = [];
let addContact = (name, phone, email) => {
  name = prompt("Nhập vào tên liên hệ: ");
  phone = prompt("Nhập vào số điện thoại liên hệ: ");
  email = prompt("Nhập vào email liên hệ: ");
  let newContact = {
    name: name,
    phone: phone,
    email: email,
  };
  return newContact;
};
let displayContact = (arr) => {
  arr.forEach((element) => {
    console.log("name: ", element.id);
    console.log("phone: ", element.phone);
    console.log("email: ", element.email);
  });
};
let choice;
do {
  choice = Number(prompt("1. add contact\n" + "2. show contact"));
  switch (choice) {
    case 1:
      phoneBooks.push(addContact("", "", ""));
      break;
    case 2:
      displayContact(phoneBooks);
      break;
  }
} while (choice != 0);
