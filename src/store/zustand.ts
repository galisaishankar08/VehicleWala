import {create} from 'zustand';

interface ChatMessage {
    text: string;
    isUser: boolean;
}

interface ChatStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  messages: ChatMessage[];
  setMessages: (messages: ChatMessage[]) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useChatStore;
