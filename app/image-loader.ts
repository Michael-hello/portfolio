

export default function myImageLoader(src: string) {
  
    // In production, we need to modify the base path for the image source
    // This is because the image is served from the /portfolio/ path
 
    return process.env.NODE_ENV === 'production' ? `/portfolio${src}` : src;
}