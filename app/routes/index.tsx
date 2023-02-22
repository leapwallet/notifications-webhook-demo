import { chains, types } from '~/lib/constants';
import { useEffect, useState } from 'react';
import { ClientOnly, useEventSource } from 'remix-utils';
import { ReactJson, theme } from '~/react-json.client';
import Select from 'react-select';
import BellRinging from '~/assets/icons';

export default function HomePage() {
  const [type, setType] = useState<string>('cosmos.bank.send');
  const [blockchain, setBlockchain] = useState<string>('cosmosHub');
  const [subscribed, setSubscribed] = useState(false);

  const [allData, setAllData] = useState<Record<string, unknown>[]>([]);

  let data = useEventSource(
    subscribed
      ? `/sse/transactions?blockchain=${encodeURIComponent(
          blockchain!
        )}&type=${encodeURIComponent(type!)}`
      : '',
    {
      event: 'tx',
    }
  );

  useEffect(() => {
    setAllData([]);
  }, [type, blockchain]);

  useEffect(() => {
    if (data === null) {
      return;
    }
    // @ts-ignore
    setAllData((prev) => [...prev, JSON.parse(data)]);
  }, [data]);

  useEffect(() => {
    const jsonContainer = document.querySelector(
      '.object-key-val > .object-container > .object-content'
    );
    const lastChild = jsonContainer?.lastChild as Element | null;
    lastChild?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [allData]);

  return (
    <div className="w-full h-screen bg-slate-900 py-8">
      <header className="container mx-auto text-gray-200">
        <div className="flex items-center">
          <BellRinging strokeWidth={28} size={28} />
          <h1 className="font-bold text-3xl ml-2">Leap Alerts</h1>
        </div>
      </header>
      <main className="container mx-auto mt-12">
        <div className="flex items-center">
          <div>
            <label className="text-gray-400 uppercase tracking-wider font-bold">
              Tx Type
            </label>
            <Select<{ value: string; label: string }>
              value={{
                label: type,
                value: type,
              }}
              onChange={(e) => {
                if (e) setType(e.value);
              }}
              isClearable={false}
              isSearchable={true}
              name="type"
              options={types.map((type) => ({ value: type, label: type }))}
              className="min-w-[250px] mt-1"
              classNamePrefix="react-select"
            />
          </div>
          <div className="ml-4">
            <label className="text-gray-400 uppercase tracking-wider font-bold">
              Blockchain
            </label>
            <Select<{ value: string; label: string }>
              value={{
                label: blockchain,
                value: blockchain,
              }}
              onChange={(e) => {
                if (e) setBlockchain(e.value);
              }}
              isClearable={false}
              isSearchable={true}
              name="chain"
              options={chains.map((chain) => ({
                value: chain.id,
                label: chain.name,
              }))}
              className="min-w-[150px] mt-1"
              classNamePrefix="react-select"
            />
          </div>
          <button
            className={`px-4 py-[6px] ml-auto rounded border outline-none focus:ring transition-all font-bold ${
              subscribed
                ? 'bg-red-500 border-red-500 hover:border-red-200 text-gray-100'
                : 'bg-green-500 border-green-500 hover:border-green-200 text-gray-800'
            }`}
            onClick={() => {
              setSubscribed((prev) => !prev);
            }}
          >
            {subscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>
        </div>
        <div
          className="h-[70vh] overflow-y-auto rounded border border-gray-500 p-4 mt-4"
          style={{ background: '#282c34' }}
        >
          <ClientOnly
            fallback={<div className="bg-transparent w-full h-full" />}
          >
            {() => {
              return (
                <ReactJson
                  src={allData}
                  theme={theme}
                  iconStyle="square"
                  displayDataTypes={false}
                  displayObjectSize={false}
                  enableClipboard={false}
                  quotesOnKeys={false}
                  style={{
                    fontFamily:
                      'SF Mono, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    fontSize: '0.8rem',
                    userSelect: 'none',
                  }}
                />
              );
            }}
          </ClientOnly>
        </div>
      </main>
      <footer className="container mx-auto mt-4">
        <p className="text-gray-400 text-sm">
          Powered by{' '}
          <a
            href="https://leapwallet.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-all"
          >
            LeapWallet
          </a>
        </p>
      </footer>
    </div>
  );
}
