"use client";
import React from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const Page = () => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return (
      <div className="h-screen flex  justify-center items-center">
        Loading
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className=" justify-center items-center px-8 py-4 ">
      <h1 className="w-full text-center text-4xl p-8 font-bold ">Todo List</h1>

      <table className="w-full pt-4">
        <thead>
          <tr>
            <th className="border p-3 bg-slate-300 ">Id</th>
            <th className="border p-3 bg-slate-300 ">Title</th>
            <th className="border p-3 bg-slate-300 ">Completed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((todo) => (
            <tr key={todo.id}>
              <td className="text-center border">{todo.id}</td>
              <td className="text-left border">{todo.title}</td>
              <td className="text-center border">{todo.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
