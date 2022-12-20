import { CountRecipientNotifications } from './count-recipient-notifications';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
  test('it should be able to count recipients notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientsNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo2',
      }),
    );
    const { count } = await countRecipientsNotifications.execute({
      recipientId: 'exemplo',
    });

    expect(count).toEqual(2);
  });
});
