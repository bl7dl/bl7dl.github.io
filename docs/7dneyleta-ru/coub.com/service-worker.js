'use strict';

var COUB_DATA_URL = "../../https@coub.com/web_pushes/latest";

var NOTIFICATION_TAG = 'coub-push-notification';

function showNotification(title, body, data, icon) {
  var notificationOptions = {
    body: body,
    icon: icon ? icon : 'push_notification_icon_160x160.png',
    tag: NOTIFICATION_TAG,
    data: data
  };
  return self.registration.showNotification(title, notificationOptions);
}

self.addEventListener('push', function(event) {
  //console.log('Received a push message', event);

  // Since this is no payload data with the first version
  // of Push notifications, here we'll grab some data from
  // an API and use it to populate a notification
  event.waitUntil(
    fetch(COUB_DATA_URL, { method: 'GET' })
      .then(function(response) {
        if (response.status !== 200) {
          // Throw an error so the promise is rejected and catch() is executed
          throw new Error('Invalid status code from Coub API: ' + response.status);
        }

        // Examine the text in the response
        return response.json().then(function(data) {
          //console.log('Coub API data: ', data);
          /*if (data.query.count === 0) {
           // Throw an error so the promise is rejected and catch() is executed
           throw new Error();
           }*/

          var title = data.title;
          var message = data.sub;

          // Add this to the data of the notification
          var urlToOpen = data.link;

          var notificationFilter = {
            tag: NOTIFICATION_TAG
          };

          var notificationData = {
            url: urlToOpen
          };

          if (!self.registration.getNotifications) {
            return showNotification(title, message, notificationData);
          }

          // Check if a notification is already displayed
          return self.registration.getNotifications(notificationFilter)
            .then(function(notifications) {
              if (notifications && notifications.length > 0) {
                // Start with one to account for the new notification
                // we are adding
                var notificationCount = 1;
                for (var i = 0; i < notifications.length; i++) {
                  var existingNotification = notifications[i];
                  if (existingNotification.data && existingNotification.data.notificationCount) {
                    notificationCount += existingNotification.data.notificationCount;
                  } else {
                    notificationCount++;
                  }
                  existingNotification.close();
                }
                message = 'You have ' + notificationCount + ' coub updates';
                notificationData.notificationCount = notificationCount;
              }

              return showNotification(title, message, notificationData);
            });
        });
      })
      .catch(function(err) {
        console.error('Unable to retrieve data', err);

        var title = 'An error occured';
        var message = 'We were unable to get the information for this push message';

        return showNotification(title, message);
      })
  );
});

self.addEventListener('notificationclick', function(event) {
  var url = event.notification.data.url;
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});