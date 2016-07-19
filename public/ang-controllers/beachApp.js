var app = angular.module('BeachApp', []);

app.controller('CollectionsController', function(){
	this.imageData = [
	{
		img1:'/static/img/beach01.jpg',
		img2:'/static/img/beach02.jpg'
	},
	{
		img1:'/static/img/beach03.jpg',
		img2:'/static/img/beach04.jpg'
	},
	{
		img1:'/static/img/beach05.jpg',
		img2:'/static/img/beach06.jpg'
	},
	{
		img1:'/static/img/beach07.jpg',
		img2:'/static/img/beach08.jpg'
	},
	{
		img1:'/static/img/beach09.jpg',
		img2:'/static/img/beach10.jpg'
	}
	];
});