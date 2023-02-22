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
    emitter.emit(`${data.blockchain}:${data.__type}`, JSON.stringify(data));
    return created('ok');
  }

  return badRequest('no data');
}