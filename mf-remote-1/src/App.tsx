import { getVersion, getId } from 'shared-deps-mf-package';
import camelcase from 'lodash.camelcase';

function App() {
  return (
    <div>
      <p>Remote 1 App Loaded</p>
      <p>Remote 1의 공유 패키지 버전: {getVersion()}</p>
      <p>Remote 1의 공유 패키지 ID: {getId()}</p>
      <p>
        Remote 1에서만 쓰이지만 공유되는 패키지 {camelcase('lodash-camel-case')}
      </p>
    </div>
  );
}

export default App;
