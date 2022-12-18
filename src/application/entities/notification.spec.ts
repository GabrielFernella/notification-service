import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a Notification', () => {
    const notification = new Notification({
      content: new Content('new solicitation friend'),
      category: 'social',
      recipientId: 'exampleRecipientId',
    });

    expect(notification).toBeTruthy();
  });
});
