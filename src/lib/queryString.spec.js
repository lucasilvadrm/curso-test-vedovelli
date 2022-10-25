const { queryString, parse } = require('./queryString');

describe('Name of the group', () => {
  it('deve validar uma queryString vinda de um objeto ', () => {
    const obj = {
      name: 'Lucas',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Lucas&profession=developer');
  });

  it('should ', () => {
    const obj = {
      name: 'Lucas',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Lucas&abilities=JS,TDD');
  });

  it('deve retornar erro quando houver uma quebra de contrato da função', () => {
    const obj = {
      name: 'Lucas',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string para objeto', () => {
  it('deve converter a query string para objeto', () => {
    const qs = 'name=Lucas&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
      profession: 'developer',
    });
  });

  it('deve converter a query string para objeto se houver apenas uma chave-valor', () => {
    const qs = 'name=Lucas';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
    });
  });

  it('deve converter a query string', () => {
    const qs = 'name=Lucas&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
      abilities: ['JS', 'TDD'],
    });
  });
});
