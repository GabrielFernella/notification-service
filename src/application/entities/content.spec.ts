import { Content } from './content';

describe('Notification Content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação');

    expect(content).toBeTruthy(); //validação que o teste deu certo
  });

  test('it should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('aaa')).toThrow(); //validação que o teste deu certo
  });

  test('it should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(); //validação que o teste deu certo
  });
});
