import { paginate } from './paginate';

describe('Функция paginate:', () => {
  test('Возвращает пустой массив, при отсутвии элементов', () => {
    const testItems: Array<object> = [];
    const excpectedResult: Array<object> = [];
    const result = paginate(testItems, 1, 1);
    expect(result).toEqual(excpectedResult);
  });
});
