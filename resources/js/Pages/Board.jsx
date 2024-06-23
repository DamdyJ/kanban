import KanbanBoard from "@/Components/KanbanBoard";

export default function Board() {
  return (
    <>
      <div className="flex h-screen w-full flex-col overflow-hidden bg-gray-950">
        <header className="flex h-16 w-full shrink-0 items-center justify-between bg-gray-800 px-4 py-2 text-white">
          <a href="/" aria-label="logo" className="text-2xl font-bold">
            Kanban
          </a>
          <nav>
            <ul>
              <li>
                <a href="/app"></a>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                  className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-offset-2"
                />
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex max-h-[calc(100vh-4rem)] items-center justify-center overflow-y-auto">
          <KanbanBoard />
        </main>
      </div>
    </>
  );
}
