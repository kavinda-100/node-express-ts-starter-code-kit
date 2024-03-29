export type MessageResponse = {
    message: string;
}

export type ErrorMessage = MessageResponse & {
    stack?: string;
}