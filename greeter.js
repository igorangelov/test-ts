function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Igor", lastName: "ANGELOV" };
document.body.textContent = greeter(user);
