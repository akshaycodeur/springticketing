import { Priority } from '@prisma/client';

interface Props {
  priority: Priority;
}

const priorityType: Record<
  Priority,
  {
    label: string;
    backgroundColor: 'bg-red-100' | 'bg-amber-300' | 'bg-red-800';
    textColor: 'text-gray-900' | 'text-gray-500' | 'text-gray-100';
  }
> = {
  LOW: {
    label: 'Low',
    backgroundColor: 'bg-red-100',
    textColor: 'text-gray-900',
  },
  NORMAL: {
    label: 'Medium',
    backgroundColor: 'bg-amber-300',
    textColor: 'text-gray-500',
  },
  URGENT: {
    label: 'Urgent',
    backgroundColor: 'bg-red-800',
    textColor: 'text-gray-100',
  },
};

const PriorityBadge = ({ priority }: Props) => {
  const { label, backgroundColor, textColor } = priorityType[priority];
  return (
    <div
      className={`${backgroundColor} ${textColor}  px-2 text-center font-semibold rounded-md`}
    >
      {label}
    </div>
  );
};

export default PriorityBadge;
