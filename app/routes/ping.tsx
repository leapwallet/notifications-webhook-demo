import type { ActionArgs } from '@remix-run/node';
import { Response } from '@remix-run/node';

export async function loader() {
  return new Response('pong', {
    status: 200,
  });
}

export async function action({ request }: ActionArgs) {
  return new Response('Not Allowed', {
    statusText: 'Method Not Allowed',
    status: 405,
  });
}
