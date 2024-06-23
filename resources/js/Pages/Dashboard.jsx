import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import KanbanBoard from "@/Components/KanbanBoard";
import { Head } from "@inertiajs/react";
export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Dashboard" />
      <main className="bg-neutral-900">

      <div className="flex max-h-[calc(100vh-4rem)] w-full max-w-7xl mx-auto items-center justify-center overflow-y-auto">
        <KanbanBoard />
      </div>
      </main>
    </AuthenticatedLayout>
  );
}
