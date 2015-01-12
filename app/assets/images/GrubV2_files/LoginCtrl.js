angular.module('Grub')
    .controller('LoginCtrl', function ($scope) {
        
        var self = this;
      	self.submit = function() {
      		console.log('User clicked submit with ',
      			self.user);
      	};
    });
