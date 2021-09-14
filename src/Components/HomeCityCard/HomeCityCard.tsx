import React, {FC} from "react";

interface HomeCityCardProps {
  cityName: string;
}

export const HomeCityCard: FC<HomeCityCardProps> = ({cityName}) => {
  return (
      <div className="card">
          <p>{cityName}</p>
      </div> 
    );
  };

export default HomeCityCard;
