import React, {FC} from "react";

interface HomeCityCardProps {
  cityName: string;
  cityHi: number;
  cityLo: number;
}

export const HomeCityCard: FC<HomeCityCardProps> = ({cityName, cityHi, cityLo}) => {
  return (
      <div className="card">
          <p>{cityName}</p>
          <p>{cityHi}</p>
          <p>{cityLo}</p>
      </div> 
    );
  };

export default HomeCityCard;
