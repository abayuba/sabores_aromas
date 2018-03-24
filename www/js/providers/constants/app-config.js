/**
 * App Configuration
 */
(function(angular, undefined) {
angular
	.module('invisionApp')

	.constant('appConfig', (function () {
		'use strict';

		var appConfig = {
			menuLocation: 'primary',
			maxItemsPaging: 2,
			OneSignal: {
				enable: true,
				appId: '8815e066-76b2-4ffd-9e2b-b2a1221ca699', //Your OneSignal app id from onesignal.com
				options: {
					googleProjectNumber: '529189643060' //required for Android
				}
			},
			AdMob: {
				enable: true,
				adSize: 'SMART_BANNER',
				offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
				bgColor: 'black', // color name, or '#RRGGBB'
				isTesting: true, // set to true, to receiving test ad for testing purpose
				autoShow: true, // auto show interstitial ad when loaded, set to false if prepare/show
				Android: {
					banner: 'ca-app-pub-1111111111111111/1111111111',
					interstitial: 'ca-app-pub-1111111111111111/1111111111'
				},
				IOS: {
					banner: 'ca-app-pub-1111111111111111/1111111111',
					interstitial: 'ca-app-pub-1111111111111111/1111111111'
				}
			}
		};

		return appConfig;
	})());

})(window.angular);
