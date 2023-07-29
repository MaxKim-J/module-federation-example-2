import { getVersion, getId } from 'shared-deps-mf-package';
import camelcase from 'lodash.camelcase';
import { format } from 'date-fns';

function App() {
  return (
    <div>
      <p>Remote 1 App Loaded</p>
      <p>Remote 1의 공유 패키지 버전 : {getVersion()}</p>
      <p>Remote 1의 공유 패키지 ID: {getId()}</p>
      <p>
        loadsh.camelcase: Remote 1과 Remote 2가 같은 버전(^4.3.0)으로 공유하는
        의존성 {camelcase('lodash-camel-case')}
      </p>
      <p>
        date-fns: Remote 1(2.30.0)과 Remote 2(2.20.0)에서 모두 쓰이지만 버전이
        다른 의존성 {format(new Date(2023, 7, 28), 'yyyy-MM-dd')}
      </p>
    </div>
  );
}

export default App;
