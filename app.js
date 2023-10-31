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
    <li className="py-4 flex">
    <img className="h-10 w-10 rounded-full" src={team.logo} alt="" />
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">{team.name}</p>
      <p className="text-sm text-gray-500">{team.city}</p>
    </div>
  </li>
    `,
  });
}
