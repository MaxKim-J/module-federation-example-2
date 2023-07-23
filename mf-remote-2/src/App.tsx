import { getVersion, getId } from 'shared-deps-mf-package';

function App() {
  return (
    <div>
      <p>Remote 2 App Loaded</p>
      <p>Remote 2의 공유 패키지 버전: {getVersion()}</p>
      <p>Remote 2의 공유 패키지 ID: {getId()}</p>
    </div>
  );
}

export default App;
