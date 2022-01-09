const Engineer = require('../lib/Engineer');

test('Tests for engineer object', () => {
    const engineer = new Engineer("Nick");

    expect(engineer.getName()).toBe("Nick");
});

test('Tests for engineer github', () => {
    const engineer = new Engineer("Nick", 1, "nick.kepers.coder@gmail.com", "nkepers");

    expect(engineer.getGithub()).toBe("nkepers");
});

test('Tests for engineer role', () => {
    const engineer = new Engineer("Nick", 2, "nick.kepers.coder1@gmail.com", "nkepers1");

    expect(engineer.getRole()).toBe("Engineer");
});