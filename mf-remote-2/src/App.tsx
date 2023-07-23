import { getVersion, getId } from 'shared-deps-mf-package';
import camelcase from 'lodash.camelcase';
import { format } from 'date-fns';

function App() {
  return (
    <div>
      <p>Remote 2 App Loaded</p>
      <p>Remote 2의 공유 패키지 버전: {getVersion()}</p>
      <p>Remote 2의 공유 패키지 ID: {getId()}</p>
      <p>
        Remote 2에서 shareScope:default로 공유되는 의존성{' '}
        {camelcase('lodash-camel-case')}
      </p>
      <p>
        Remote 1과 Remote 2에서 공유하는 의존성 date-fns{' '}
        {format(new Date(2023, 7, 28), 'yyyy-MM-dd')}
      </p>
    </div>
  );
}

export default App;
