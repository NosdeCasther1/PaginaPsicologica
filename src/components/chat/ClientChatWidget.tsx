'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
  ssr: false,
  loading: () => null,
});

export default function ClientChatWidget() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 3500);
    return () => window.clearTimeout(timer);
  }, []);

  return isReady ? <ChatWidget /> : null;
}
