import z from 'zod';
import { filterDashboardZodSchema } from './schema';

export type FilterDashboardSchema = z.infer<typeof filterDashboardZodSchema>;
