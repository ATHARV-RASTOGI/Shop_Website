import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';

const CLOUD_NAME = "kjlajbrr";

function cld(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

type ProductImage = {
  public_id: string;
  alt: string;
  title: string;
};

export const getRings = createServerFn({ method: 'GET' }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'rings')
    .order('sort_order', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      angles: rawImages.map(img => ({
        src: cld(img.public_id),
        alt: img.alt,
        title: img.title
      }))
    };
  });
});

export const getEarrings = createServerFn({ method: 'GET' }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'earrings')
    .order('sort_order', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      angles: rawImages.map(img => ({
        src: cld(img.public_id),
        alt: img.alt,
        title: img.title
      }))
    };
  });
});

export const getNecklaces = createServerFn({ method: 'GET' }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'necklaces')
    .order('sort_order', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];

    const sliderImages = rawImages.length > 0
      ? rawImages.map(img => ({
        id: img.public_id,
        url: cld(img.public_id),
        alt: img.alt,
        title: img.title
      }))
      : [{
        id: 'fallback-necklace',
        url: '/cat-necklaces.webp',
        alt: 'Necklaces Collection',
        title: 'Necklaces'
      }];

    return {
      ...row,
      sliderImages
    };
  });
});

export const getFeatured = createServerFn({ method: 'GET' }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .limit(4);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      image: rawImages.length > 0 ? cld(rawImages[0].public_id) : '/cat-rings.webp'
    };
  });
});
