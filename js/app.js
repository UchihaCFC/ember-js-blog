/**
	Author: Carolina Fernandez Canovas (@UchihaCFC)
	Descripcion: Blog sencillo con EmberJS para #jsIO
**/


//creando la aplicacion con ember 
App = Ember.Application.create();

//EmberData (si lo tenemos)

/*App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'App.MiAdaptadorPersonalizado'
});*/

//Creando nuestras primeras rutas

App.Router.map (function (){
	this.resource('posts'),
	this.resource('sobre');
});


//Creando el primer modelo con datos
App.Post = DS.Model.extend({
	title: 	DS.attr('string'),
	author: DS.attr('string'),
	intro: 	DS.attr('string'),
	description: DS.attr('string'),
	publishedAt: DS.attr('date')
});

//Creamos la ruta conectada a nuestro modelo desde el 
//controlador para los posts

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return App.Post.find();
	}
});

//Introducimos datos en el modelo con FIXTURES

App.Post.FIXTURES = [{
	id: 1,
	title: "Ember mola", 
	author: "uchihacfc",
	publishedAt: new Date ('04-12-2014'),
	intro: "Ember es un framework de Javascript",
	description: "Ember es uno de los frameworks más populares de javascript, cuando nos referimos a frameworks mv*"
}, {
	id: 2,
	title: "Estoy haciendo mi primera app con ember", 
	author: "uchihacfc",
	publishedAt: new Date ('04-13-2014'),
	intro: "Estamos haciendo nuestra primera app con ember",
	description: "Hoy estamos haciendo nuestra primera app con ember en el jsio de desarrolloweb.com"

}];