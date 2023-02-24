import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { badRequest, created } from 'remix-utils';
import { emitter } from '~/services/emitter.server';

export async function loader({ request }: LoaderArgs) {
  return new Response('Not Allowed', {
    statusText: 'Method Not Allowed',
    status: 405,
  });
}

export async function action({ request }: ActionArgs) {
  let data = await request.json();

  if (data) {
    const event = `${data.blockchain}:${data.__type}`;
    // check if there are listeners for event
    if (emitter.listenerCount(event) > 0) {
      console.log('Sent Event', Date.now(), event, data.txHash);
      emitter.emit(event, JSON.stringify(data));
    }
    return created('ok');
  }

  return badRequest('no data');
}
