import { useEffect } from 'react';

declare global {
  interface Window {
    RAGCHAT_API_KEY?: string;
    RAGCHAT_BASE_URL?: string;
  }
}

export interface ChatbotWidgetProps {
  apiKey?: string;
  baseUrl?: string;
  enabled?: boolean;
}

const DEFAULT_API_KEY =
  import.meta.env.VITE_RAGCHAT_API_KEY || 'rc_live_pribadi_cc1e4850a2e6';
const DEFAULT_BASE_URL =
  import.meta.env.VITE_RAGCHAT_BASE_URL || 'http://localhost:3000';
const DEFAULT_ENABLED =
  import.meta.env.VITE_ENABLE_CHATBOT === 'true';

export default function ChatbotWidget({
  apiKey = DEFAULT_API_KEY,
  baseUrl = DEFAULT_BASE_URL,
  enabled = DEFAULT_ENABLED,
}: ChatbotWidgetProps) {
  useEffect(() => {
    if (!enabled || !apiKey || !baseUrl) {
      return;
    }

    // Set widget runtime configuration variables
    window.RAGCHAT_API_KEY = apiKey;
    window.RAGCHAT_BASE_URL = baseUrl;

    const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');
    const scriptSrc = `${normalizedBaseUrl}/widget.js`;
    const scriptId = 'ragchat-widget-script';

    // Prevent duplicate script injection
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      if (existingScript.src === scriptSrc) {
        return;
      }
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = true;
    script.onerror = () => {
      console.warn(
        `[ChatbotWidget] Failed to load widget script from ${scriptSrc}. Ensure the chatbot backend is running.`
      );
    };

    document.body.appendChild(script);

    return () => {
      const currentScript = document.getElementById(scriptId);
      if (currentScript) {
        currentScript.remove();
      }
      const btn = document.getElementById('ragchat-widget-btn');
      if (btn) {
        btn.remove();
      }
      const container = document.getElementById('ragchat-widget-container');
      if (container) {
        container.remove();
      }
    };
  }, [apiKey, baseUrl, enabled]);

  return null;
}
