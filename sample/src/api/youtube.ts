import axios from 'axios';
import { youtubeData } from '../types/type';

export const getYoutubeData = async (param: string): Promise<youtubeData> => {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/search?$key=<api_key>&part=snippet&q=' + param);
    return res.data;
}