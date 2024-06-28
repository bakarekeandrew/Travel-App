import axios from 'axios';

export const getPlaceData = async (type: String) => {
    try {
        const{data : {data}} =  await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
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
                'x-rapidapi-key': '1dba4351dbmshea82d85beb48662p1978b0jsnb4f85b77adb6',             
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              },
          }  
        );

        return data;
    } catch (error) {
        return null;
    }
};


