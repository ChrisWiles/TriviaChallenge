import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

function useHistoryHandler() {
  const history = useHistory();

  const handleHistoryChange = useCallback((url = '') => () => history.push(url), [history]);

  return handleHistoryChange;
}

export default useHistoryHandler;
