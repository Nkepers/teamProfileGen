
const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager("Nick");

    expect(manager.getName()).toBe("Nick");
});

test('creates Manager role', () => {
    const manager = new Manager("Nick", 2, "nick.kepers.coder@gmail.com", "nkepers");

    expect(manager.getRole()).toBe("Manager");
});