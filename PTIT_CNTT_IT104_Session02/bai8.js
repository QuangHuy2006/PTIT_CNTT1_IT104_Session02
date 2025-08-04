const displayUserInfo = ({ info }) => {
  let { name, age, location, contact, job } = info;
  let { city: locationCity, country: locationCountry } = location;
  if (contact) {
    let contactEmail = "unknown",
      contactPhone = "unknown";
    ({ email: contactEmail, phone: contactPhone } = contact);
  }

  if (job) {
    let jobTitle = "unknown",
      jobCompany = "unknown";
    ({ title: jobTitle, company: jobCompany } = job);
  }
  return `${name} is ${age} years old, lives in ${locationCity}, ${locationCountry}, works as ${jobTitle} at ${jobCompany}, and can be contacted via ${contactPhone} or ${contactEmail}.`;
};
console.log(
  displayUserInfo({
    info: {
      name: "Anna",
      age: 30,
      location: { city: "Da Nang", country: "Vietnam" },
    },
  })
);
