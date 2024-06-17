import { Status } from '@prisma/client';

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: 'bg-red-400' | 'bg-blue-400' | 'bg-green-400' }
> = {
  OPEN: { label: 'Open', color: 'bg-red-400' },
  STARTED: { label: 'Started', color: 'bg-blue-400' },
  CLOSED: { label: 'Closed', color: 'bg-green-400' },
};
const StatusBadge = ({ status }: Props) => {
  return (
    <div
      className={`${statusMap[status].color} px-2 text-center font-semibold rounded-md`}
    >
      {statusMap[status].label}
    </div>
  );
};

export default StatusBadge;
