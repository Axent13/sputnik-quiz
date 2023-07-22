import { paginate } from './paginate';

describe('Функция paginate:', () => {
  test('Возвращает пустой массив, при отсутвии элементов', () => {
    const testItems: Array<object> = [];
    const excpectedResult: Array<object> = [];
    const result = paginate(testItems, 1, 1);
    expect(result).toEqual(excpectedResult);
  });

  test('Возвращает массив из одного элемента, если он был передан один', () => {
    const testItems: Array<object> = [{ text: 'test' }];
    const excpectedResult: Array<object> = [{ text: 'test' }];
    const result = paginate(testItems, 1, 1);
    expect(result).toEqual(excpectedResult);
  });

  test('Возвращает 2 первых элемента для первой страницы', () => {
    const testItems: Array<object> = [
      { text: 'test1' },
      { text: 'test2' },
      { text: 'test3' },
      { text: 'test4' },
    ];
    const excpectedResult: Array<object> = [
      { text: 'test1' },
      { text: 'test2' },
    ];
    const result = paginate(testItems, 1, 2);
    expect(result).toEqual(excpectedResult);
  });

  test('Возвращает 3 и 4 элементы для второй страницы', () => {
    const testItems: Array<object> = [
      { text: 'test1' },
      { text: 'test2' },
      { text: 'test3' },
      { text: 'test4' },
    ];
    const excpectedResult: Array<object> = [
      { text: 'test3' },
      { text: 'test4' },
    ];
    const result = paginate(testItems, 2, 2);
    expect(result).toEqual(excpectedResult);
  });
});
