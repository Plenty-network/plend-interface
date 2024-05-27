import axios from 'axios';
import { useState } from 'react';
import { CustomMarket, marketsData } from 'src/ui-config/marketsConfig';

export const useFaucetCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(false);

  const makeFaucetCall = async (address: string) => {
    setIsLoading(true);
    try {
      const result = (
        await axios.post(marketsData[CustomMarket.etherlink_testnet].faucetUrl, {
          address,
        })
      ).data;
      setData(true);
      setIsError(false);
      console.log(result);
    } catch (error) {
      console.error(error);
      setData(false);
      setIsError(true);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    isError,
    data,
    makeFaucetCall,
  };
};
