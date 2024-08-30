import Nothing from './Nothing'
test('Nothing exists', () => {
  expect(new Nothing().inside).toBe("foo")
})
