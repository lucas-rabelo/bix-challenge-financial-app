import z from 'zod';

export const filterDashboardZodSchema = z.object({
  startDate: z.number().optional(),
  endDate: z.number().optional(),
  states: z.string().optional(),
  industries: z.string().optional(),
  accounts: z.string().optional(),
});