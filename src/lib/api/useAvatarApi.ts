import { useApi } from './ApiProvider';
import { getDicebearUrl } from './avatarUtils';

export const useAvatarApi = () => {
    const api = useApi();

    const fetchAvatar = async (seed: string, style: string = 'avataaars') => {
        return api.makeRequest<Blob>({
            endpoint: `https://api.dicebear.com/7.x/${style}/svg`,
            method: 'GET',
            params: { seed },
            headers: { Accept: 'image/svg+xml' },
            storageStrategy: 'local',
            storageKey: `avatar_${style}_${seed}`
        });
    };

    return {
        getDicebearUrl,
        fetchAvatar,
        loading: api.loading,
        error: api.error
    };
};