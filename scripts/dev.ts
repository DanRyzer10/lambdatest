import { handler } from '../index';

const sampleEvent = {
  httpMethod: 'GET',
  path: '/health',
  body: null,
} as Parameters<typeof handler>[0];

async function main() {
  const result = await handler(sampleEvent, {} as never, () => undefined);

  console.log(JSON.stringify(result, null, 2));
}

void main();