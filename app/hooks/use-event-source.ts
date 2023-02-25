import { useEffect, useState } from 'react';

export function useEventSource<T = any>(
  url: string,
  {
    event,
    init,
    enabled = true,
  }: {
    event: string;
    init?: EventSourceInit;
    enabled?: boolean;
  }
) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!enabled) {
      setData(null);
      return;
    }

    const eventSource = new EventSource(url, init);
    const listener = (event: MessageEvent) => {
      if (event.data && event.data !== null && event.data !== '') {
        setData(JSON.parse(event.data));
      } else {
        setData(null);
      }
    };

    eventSource.addEventListener(event, listener);

    return () => {
      eventSource.removeEventListener(event, listener);
      eventSource.close();
    };
  }, [url, event, init, enabled]);

  return data;
}
