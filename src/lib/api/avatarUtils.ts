export const getDicebearUrl = (seed: string, style: string = 'avataaars') => {
    return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}`;
};