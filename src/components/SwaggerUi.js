import React, { useEffect, useState } from "react";
import SwaggerUIReact from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import axios from "axios";

const SwaggerUI = () => {
  const [swaggerData, setSwaggerData] = useState(null);

  useEffect(() => {
    const fetchSwaggerData = async () => {
      try {
        const response = await axios.get(
          "https://petstore.swagger.io/v2/swagger.json"
        );
        setSwaggerData(response.data);
      } catch (error) {
        console.error("Failed to fetch Swagger data:", error);
      }
    };

    fetchSwaggerData();
  }, []);

  return swaggerData ? <SwaggerUIReact spec={swaggerData} /> : null;
};

export default SwaggerUI;
