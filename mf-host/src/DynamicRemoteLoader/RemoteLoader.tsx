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
    return <p>Not system specified</p>;
  }

  if (!ready) {
    return <p>Loading dynamic script: {url}</p>;
  }

  if (failed) {
    return <p>Failed to load dynamic script: {url}</p>;
  }

  const Component = lazy(loadComponent(scope, module));

  return (
    <Suspense fallback={`Loading Module ${module}`}>
      <Component />
    </Suspense>
  );
}

function loadComponent(scope: string, module: string) {
  return async () => {
    //@ts-ignore
    await __webpack_init_sharing__('default');
    const container = (window as any)[scope]; // or get the container somewhere else
    //@ts-ignore
    await container.init(__webpack_share_scopes__.default);
    const factory = await (window as any)[scope].get(module);

    return factory();
  };
}
