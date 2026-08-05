// src/lib/images.ts
const CLOUD_NAME = "kjlajbrr";

function cld(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

export const images = {
  bluering: cld("Blue_stone_2_pjjdzn"),
  bluering1: cld("Blue_stone_3_depmd7"),
  bluering2: cld("Blue_stone_4_c4mvlm"),
  bluering3: cld("Blue_stone_tkayfe"),

  SpiralRing:cld("Spiral"),
  SpiralRing2:cld("Spiral_2"),
  SpiralRing4:cld("Spiral_hand"),

  HeartRing:cld("Hearts_1"),
  HeartRing2:cld("Hearts_2"),
  HeartRing3:cld("Hearts_3"),

  Floralring:cld("Floral_ring"),
  Floralring2:cld("Floral_ring_2"),
  Floralring3:cld("Floral_ring_3"),

    Multigem:cld("Multi_gem"),
    Multigem2:cld("Multi_gem_2"),
    Multigem3:cld("Multi_gem_3"),
    Multigem4:cld("Multi_gem_4"),

    SimpleRing:cld("Simple_image_2"),
    SimpleRing2:cld("Simple_ring"),
    SimpleRing3:cld("Simple_ring_3"),

    redring1:cld("red-ring-1"),
    redring2:cld("red-ring-2"),
    redring3:cld("red-ring-3"),
    redring4:cld("red-ring-4"),


    Spread:cld("multi-stone-ring-1"),
    Spread2:cld("multi-stone-ring-2"),
    Spread3:cld("multi-stone-ring-3"),
    Spread4:cld("multi-stone-ring-4"),

    ColoredRing:cld("colored-1"),
    ColoredRing2:cld("colored-2"),
    ColoredRing3:cld("colored-3"),

    SimpleImage:cld("Simple-Ring_2"),
    SimpleImage2:cld("Simple-Ring_1"),  
    SimpleImage3:cld("Simple-Ring_3"),    
};

export const Earing_images = {

  Song_Drop:cld("Song_Drop"),
  Song_Drop2:cld("Song_Drop_2"),
  Song_Drop3:cld("Song_Drop_3"),
 
  Flower:cld("Flower"),
  Flower2:cld("Flower_2"),

  Heart_Earing :cld("Heart_Earings"),
  Heart_Earing2 :cld("Heart_Earings_2"),
  Heart_Earing3 :cld("Heart_Earings_3"),

  Long:cld("Long"),
  Long2:cld("Long_2"),
  Long3:cld("Long_3"),

  Earing_Set:cld("Set_1"),
  Earing_Set2:cld("Set_2"),
  Earing_Set3:cld("Set"),

  Sun_shape:cld("Sun_shape"),
  Sun_shape2:cld("Sun_shape_2"),
  Sun_shape3:cld("Sun_shape_1"),

  Crown:cld("Crown_1"),
  Crown2:cld("Crown_2"),
  Crown3:cld("Crown"),

  Latkan:cld("Latkan"),
  Latkan2:cld("Latkan_2"),

  Dial_Shape:cld("Dial_good"),
  Dial_Shape2:cld("Dial_good_2"),

  Planet: cld("Planet"),
  Planet1: cld("Planet_1"),
  Planet_b: cld("Planet_b"),
};