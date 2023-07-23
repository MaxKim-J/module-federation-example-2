import { lazy, Suspense } from 'react';
import { useDynamicScript } from './useDynamicScript';

export function ModuleLoader({
  scope,
  module,
  url,
}: {
  scope: string;
  module: string;
  url: string;
}) {
  const { ready, failed } = useDynamicScript({
    url: module && url,
  });

  if (!module) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = lazy(loadComponent(scope, module));

  return (
    <Suspense fallback={`Loading Module ${module}`}>
      <Component />
    </Suspense>
  );
}

function loadComponent(scope, module) {
  return async () => {
    //@ts-ignore
    await __webpack_init_sharing__('default');
    const container = window[scope]; // or get the container somewhere else
    //@ts-ignore
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);

    return factory();
  };
}
