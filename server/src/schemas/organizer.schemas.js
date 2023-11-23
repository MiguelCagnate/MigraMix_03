import z from "zod";
export const organizerSchema = z.object({
  eventPlannerBio: z.string({ required_error: "Biography is required" }),
  eventPlannerMainLink: z.string({ required_error: "Link is required" }).optional(),
  eventProfilePicture: z.string({ required_error: "Picture is required" }).optional(),
});
