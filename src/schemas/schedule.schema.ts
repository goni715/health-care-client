import { z } from 'zod';

export const createScheduleSchema = z.object({
    startDate: z.any(),
    endDate: z.any()
})