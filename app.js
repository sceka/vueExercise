const app = Vue.createApp({
	data() {
		return {
			showBook: 'true',
			title: 'Rich Dad Poor Dad',
			author: 'Robert Kiyosaki',
			age: '74'
		};
	},
	methods: {
		toogleShowBook() {
			this.showBook = !this.showBook;
		}
	}
});

app.mount('#app');
