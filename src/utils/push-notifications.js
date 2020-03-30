const pushServerPublicKey =
  "BJbOYybLlMwHOK_HTjFk6Lzk5--foGOzoMgnlo4yd_aonJUj9EHG7JsokTW--tofSeTgC5u3eYoV_-iR7NWIrPY";

/**
 * checks if Push notification and service workers are supported by your browser
 */
function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */
async function askUserPermission() {
  return await Notification.requestPermission();
}

function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}

/**
 *
 * using the registered service worker creates a push notification subscription and returns it
 *
 */
async function createNotificationSubscription() {
  //wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  // subscribe and return the subscription
  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey
  });
}

/**
 * returns the subscription if present or nothing
 */
function getUserSubscription() {
  //wait for service worker installation to be ready, and then
  return navigator.serviceWorker.ready
    .then(function(serviceWorker) {
      return serviceWorker.pushManager.getSubscription();
    })
    .then(function(pushSubscription) {
      return pushSubscription;
    });
}

export {
  isPushNotificationSupported,
  askUserPermission,
  registerServiceWorker,
  createNotificationSubscription,
  getUserSubscription
};
