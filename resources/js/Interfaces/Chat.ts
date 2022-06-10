import ChatMessage from "@/Interfaces/ChatMessage";

export default interface Chat {
    id: number;
    messages: ChatMessage[];
    created_at: Date;
    updated_at: Date;
};
