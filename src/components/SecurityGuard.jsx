import { useEffect } from 'react';

const ALLOWED_DOMAINS = [
  'localhost',
  '127.0.0.1',
  'mindmesh.co.in',
  'www.mindmesh.co.in'
];

const SecurityGuard = () => {
  useEffect(() => {
    const hostname = window.location.hostname;
    
    // Check if the current domain is in the allowed list
    const isAllowed = ALLOWED_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith('.mindmesh.co.in')
    );

    if (!isAllowed) {
      console.warn(`⚠️ Security Alert: Application running on unauthorized domain: ${hostname}`);
      
      // OPTIONAL: Reporting logic would go here (requires backend)
      // sendReportToBackend({ domain: hostname, userAgent: navigator.userAgent });

      // Action: Redirect to the official site
      // This makes the cloned site unusable as it immediately sends users to the real one
      // window.location.href = 'https://mindmesh.co.in';
    }
  }, []);

  return null; // This component renders nothing visually
};

export default SecurityGuard;
