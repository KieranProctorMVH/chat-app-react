export default interface ChatMessage {
    id: number;
    chat_id: number;
    user_id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
}
