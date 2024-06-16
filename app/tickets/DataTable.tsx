import { Ticket } from '@prisma/client';
interface Props {
  tickets: Ticket[];
}
const DataTable = ({ tickets }: Props) => {
  console.log(tickets);
  return <div>DataTable</div>;
};

export default DataTable;
