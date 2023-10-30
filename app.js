import { createSSRApp, ref } from 'vue';
import { data } from './data/index.js';

export function createApp() {
  return createSSRApp({
    setup() {
      const count = ref(1);

      return {
        count,
        data,
      };
    },
    template: `
      <div>
        <button @click="count++" style="width: 58px; height: 30px; border: none; background-color: black; border-radius: 8px; color: #ffffff;">
          {{ count }}
        </button>
        <ul>
          <li v-for="(d, i) in data" :key="item">{{ d['id'] }}</li>
        </ul>
      </div>
    `,
  });
}
