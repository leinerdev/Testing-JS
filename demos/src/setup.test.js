describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('Case 2');
    expect(1 + 1).toBe(2);
  });

  describe('Other group', () => {
    expect(1 + 3).toBe(4);
  });
});
