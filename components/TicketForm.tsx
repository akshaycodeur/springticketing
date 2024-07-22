'use client';

import { ticketSchema } from '@/app/ValidationSchemas/tickets';
import { Form } from '@/node_modules/react-hook-form/dist/form';
import { useForm } from '@/node_modules/react-hook-form/dist/useForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  async function onSubmit(values: z.infer<typeof ticketSchema) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <input type="text" name='title' render={({field}) =>(
            <
        )} />
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
