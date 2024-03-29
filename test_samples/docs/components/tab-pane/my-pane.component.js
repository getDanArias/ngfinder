"use strict";

var MyPaneController = function MyPaneController() {

	var ctrl = this;

	ctrl.$onInit = function () {

		ctrl.tabsCtrl.addPane(this);
	};
};

angular.module("main").component("myPane", {
	transclude: true,
	bindings: { title: "@" },
	templateUrl: "components/tab-pane/my-pane.html",
	controller: MyPaneController,
	require: { tabsCtrl: "^myTabs" }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFiLXBhbmUvbXktcGFuZS5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiTXlQYW5lQ29udHJvbGxlciIsImN0cmwiLCIkb25Jbml0IiwidGFic0N0cmwiLCJhZGRQYW5lIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbXBvbmVudCIsInRyYW5zY2x1ZGUiLCJiaW5kaW5ncyIsInRpdGxlIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsR0FBWTs7QUFFcEMsS0FBTUMsT0FBTyxJQUFiOztBQUVBQSxNQUFLQyxPQUFMLEdBQWUsWUFBWTs7QUFFMUJELE9BQUtFLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixJQUF0QjtBQUVBLEVBSkQ7QUFNQSxDQVZEOztBQVlBQyxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUNFQyxTQURGLENBQ1ksUUFEWixFQUNzQjtBQUNwQkMsYUFBWSxJQURRO0FBRXBCQyxXQUFVLEVBQUNDLE9BQU8sR0FBUixFQUZVO0FBR3BCQyxjQUFhLGtDQUhPO0FBSXBCQyxhQUFZWixnQkFKUTtBQUtwQmEsVUFBUyxFQUFDVixVQUFVLFNBQVg7QUFMVyxDQUR0QiIsImZpbGUiOiJjb21wb25lbnRzL3RhYi1wYW5lL215LXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IE15UGFuZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFxuXHRjb25zdCBjdHJsID0gdGhpcztcblx0XG5cdGN0cmwuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcblx0XHRjdHJsLnRhYnNDdHJsLmFkZFBhbmUodGhpcyk7XG5cdFx0XG5cdH07XG5cdFxufTtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5jb21wb25lbnQoXCJteVBhbmVcIiwge1xuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0YmluZGluZ3M6IHt0aXRsZTogXCJAXCJ9LFxuXHRcdHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvdGFiLXBhbmUvbXktcGFuZS5odG1sXCIsXG5cdFx0Y29udHJvbGxlcjogTXlQYW5lQ29udHJvbGxlcixcblx0XHRyZXF1aXJlOiB7dGFic0N0cmw6IFwiXm15VGFic1wifVxuXHR9KTtcbiJdfQ==
