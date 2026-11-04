import { useEffect } from 'react';

import { captureInstallReferrer, trackStored } from '../lib/referral';
import { useAuth } from '../state/auth';

/** Renders nothing: reads the install referrer once, and reports a sign-in for a referred device. */
export function RefTracker() {
  const { session } = useAuth();
  const userId = session?.user.id;

  useEffect(() => {
    captureInstallReferrer();
  }, []);

  useEffect(() => {
    if (userId) trackStored('signup');
  }, [userId]);

  return null;
}
