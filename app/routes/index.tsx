import { chains, types } from '~/lib/constants';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils';
import { ReactJson, theme } from '~/react-json.client';
import BellRinging from '~/assets/icons';
import { useEventSource } from '~/hooks/use-event-source';
import { Select } from '~/react-select.client';

export default function HomePage() {
  const [type, setType] = useState<string>('cosmos.bank.send');
  const [blockchain, setBlockchain] = useState<string>('cosmosHub');
  const [subscribed, setSubscribed] = useState(false);

  const [allData, setAllData] = useState<Record<string, unknown>[]>([]);

  const latestEventData = useEventSource<Record<string, string>>(
    `/sse/transactions?blockchain=${encodeURIComponent(
      blockchain!
    )}&type=${encodeURIComponent(type!)}`,
    {
      event: 'tx',
      enabled: subscribed,
    }
  );

  useEffect(() => {
    setAllData([]);
  }, [type, blockchain]);

  useEffect(() => {
    if (latestEventData === null) {
      return;
    }
    setAllData((prev) => {
      if (prev.length === 100) {
        return [...prev.slice(10), latestEventData];
      }
      return [...prev, latestEventData];
    });
  }, [latestEventData]);

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
    <div className="w-full h-screen bg-gradient-to-tr from-gray-900 via-slate-900 to-gray-900 backdrop-blur-md py-8">
      <header className="container mx-auto px-4 sm:px-auto text-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <BellRinging strokeWidth={28} size={28} />
          <h1 className="font-bold text-2xl sm:text-3xl ml-2">Leap Alerts</h1>
        </div>
        <a
          href="https://leapwallet.github.io/notifications-webhook-demo/"
          target="_blank"
          rel="noreferrer noopener"
          className="block underline text-gray-300 hover:text-green-400 transition-all text-lg font-bold"
        >
          Docs
        </a>
      </header>
      <main className="container mx-auto px-4 sm:px-auto mt-6 sm:mt-8 flex flex-col-reverse sm:block">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end mt-6 sm:mt-0">
          <div>
            <label className="text-gray-400 uppercase tracking-wider font-bold">
              Tx Type
            </label>
            <ClientOnly
              fallback={
                <div className="bg-gray-800 h-9 rounded-md border border-gray-400 w-full sm:w-[250px] mt-1" />
              }
            >
              {() => {
                return (
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
                    inputId="select-type"
                    instanceId="select-type"
                    options={types.map((type) => ({
                      value: type,
                      label: type,
                    }))}
                    className="min-w-[250px] mt-1"
                    classNamePrefix="react-select"
                  />
                );
              }}
            </ClientOnly>
          </div>
          <div className="sm:ml-4 mt-2 sm:mt-0">
            <label className="text-gray-400 uppercase tracking-wider font-bold">
              Blockchain
            </label>
            <ClientOnly
              fallback={
                <div className="bg-gray-800 h-9 rounded-md border border-gray-400 w-full sm:w-[150px] mt-1" />
              }
            >
              {() => {
                return (
                  <Select<{ value: string; label: string }>
                    value={{
                      label: blockchain,
                      value: blockchain,
                    }}
                    onChange={(e) => {
                      if (e) setBlockchain(e.value);
                    }}
                    inputId="select-blockchain"
                    instanceId="select-blockchain"
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
                );
              }}
            </ClientOnly>
          </div>
          <button
            className={`px-4 py-[6px] mt-4 sm:mt-0 w-full sm:w-auto ml-auto rounded border outline-none focus:ring transition-all font-bold ${
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
        <div className="mt-0 sm:mt-6">
          <p className="text-gray-400 uppercase tracking-wider font-bold">
            Webhook Data
          </p>
          <div
            className="h-[50vh] sm:h-[65vh] overflow-y-auto rounded border border-gray-500 p-4 mt-2 relative"
            style={{ background: '#282c34' }}
          >
            <ClientOnly
              fallback={<div className="bg-transparent w-full h-full" />}
            >
              {() => {
                if (allData.length === 0) {
                  return (
                    <div className="flex flex-col justify-center items-center w-full h-full">
                      <p className="text-gray-300 text-center font-bold sm:text-lg">
                        No data to display
                      </p>
                      <p className="mt-1 text-gray-400 text-center text-sm sm:text-base">
                        {subscribed
                          ? 'Waiting for data'
                          : 'Subscribe to a webhook to see data here'}
                      </p>
                    </div>
                  );
                }
                return (
                  <>
                    <button
                      className="sticky block z-10 text-sm px-3 py-1 top-0 left-0 sm:mt-0 w-full sm:w-auto ml-auto rounded border outline-none focus:ring bg-gray-800 text-gray-300"
                      onClick={() => {
                        setAllData([]);
                      }}
                    >
                      Clear
                    </button>
                    <ReactJson
                      src={allData}
                      theme={theme}
                      iconStyle="square"
                      displayDataTypes={false}
                      displayObjectSize={false}
                      enableClipboard={false}
                      quotesOnKeys={false}
                      shouldCollapse={false}
                      style={{
                        fontFamily:
                          'SF Mono, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        fontSize: '0.8rem',
                        marginTop: '-1.5rem',
                      }}
                    />
                  </>
                );
              }}
            </ClientOnly>
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 sm:px-auto my-8 sm:my-4">
        <p className="text-gray-400 text-sm text-center sm:text-left">
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
