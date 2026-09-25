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
      
      // Anti-Theft Protection: Instantly redirect any cloned website to official domain
      window.location.replace('https://mindmesh.co.in');
    }
  }, []);

  return null; // This component renders nothing visually
};

export default SecurityGuard;
