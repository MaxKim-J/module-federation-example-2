import { getVersion, getId } from 'shared-deps-mf-package';
import camelcase from 'lodash.camelcase';

function App() {
  return (
    <div>
      <p>Remote 1 App Loaded</p>
      <p>Remote 1의 공유 패키지 버전 : {getVersion()}</p>
      <p>Remote 1의 공유 패키지 ID: {getId()}</p>
      <p>
        Remote 1에서 shareScope:not-default로 공유되는 의존성{' '}
        {camelcase('lodash-camel-case')}
      </p>
    </div>
  );
}

export default App;
