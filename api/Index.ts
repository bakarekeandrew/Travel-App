import axios from 'axios';

export const getPlaceData = async (type:String) => {
    try {
        const{data : {data}} =  await axios.get(
          'https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary',
          {
            params: {
                bl_latitude: '25.15543993776612',
                tr_latitude: '25.41257834546226',
                bl_longitude: '51.39587210719369',
                tr_longitude: '51.62812119686502',
                limit: '30',
                currency: 'USD',
                lunit: 'km',
                lang: 'en_US'
              },
              headers: {
                'x-rapidapi-key': 'fa7d37782amsh037fd3a2d7d1555p1a6825jsn590494adfbd5',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              },
          }  
        );

        return data;
    } catch (error) {
        return null;
    }
};


