import { TodoList } from "@/components";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-6xl font-bold">ToDo</h1>
        </div>
        <TodoList />
      </div>
    </main>
  );
}
