import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { customAlphabet } from 'nanoid';
import { eventStream } from '~/lib/server/event-stream';
import { emitter } from '~/services/emitter.server';

const generateId = customAlphabet('123456789ABCDEF', 64);

export async function loader({ request }: LoaderArgs) {
  let params = new URL(request.url).searchParams;

  const type = params.get('type');
  const blockchain = params.get('blockchain');

  const event = `${blockchain}:${type}`;

  const response = eventStream(request.signal, (send) => {
    const handle = (txData: string, txHash: string) => {
      send({ event: 'tx', data: txData, id: txHash });
    };

    emitter.addListener(event, handle);

    send({ event: 'tx', data: 'null', id: generateId() });

    return function clear() {
      emitter.removeListener(event, handle);
    };
  });

  response.headers.set('Content-Type', 'text/event-stream');
  response.headers.set('Cache-Control', 'no-cache');
  response.headers.set('X-Accel-Buffering', 'no');

  return response;
}

export async function action({ request }: ActionArgs) {
  return new Response('Not Allowed', {
    statusText: 'Method Not Allowed',
    status: 405,
  });
}
