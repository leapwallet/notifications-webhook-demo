import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { eventStream } from 'remix-utils';
import { emitter } from '~/services/emitter.server';

export async function loader({ request }: LoaderArgs) {
  let params = new URL(request.url).searchParams;

  const type = params.get('type');
  const blockchain = params.get('blockchain');

  const event = `${blockchain}:${type}`;

  const response = eventStream(request.signal, (send) => {
    const handle = (_tx: string) => {
      const tx = JSON.parse(_tx);
      console.log(
        'Received Event',
        Date.now(),
        `${tx.blockchain}:${tx.__type}`,
        tx.txHash
      );
      send({ event: 'tx', data: _tx });
    };

    emitter.addListener(event, handle);

    send({ event: 'tx', data: 'null' });

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
