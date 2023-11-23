import z from "zod";
export const artistSchema = z.object({
  ArtistsProfilePicture: z
    .string({
      required_error: "Profile Picture is required",
    })
    .optional(),
  ArtistBio: z.string({ required_error: "Biography is required" }),
  ArtistMainLink: z.string({ required_error: "Main link is required" }),
  ArtistSecundaryLink: z
    .string({
      required_error: "Secundary link is required",
    })
    .optional(),
  ArtistThirdLink: z
    .string({ required_error: "Third link is required" })
    .optional(),
  MusicGenre: z
    .string({ required_error: "Music genre is required" })
    .optional(),
  Performance: z.string({ required_error: "Performance is required" }),
  Type_of_performance: z.string({
    required_error: "Type of performance is required",
  }),
  ContactNumber: z.string({ required_error: "Contact number is required" }),
});
