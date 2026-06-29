'use client';

import dynamic from 'next/dynamic';

// Carga diferida del ChatWidget solo en el cliente, sin bloquear el renderizado inicial
const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
    ssr: false,
    loading: () => null,
});

export default function ClientChatWidget() {
    return <ChatWidget />;
}
