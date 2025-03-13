"use server";

import { Todo } from "@/schema/todo";
import { initializeClient } from "../supabase/client";

// Initialize the Supabase client
const supabase = initializeClient();

// Server action to Create a new Todo
export async function createTodo(todo: Todo) {
    try {
        const { data, error } = await supabase.from("todos").insert(todo).select();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
}

// Server action to Get all Todos
export async function getTodos() {
    try {
        const { data, error } = await supabase.from("todos").select('*').order('created_at', { ascending: false });
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;    
    }
}

// Server action to Update a Todo
export async function updateTodo(id: string, todo: Todo) {
    try {
        const { data, error } = await supabase.from("todos").update(todo).eq('id', id).select();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
}

// Server action to Delete a Todo
export async function deleteTodo(id: string) {
    try {
        const { error } = await supabase.from("todos").delete().eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return { message: "Todo deleted successfully" };
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    }
}
