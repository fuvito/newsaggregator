'use client';

import { useEffect } from 'react';

const BootstrapClient = () => {
  useEffect(() => {
    // @ts-expect-error importing bootstrap javascript here
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return null;
};

export default BootstrapClient;
