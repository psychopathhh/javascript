const App = {
    data() {
        return {
            counter: 0,
            title: 'Счётчик'
        }
    }
}
//{{}} - интерполяция
/* const app = Vue.createApp(App)
app.mount('#app') */

//v-bind(вставить тест из vue в атрибут), v-on(при клике) - директивы

Vue.createApp(App).mount('#app')