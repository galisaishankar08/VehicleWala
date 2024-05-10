import {create} from 'zustand';

interface User {
  id: string;
  username: string;
  email: string;
  messages: Message[];
}

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  user: User;
  userId: string;
  isUser: boolean;
}

interface StoreState {
  user: User;
  messages: Message[];
  loading: boolean;
}

const useStore = create<StoreState>((set) => ({
    user : { id:"", username: "", email: "", messages: []},
    messages: [],
    loading: false,

    setUser: (user: User) => set((state) => ({ user })),
    setMessages: (messages: Message[]) => set((state) => ({ messages })),
    addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
    setLoading: (loading: boolean) => set({ loading }),
  })
);

export default useStore;
