// Vue의 서버 렌더링 API
import { renderToString } from 'vue/server-renderer';
import { createApp } from './app';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  const app = createApp();
  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR 예제</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

server.listen(port, () => {
  console.log(`Ready for ${port} port 🚀`);
});
