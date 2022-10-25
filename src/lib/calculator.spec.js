const { sum } = require('./calculator');

it('deve somar 2 + 2 e retornar 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('deve somar mesmo quando os números passados no parâmetro forem em formato de string', () => {
  expect(sum('2', '2')).toBe(4);
});

it('deve disparar um erro quando um valor esperado não for passado no parâmetro.', () => {
  expect(() => {
    sum('', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
