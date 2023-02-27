import { chains, types } from '~/lib/constants';
import { useCallback, useEffect, useState, Fragment } from 'react';
import { ClientOnly } from 'remix-utils';
import { ReactJson, theme } from '~/react-json.client';
import { BellRinging, CaretDown } from '~/assets/icons';
import { useEventSource } from '~/hooks/use-event-source';
import { signal } from '@preact/signals-react';
import { Listbox, Transition } from '@headlessui/react';

export const webhookData = signal<Record<string, any>[]>([]);

export default function HomePage() {
  const [type, setType] = useState({
    name: 'Send',
    id: 'cosmos.bank.send',
  });
  const [blockchain, setBlockchain] = useState({
    name: 'Cosmos Hub',
    id: 'cosmosHub',
  });
  const [subscribed, setSubscribed] = useState(false);

  useEventSource(
    `/sse/transactions?blockchain=${encodeURIComponent(
      blockchain.id!
    )}&type=${encodeURIComponent(type.id!)}`,
    {
      event: 'tx',
      enabled: subscribed,
    },
    webhookData
  );

  const resetData = useCallback(() => {
    if (webhookData.peek().length > 0) {
      webhookData.value = [];
    }
  }, []);

  useEffect(() => {
    resetData();
  }, [type, blockchain, resetData]);

  useEffect(() => {
    webhookData.subscribe(() => {
      const jsonContainer = document.querySelector(
        '.react-json-view .object-key-val > .object-container > .object-content'
      );
      setTimeout(() => {
        const lastChild = jsonContainer?.lastChild as Element | null;
        lastChild?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 50);
    });
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-gray-900 via-slate-900 to-gray-900 backdrop-blur-md py-8">
      <header className="container mx-auto px-4 sm:px-auto text-gray-200 flex items-center">
        <div className="flex items-center">
          <BellRinging strokeWidth={28} size={28} />
          <h1 className="font-bold text-2xl sm:text-3xl ml-2">Leap Alerts</h1>
        </div>
        <a
          href="https://leapwallet.github.io/notifications-webhook-demo/"
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto block underline text-gray-300 hover:text-green-400 transition-all text-lg font-bold"
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
            <Listbox
              value={type.id}
              onChange={(id) => setType(types.find((t) => t.id === id)!)}
            >
              <div className="relative mt-1 min-w-[200px] w-full">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-500 bg-[#282c34] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-gray-50">
                  <span className="block truncate">{type.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <CaretDown size={20} />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#282c34] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10 border border-gray-600">
                    {types.map(({ name: txName, id: txType }) => (
                      <Listbox.Option
                        key={txType}
                        className={({ active, selected }) =>
                          `relative cursor-default select-none py-2 px-4 text-gray-50 ${
                            active ? (!selected ? 'bg-gray-500' : '') : ''
                          } ${selected ? 'bg-blue-400' : ''}`
                        }
                        value={txType}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-bold' : 'font-normal'
                              }`}
                            >
                              {txName}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="sm:ml-4 mt-2 sm:mt-0">
            <label className="text-gray-400 uppercase tracking-wider font-bold">
              Blockchain
            </label>
            <Listbox
              value={blockchain.id}
              onChange={(id) => setBlockchain(chains.find((t) => t.id === id)!)}
            >
              <div className="relative mt-1 min-w-[200px] w-full">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-500 bg-[#282c34] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-gray-50">
                  <span className="block truncate">{blockchain.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <CaretDown size={20} />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#282c34] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10 border border-gray-600">
                    {chains.map(({ name: chainName, id: chainId }) => (
                      <Listbox.Option
                        key={chainId}
                        className={({ active, selected }) =>
                          `relative cursor-default select-none py-2 px-4 text-gray-50 ${
                            active ? (!selected ? 'bg-gray-500' : '') : ''
                          } ${selected ? 'bg-blue-400' : ''}`
                        }
                        value={chainId}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-bold' : 'font-normal'
                              }`}
                            >
                              {chainName}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
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
                if (webhookData.value.length === 0) {
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
                      onClick={resetData}
                    >
                      Clear
                    </button>
                    <ReactJson
                      src={webhookData.value}
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
