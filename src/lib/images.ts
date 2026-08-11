// src/lib/images.ts
const CLOUD_NAME = "kjlajbrr";

function cld(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

