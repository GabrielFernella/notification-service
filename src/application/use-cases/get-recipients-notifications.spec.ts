import { CountRecipientNotifications } from './count-recipient-notifications';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipients-notifications';

describe('Get recipients notifications', () => {
  test('it should be able to get notigications by recipients', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientsNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exemplo2',
      }),
    );
    const { notifications } = await getRecipientsNotifications.execute({
      recipientId: 'exemplo1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'exemplo1' }),
        expect.objectContaining({ recipientId: 'exemplo1' }),
      ]),
    );
  });
});
