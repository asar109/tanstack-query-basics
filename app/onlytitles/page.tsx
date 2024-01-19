"use client";
import React from "react";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const Page = () => {
  interface Todo {
    title: string;
  }

  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["onlytitles"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    select: (data) => data.map((todo) => ({ title: todo.title  , })),
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
            <th className="border p-3 bg-slate-300 ">Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((todo) => (
            <tr key={todo.title}>
              <td className="text-left border">{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
