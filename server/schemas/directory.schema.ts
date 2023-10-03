import { z } from 'zod'

export const Directory = z.object({
  name: z
    .string({
      required_error: 'Required',
      invalid_type_error: 'Must be text',
    })
    .min(1, 'Too short')
    .max(30, 'Too long'),
})
