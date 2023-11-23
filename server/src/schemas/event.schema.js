import z from "zod";
export const eventSchema = z
  .object({
    eventTitle: z.string({ required_error: "Event title is required" }),
    eventDescription: z.string({
      required_error: "Event Description link is required",
    }),
    urlEvent: z.string({
      required_error: "URL event link is required",
    }),
    typeOfActivity: z.string({
      required_error: "Type of activity is required",
    }),
    artistEvent: z.string({ required_error: "Artist event is required" }),
    initialDate: z.string({ required_error: "Initial date is required" }),
    finalDate: z.string({
      required_error: "Final date is required",
    }),
    eventImage: z.string({ required_error: "Event image is required" }),
  })
  .optional();
