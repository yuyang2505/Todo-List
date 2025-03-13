"use client";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient()

  return (
    <div>
      <h1>Todo App</h1>
    </div>
  );
}
