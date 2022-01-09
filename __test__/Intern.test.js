const Intern = require('../lib/Intern');

test('Tests for intern object', () => {
    const intern = new Intern("Nick");

    expect(intern.getName()).toBe("Nick");
});

test('Tests for intern school', () => {
    const intern = new Intern("Nick", 1, "nick.kepers.coder@gmail.com", "school");

    expect(intern.getSchool()).toBe("school");
});

test('Tests for intern role', () => {
    const intern = new Intern("Nick", 2, "nick.kepers.coder1@gmail.com", "school");

    expect(intern.getRole()).toBe("Intern");
});