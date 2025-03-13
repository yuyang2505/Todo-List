// Define the todo type

export interface Todo {
    id?: number;
    title: string;
    description?: string;
    isCompleted: boolean;
    createdAt: Date;
}