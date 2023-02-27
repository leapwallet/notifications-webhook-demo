import type { Signal } from '@preact/signals-react';
import { useEffect } from 'react';

export function useEventSource(
  url: string,
  {
    event,
    init,
    enabled = true,
  }: {
    event: string;
    init?: EventSourceInit;
    enabled?: boolean;
  },
  dataSignal: Signal
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const eventSource = new EventSource(url, init);
    const listener = (event: MessageEvent) => {
      if (event.data && event.data !== 'null' && event.data !== '') {
        dataSignal.value = [...dataSignal.value, JSON.parse(event.data)];
      }
    };

    eventSource.addEventListener(event, listener);

    return () => {
      eventSource.removeEventListener(event, listener);
      eventSource.close();
    };
  }, [url, event, init, enabled, dataSignal]);
}
