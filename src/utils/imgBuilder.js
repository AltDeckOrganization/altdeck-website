import imageUrlBuilder from "@sanity/image-url";

export function imageUrlBuilding(image) {
  const imgBuilder = imageUrlBuilder({
    projectId: process.env.sanityId,
    dataset: "production",
  });
  const imageSrc = imgBuilder.image(image && image);
  return imageSrc;
}
