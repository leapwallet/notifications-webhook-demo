import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { eventStream } from 'remix-utils';
import { emitter } from '~/services/emitter.server';

export async function loader({ request }: LoaderArgs) {
  let params = new URL(request.url).searchParams;

  const type = params.get('type');
  const blockchain = params.get('blockchain');

  const event = `${blockchain}:${type}`;

  const response = eventStream(request.signal, (send) => {
    const handle = (tx: string) => {
      send({ event: 'tx', data: tx });
    };

    emitter.addListener(event, handle);

    return function clear() {
      emitter.removeListener(event, handle);
    };
  });

  response.headers.set('Content-Type', 'text/event-stream');
  response.headers.set('Cache-Control', 'no-cache');
  response.headers.set('X-Accel-Buffering', 'no');

  return response;
}

export default function action({ request }: ActionArgs) {
  return new Response('Not Allowed', {
    statusText: 'Method Not Allowed',
    status: 405,
  });
}
