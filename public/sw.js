function receivePushNotification(event) {
  const { title, text, icon, url } = event.data.json();
  console.log(event.data.json());
  const options = {
    data: url,
    body: text,
    icon: icon,
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(title, options));
}

function openPushNotification(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data));
}

self.addEventListener("push", receivePushNotification);
self.addEventListener("notificationclick", openPushNotification);
self.skipWaiting();
