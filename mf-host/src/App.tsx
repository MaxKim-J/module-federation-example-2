import { ModuleLoader } from './DynamicRemoteLoader';

import { getVersion, getId } from 'shared-deps-mf-package';

function App() {
  return (
    <div>
      <h1>Host!!</h1>
      <p>Host의 공유 패키지 버전 {getVersion()}</p>
      <p>Host의 공유 패키지 Id {getId()}</p>
      <div>
        <h2>Remote 1</h2>
        <ModuleLoader
          scope="remote1"
          module="./App"
          url="http://localhost:3001/remoteEntry.js"
        />
      </div>
      <div>
        <h2>Remote 2</h2>
        <ModuleLoader
          scope="remote2"
          module="./App"
          url="http://localhost:3002/remoteEntry.js"
        />
      </div>
    </div>
  );
}

export default App;
