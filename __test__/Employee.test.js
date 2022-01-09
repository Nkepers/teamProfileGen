const Employee = require('../lib/Employee');

test('Tests for object', () => {
    const employee = new Employee('Nick')
    expect(employee.getName()).toBe('Nick')
})

test('Tests for employee id', () => {
    const employee = new Employee("Nick", 1, "nick.kepers.coder@gmail.com");

    expect(employee.getId()).toBe(1);
});

test('Tests for employee email', () => {
    const employee = new Employee("Nick", 2, "nick.kepers.coder@gmail.com");

    expect(employee.getEmail()).toBe("nick.kepers.coder@gmail.com");
});

test('Tests for employee role', () => {
    const employee = new Employee("Nick", 3, "nick.kepers.coder@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});