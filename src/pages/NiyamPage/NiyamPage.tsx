import { useParams } from 'react-router-dom';

function NiyamPage() {
  const { niyamId } = useParams<RouteParams>();

  return <div data-testid={niyamId}></div>;
}

export default NiyamPage;
