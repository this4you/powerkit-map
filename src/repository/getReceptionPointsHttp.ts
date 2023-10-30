import { appAxios, BASE_URL } from './axios.ts';
import { ReceptionPointResponse } from './model/ReceptionPointResponse.ts';
import { ReceptionPoint } from '../model/ReceptionPoint.ts';

const URL = `${BASE_URL}GetReceptionPoints`;
export const getReceptionPointsHttp = async (): Promise<ReceptionPoint[]> => {
    const response = await appAxios.get<{}, ReceptionPointResponse, {}>(URL);

    //@ts-ignore
    return response.data.GetReceptionPointsResult?.map(it => ({
        id: it.Id,
        information: it.Information,
        lat: it.Lat,
        lng: it.Lng,
        name: it.Name,
    })) || [];
}