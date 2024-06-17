import StatusBadge from '@/components/StatusBadge';
import prisma from '@/prisma/db';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <>
      <table class="w-full">
        <thead>
          <tr className="p-2 bg-slate-200 space-x-4">
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Created on</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {tickets
            ? tickets.map((ticket) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-50"
                  key={ticket.id}
                >
                  <td className="px-4 py-2 text-sm font-medium text-gray-700">
                    {ticket.id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {ticket.title}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 w-full">
                    {ticket.description}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <StatusBadge status={ticket.status} />
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {ticket.priority}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {new Date(ticket.createdAt).toLocaleDateString('en-US', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {new Date(ticket.updatedAt).toLocaleDateString('en-US')}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Tickets;
