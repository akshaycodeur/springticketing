import prisma from '@/prisma/db';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  console.log(tickets);
  return (
    <div>
      <table class="table-auto">
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
          {tickets.map((ticket) => (
            <tr className="border-b">
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
