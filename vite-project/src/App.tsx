import { defineComponent } from 'vue'

export const App = defineComponent({
    setup() {
        return () => {
            return (
                <div>
                    <App />
                </div>
            )
        }
    },
});
